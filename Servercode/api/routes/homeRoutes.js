'use strict';
module.exports = function(app) {
  var homeController = require('../controllers/homeController');
  
  app.route('/api/currentCount')
    .get(homeController.getCurrentCount);

  app.route('/api/nextCount')
    .get(homeController.getNextCount);

  app.route('/api/upadateToNextCount')
    .put(homeController.updateToNextCount)
};
