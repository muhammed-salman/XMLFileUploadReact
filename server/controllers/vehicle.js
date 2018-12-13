const Vehicle = require('../models/Vehicle');
var mongoose = require('mongoose');
var md5 = require('md5');

exports.getVehicleInfo = function(req, res, next) {
  const {id} = req.body;
  if (!id) {
    return res.status(422).send({ error: 'You must provide vehicle unique id'});
  }
  Vehicle
  .findById(id)
  .exec((err,data) => {
    if(err)
      return next(err);
    return res.status(200).send(data);
    });
}

exports.getAllVehiclesInfo = function(req, res, next) {
  Vehicle
  .find({})
  .exec((err,data) => {
    if(err)
      return next(err);
    return res.status(200).send(data);
    });
}


exports.saveVehicleInfo = function(req, res, next) {
  // console.log('save vehicle',req.body);
   const {vehicles, timeStamp, xmlFileString, fileAttr} = req.body;
   if (!vehicles && !timeStamp && !xmlFileString && !fileAttr ) {
     return res.status(422).send({ error: 'You must provide the required data to be uploaded'});
   }
   const hash = md5(xmlFileString);
   // Vehicle
   //   .find({hash})
   //   .exec((err,data) => {
   //     if(err)
   //       return next(err);
   //      return res.status(200).send(data);
   //     });
  (new Vehicle({hash, vehicles, timeStamp, xmlFileString, fileAttr})).save((err,vehicles)=> {
      if(err){
        console.log("Cannot Save an error occured",err);
        return res.status(422).send({ error: err.errmsg});
        // return next(err);
      }
      else{
        console.log("Vehicle Information Successfully Saved!");
        return res.status(200).send(vehicles);
      }
    });
}
