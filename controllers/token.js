const user = require('../model/user');

module.exports = {
  check: (req, res, next) => {
    const token = req.params.token;
    user.findOne({token: token}, function (err, user) {
      if (!user) {
        const date = new Date();
        res.status(404).json({
          success: false,
          message: 'Invalid token!',
          data: {
            code: 404,
            timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            path: `/check/${token}`,
            method: 'GET',
            message: 'The token you requested is not found',
          },
        });
      } else if (!user.name) {
        res.status(200).json({
          success: true,
          available: true,
          message: 'This token is available for use',
        });
      } else {
        res.status(200).json({
          success: true,
          available: false,
          message: 'This token is not available',
        });
      }
    });
  },
  test: async (req, res, next) => {
    const token = req.params.token;
    const _user = await user.findOne({token: token});
    if (!_user)
        res.send('Not found');
    else res.send('Ok');
  }
};
