var logger = require('winston');


module.exports = function(router) {
  
  router
  .route('/user')
  //get request
  .get(function(req, res) {
    res.json({
      payload: [],
      success: true
    });
  })
  //post request
  .post(function(req, res) {
    res.json({
      message: 'Some message',
      success: true
    });
  });

  return router;
}