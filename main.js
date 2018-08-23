/**
 *
 * kmcanio adapter
 *
 *
 *  file io-package.json comments:
 *
 *  {
 *      "common": {
 *          "name":         "kmcanio",                  // name has to be set and has to be equal to adapters folder name and main file name excluding extension
 *          "version":      "0.0.0",                    // use "Semantic Versioning"! see http://semver.org/
 *          "title":        "Node.js kmcanio Adapter",  // Adapter title shown in User Interfaces
 *          "authors":  [                               // Array of authord
 *              "name <mail@kmcanio.com>"
 *          ]
 *          "desc":         "kmcanio adapter",          // Adapter description shown in User Interfaces. Can be a language object {de:"...",ru:"..."} or a string
 *          "platform":     "Javascript/Node.js",       // possible values "javascript", "javascript/Node.js" - more coming
 *          "mode":         "daemon",                   // possible values "daemon", "schedule", "subscribe"
 *          "materialize":  true,                       // support of admin3
 *          "schedule":     "0 0 * * *"                 // cron-style schedule. Only needed if mode=schedule
 *          "loglevel":     "info"                      // Adapters Log Level
 *      },
 *      "native": {                                     // the native object is available via adapter.config in your adapters code - use it for configuration
 *          "test1": true,
 *          "test2": 42,
 *          "mySelect": "auto"
 *      }
 *  }
 *
 */

/* jshint -W097 */// jshint strict:false
/*jslint node: true */
'use strict';

// you have to require the utils module and call adapter function
const utils =    require(__dirname + '/lib/utils'); // Get common adapter utils

// you have to call the adapter function and pass a options object
// name has to be set and has to be equal to adapters folder name and main file name excluding extension
// adapter will be restarted automatically every time as the configuration changed, e.g system.adapter.kmcanio.0
const adapter = new utils.Adapter('kmcanio');

/*Variable declaration, since ES6 there are let to declare variables. Let has a more clearer definition where 
it is available then var.The variable is available inside a block and it's childs, but not outside. 
You can define the same variable name inside a child without produce a conflict with the variable of the parent block.*/
let variable = 1234;

// is called when adapter shuts down - callback has to be called under any circumstances!
adapter.on('unload', function (callback) {
    try {
        adapter.log.info('cleaned everything up...');
        callback();
    } catch (e) {
        callback();
    }
});

// is called if a subscribed object changes
adapter.on('objectChange', function (id, obj) {
    // Warning, obj can be null if it was deleted
    adapter.log.info('objectChange ' + id + ' ' + JSON.stringify(obj));
});

// is called if a subscribed state changes
adapter.on('stateChange', function (id, state) {
    // Warning, state can be null if it was deleted
    adapter.log.info('stateChange ' + id + ' ' + JSON.stringify(state));

    // you can use the ack flag to detect if it is status (true) or command (false)
    if (state && !state.ack) {
        adapter.log.info('ack is not set!');
    }
});

// Some message was sent to adapter instance over message box. Used by email, pushover, text2speech, ...
adapter.on('message', function (obj) {
    if (typeof obj === 'object' && obj.message) {
        if (obj.command === 'send') {
            // e.g. send email or pushover or whatever
            console.log('send command');

            // Send response in callback if required
            if (obj.callback) adapter.sendTo(obj.from, obj.command, 'Message received', obj.callback);
        }
    }
});

// is called when databases are connected and adapter received configuration.
// start here!
adapter.on('ready', function () {
    main();
});

