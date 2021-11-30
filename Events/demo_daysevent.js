var events = require('events');
//create events Emitter

var eventEmitter = new events.EventEmitter();

//create event handlers
var sundayEventHandler = function () {
    console.log("Enjoy your holiday !!!");
}
var mondayEventHandler = function () {
    console.log("Get back to work !!!");
}

//Assign event handler to an event
eventEmitter.on("sunday",sundayEventHandler);
eventEmitter.on("monday",mondayEventHandler);

//Fire the Events
eventEmitter.emit("sunday");
eventEmitter.emit("monday");


