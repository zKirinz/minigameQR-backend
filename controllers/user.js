const user = require('../model/user');
const normalQuestion = require('../model/normalQuestion');
const hardQuestion = require('../model/hardQuestion');

const numberHardQuestion = 4;
const numberNormalQuestion = 6;

module.exports = {
  register: (req, res, next) => {
    const token = req.body.token;
    const name = req.body.name;
    const studentID = req.body.studentID;
    user.findOne({token: token}, function (err, student1) {
      if (!student1) {
        const date = new Date();
        res.status(400).json({
          success: false,
          message: 'Invalid token!',
          data: {
            code: 400,
            timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            path: `/users/register`,
            method: 'POST',
            message: 'The token you requested is not found',
          },
        });
      } else if (!student1.studentID) {
        user.findOne({studentID: studentID}, (err, student2) => {
          if (student2) {
            const date = new Date();
            res.status(403).json({
              success: false,
              message: 'This studentID has been used!',
              data: {
                code: 403,
                timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                path: `/users/register`,
                method: 'POST',
                message: 'Your student ID has been used with other token!',
              },
            });
          } else {
            student1.name = name;
            student1.studentID = studentID;
            student1.save();
            res.status(200).json({
              success: true,
              message: 'Register success!',
            });
          }
        });
      } else {
        if (student1.studentID.toLowerCase() !== studentID.toLowerCase()) {
          const date = new Date();
          res.status(403).json({
            success: false,
            message: 'This token is already being used by other user!',
            data: {
              code: 403,
              timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
              path: `/users/register`,
              method: 'POST',
              message: 'The token you requested is being used by other user!',
            },
          });
        } else {
          if (student1.name.toLowerCase() !== name.toLowerCase()) {
            const date = new Date();
            res.status(403).json({
              success: false,
              message: 'Name in this token does not match name in the request!',
              data: {
                code: 403,
                timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                path: `/users/register`,
                method: 'POST',
                message: 'Name in your token does not match name in your request!',
              },
            });
          } else {
            res.status(200).json({
              success: true,
              message: 'Already register, Login success!',
            });
          }
        }
      }
    });
  },

  start: (req, res, next) => {
    const token = req.query.token;
    const studentID = req.query.studentID;
    const name = req.query.name;
    user.findOne({token: token, studentID: studentID, name: name}, function (
      err,
      student
    ) {
      if (!student) {
        const date = new Date();
        res.status(400).json({
          success: false,
          message: 'Invalid user!',
          data: {
            code: 400,
            timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            path: `/start/${token}/${studentID}/${name}`,
            method: 'GET',
            message: 'User you request is not found',
          },
        });
      } else {
        if (student.timeEnd) {
          const date = new Date();
          res.status(403).json({
            success: false,
            message: 'User already submitted!',
            data: {
              code: 403,
              timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
              path: `/start?token=${token}&studentID=${studentID}&name=${name}`,
              method: 'GET',
              message: 'User you request already submitted',
            },
          });
        } else {
          if (student.timeStart) {
            res.status(200).json({
              success: true,
              message: 'Retrieved data successfully!',
              data: {
                questions: student.questions,
                timeStart: student.timeStart,
                message: 'Retrieved data successfully from database',
              },
            });
          } else {
            let quizs = [];
            let p1 = normalQuestion.aggregate().sample(numberNormalQuestion);
            let p2 = hardQuestion.aggregate().sample(numberHardQuestion);
            Promise.all([p1, p2]).then(async (values) => {
              quizs = quizs.concat(values[0]);
              quizs = quizs.concat(values[1]);
              student.questions = quizs;
              student.timeStart = Date.now();
              await student.save();
              for (let i of quizs) {
                delete i.answer;
              }
              res.status(200).json({
                success: true,
                message: 'Retrieved data successfully!',
                data: {
                  questions: student.questions,
                  timeStart: student.timeStart,
                  message: 'Retrieved data successfully after generating',
                },
              });
            });
          }
        }
      }
    });
  },

  end: (req, res, next) => {
    const token = req.body.token;
    const name = req.body.name;
    const studentID = req.body.studentID;
    const answer = req.body.answer;
    user.findOne({token: token, name: name, studentID: studentID}, (err, student) => {
      if (!student) {
        const date = new Date();
        res.status(400).json({
          success: false,
          message: 'User is invalid!',
          data: {
            code: 403,
            timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            path: '/end',
            method: 'POST',
            message: 'User you request is not found',
          },
        });
      } else {
        if (!student.timeStart) {
          const date = new Date();
          res.status(403).json({
            success: false,
            message: 'User is not start the game!',
            data: {
              code: 403,
              timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
              path: '/end',
              method: 'POST',
              message: 'User you request is not start the game',
            },
          });
        } else {
          if (student.timeEnd) {
            const date = new Date();
            res.status(403).json({
              success: false,
              message: 'User already finished the game!',
              data: {
                code: 403,
                timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                path: '/end',
                method: 'POST',
                message: 'User you request already finished the game',
              },
            });
          } else {
            student.timeEnd = Date.now();
            let score = 0;
            for (let i in answer) {
              if (answer[i] === student.questions[i].answer) score++;
            }
            student.score = score;
            student.time = student.timeEnd - student.timeStart;
            student.save();
            res.status(200).json({
              success: true,
              message: 'Submit successfully!',
            });
          }
        }
      }
    });
  },
};