function main() {

    // The adapters config (in the instance object everything under the attribute "native") is accessible via
    // adapter.config:
    adapter.log.info('config canioType: '    + adapter.config.canioType);
    adapter.log.info('config canioNodeID: '  + adapter.config.canioNodeID);
    
	
	
	
	
    adapter.setObject('IN1.0', { type: 'state', common: { name: 'IN1.0', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.1', { type: 'state', common: { name: 'IN1.1', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.2', { type: 'state', common: { name: 'IN1.2', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.3', { type: 'state', common: { name: 'IN1.3', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.4', { type: 'state', common: { name: 'IN1.4', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.5', { type: 'state', common: { name: 'IN1.5', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.6', { type: 'state', common: { name: 'IN1.6', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN1.7', { type: 'state', common: { name: 'IN1.7', type: 'boolean', role: 'indicator' }, native: {} });
	
    adapter.setObject('IN2.0', { type: 'state', common: { name: 'IN2.0', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.1', { type: 'state', common: { name: 'IN2.1', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.2', { type: 'state', common: { name: 'IN2.2', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.3', { type: 'state', common: { name: 'IN2.3', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.4', { type: 'state', common: { name: 'IN2.4', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.5', { type: 'state', common: { name: 'IN2.5', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.6', { type: 'state', common: { name: 'IN2.6', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN2.7', { type: 'state', common: { name: 'IN2.7', type: 'boolean', role: 'indicator' }, native: {} });
	
    adapter.setObject('IN3.0', { type: 'state', common: { name: 'IN3.0', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.1', { type: 'state', common: { name: 'IN3.1', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.2', { type: 'state', common: { name: 'IN3.2', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.3', { type: 'state', common: { name: 'IN3.3', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.4', { type: 'state', common: { name: 'IN3.4', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.5', { type: 'state', common: { name: 'IN3.5', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.6', { type: 'state', common: { name: 'IN3.6', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN3.7', { type: 'state', common: { name: 'IN3.7', type: 'boolean', role: 'indicator' }, native: {} });
	
    adapter.setObject('IN4.0', { type: 'state', common: { name: 'IN4.0', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN4.1', { type: 'state', common: { name: 'IN4.1', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN4.2', { type: 'state', common: { name: 'IN4.2', type: 'boolean', role: 'indicator' }, native: {} });
    adapter.setObject('IN4.3', { type: 'state', common: { name: 'IN4.3', type: 'boolean', role: 'indicator' }, native: {} });
	
    adapter.setObject('Temperatur', { type: 'state', common: { name: 'Temperatur1', type: 'number', role: 'indicator' }, native: {} });
	
	
	
	
	
	var can = require('socketcan');
	var bus = can.createRawChannel("can0", true);
	
	
	bus.addListener("onMessage", 
		function(msg) { 
			if( msg.id == 0x191 ){
				
				if(  msg.data[0] & 0x01 ){ adapter.setState('IN1.0', {val: true, ack: true}); }else{ adapter.setState('IN1.0', {val: false, ack: true}); }
				if(  msg.data[0] & 0x02 ){ adapter.setState('IN1.1', {val: true, ack: true}); }else{ adapter.setState('IN1.1', {val: false, ack: true}); }
				if(  msg.data[0] & 0x04 ){ adapter.setState('IN1.2', {val: true, ack: true}); }else{ adapter.setState('IN1.2', {val: false, ack: true}); }
				if(  msg.data[0] & 0x08 ){ adapter.setState('IN1.3', {val: true, ack: true}); }else{ adapter.setState('IN1.3', {val: false, ack: true}); }
				if(  msg.data[0] & 0x10 ){ adapter.setState('IN1.4', {val: true, ack: true}); }else{ adapter.setState('IN1.4', {val: false, ack: true}); }
				if(  msg.data[0] & 0x20 ){ adapter.setState('IN1.5', {val: true, ack: true}); }else{ adapter.setState('IN1.5', {val: false, ack: true}); }
				if(  msg.data[0] & 0x40 ){ adapter.setState('IN1.6', {val: true, ack: true}); }else{ adapter.setState('IN1.6', {val: false, ack: true}); }
				if(  msg.data[0] & 0x80 ){ adapter.setState('IN1.7', {val: true, ack: true}); }else{ adapter.setState('IN1.7', {val: false, ack: true}); }
				
				if(  msg.data[1] & 0x01 ){ adapter.setState('IN2.0', {val: true, ack: true}); }else{ adapter.setState('IN2.0', {val: false, ack: true}); }
				if(  msg.data[1] & 0x02 ){ adapter.setState('IN2.1', {val: true, ack: true}); }else{ adapter.setState('IN2.1', {val: false, ack: true}); }
				if(  msg.data[1] & 0x04 ){ adapter.setState('IN2.2', {val: true, ack: true}); }else{ adapter.setState('IN2.2', {val: false, ack: true}); }
				if(  msg.data[1] & 0x08 ){ adapter.setState('IN2.3', {val: true, ack: true}); }else{ adapter.setState('IN2.3', {val: false, ack: true}); }
				if(  msg.data[1] & 0x10 ){ adapter.setState('IN2.4', {val: true, ack: true}); }else{ adapter.setState('IN2.4', {val: false, ack: true}); }
				if(  msg.data[1] & 0x20 ){ adapter.setState('IN2.5', {val: true, ack: true}); }else{ adapter.setState('IN2.5', {val: false, ack: true}); }
				if(  msg.data[1] & 0x40 ){ adapter.setState('IN2.6', {val: true, ack: true}); }else{ adapter.setState('IN2.6', {val: false, ack: true}); }
				if(  msg.data[1] & 0x80 ){ adapter.setState('IN2.7', {val: true, ack: true}); }else{ adapter.setState('IN2.7', {val: false, ack: true}); }
				
				if(  msg.data[2] & 0x01 ){ adapter.setState('IN3.0', {val: true, ack: true}); }else{ adapter.setState('IN3.0', {val: false, ack: true}); }
				if(  msg.data[2] & 0x02 ){ adapter.setState('IN3.1', {val: true, ack: true}); }else{ adapter.setState('IN3.1', {val: false, ack: true}); }
				if(  msg.data[2] & 0x04 ){ adapter.setState('IN3.2', {val: true, ack: true}); }else{ adapter.setState('IN3.2', {val: false, ack: true}); }
				if(  msg.data[2] & 0x08 ){ adapter.setState('IN3.3', {val: true, ack: true}); }else{ adapter.setState('IN3.3', {val: false, ack: true}); }
				if(  msg.data[2] & 0x10 ){ adapter.setState('IN3.4', {val: true, ack: true}); }else{ adapter.setState('IN3.4', {val: false, ack: true}); }
				if(  msg.data[2] & 0x20 ){ adapter.setState('IN3.5', {val: true, ack: true}); }else{ adapter.setState('IN3.5', {val: false, ack: true}); }
				if(  msg.data[2] & 0x40 ){ adapter.setState('IN3.6', {val: true, ack: true}); }else{ adapter.setState('IN3.6', {val: false, ack: true}); }
				if(  msg.data[2] & 0x80 ){ adapter.setState('IN3.7', {val: true, ack: true}); }else{ adapter.setState('IN3.7', {val: false, ack: true}); }
					
				if(  msg.data[3] & 0x01 ){ adapter.setState('IN4.0', {val: true, ack: true}); }else{ adapter.setState('IN4.0', {val: false, ack: true}); }
				if(  msg.data[3] & 0x02 ){ adapter.setState('IN4.1', {val: true, ack: true}); }else{ adapter.setState('IN4.1', {val: false, ack: true}); }
				if(  msg.data[3] & 0x04 ){ adapter.setState('IN4.2', {val: true, ack: true}); }else{ adapter.setState('IN4.2', {val: false, ack: true}); }
				if(  msg.data[3] & 0x08 ){ adapter.setState('IN4.3', {val: true, ack: true}); }else{ adapter.setState('IN4.3', {val: false, ack: true}); }
				
				var temp = (msg.data[4] + msg.data[5] * 256) * 0.0625;
				adapter.setState('Temperatur', {val: temp, ack: true});
				
			}
		} 
	);
	
	
	bus.start();
	
	
	var buf = new Buffer([1,2,3,4,5,6,7,8]);
	
	bus.send({ id: 12, ext: false, data: buf });
	
	


    // in this kmcanio all states changes inside the adapters namespace are subscribed
//    adapter.subscribeStates('*');


    /**
     *   setState examples
     *
     *   you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
     *
     */

    // the variable testVariable is set to true as command (ack=false)
 //   adapter.setState('testVariable', true);

    // same thing, but the value is flagged "ack"
    // ack should be always set to true if the value is received from or acknowledged from the target system
    

    // same thing, but the state is deleted after 30s (getState will return null afterwards)
  //  adapter.setState('testVariable', {val: true, ack: true, expire: 30});




}
