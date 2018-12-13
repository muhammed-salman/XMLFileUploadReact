const Vehicle = require('./controllers/vehicle');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send({ hi: 'there' });
  });
  app.post('/uploadfile', Vehicle.saveVehicleInfo);
  app.post('/viewfile', Vehicle.getVehicleInfo);
  app.get('/getfiles', Vehicle.getAllVehiclesInfo);
};
