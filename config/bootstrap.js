var fixtures = require('sails-fixtures');

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  fixtures.init({

    'dir': require('path').resolve(__dirname, '../dataFixtures'),

    'pattern': '*.json' // Default is '*.json'

  }, cb);

};