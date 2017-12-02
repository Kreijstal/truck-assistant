var trailera=require("./trailerA.fix.json");
var json2csv = require('json2csv');
var fs=require("fs");
var t=[]
function setSensorToTime(sensor) { if (!as[sensor.timestamp]) { as[sensor.timestamp] = {barometer1:"null",barometer2:"null",insideTemperature:"null",ambientTemperature:"null",light:"null",gyroscope1:"null",gyroscope2:"null",gyroscope3:"null",accelerometer1:"null",accelerometer2:"null",accelerometer3:"null"} }; 
switch (sensor.sensorType) {
    case "BAROMETER":
        as[sensor.timestamp]["barometer1"]=sensor.values[0]
        as[sensor.timestamp]["barometer2"]=sensor.values[1]
        break;
    case "TEMPERATURE":
        as[sensor.timestamp]["insideTemperature"]=sensor.values[0]
        as[sensor.timestamp]["ambientTemperature"]=sensor.values[1]
        break;
    case "LIGHT":
        as[sensor.timestamp]["light"]=sensor.values
        break;
    case "MAGNETOMETER":
        as[sensor.timestamp]["magnetmoeter1"]=sensor.values[0]
        as[sensor.timestamp]["magnetmoeter2"]=sensor.values[1]
        break;
    case "GYROSCOPE":
        as[sensor.timestamp]["gyroscope1"]=sensor.values[0]
        as[sensor.timestamp]["gyroscope2"]=sensor.values[1]
        as[sensor.timestamp]["gyroscope3"]=sensor.values[2]
        break;
    case "ACCELEROMETER":
        as[sensor.timestamp]["accelerometer1"]=sensor.values[0]
        as[sensor.timestamp]["accelerometer2"]=sensor.values[1]
        as[sensor.timestamp]["accelerometer3"]=sensor.values[2]
        break;
} }

var as = {};trailera.forEach(setSensorToTime);
var keys=Object.keys(as);
//console.log(json2csv(JSON.stringify(as)))
//fs.writeFile("trailerA.tsv",)
var values=Object.keys(as[keys[0]])
fs.writeFile("trailerA.tsv",[values.join('\t')].concat(keys.map(function(a){return values.map(function(value){return as[a][value]}).join('\t')})).join('\n'),console.log)