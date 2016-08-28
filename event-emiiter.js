// Javascript event emitter
// create class
class EventEmitter {
  // initialize events object
  constructor() {
    this.events = {};
  }

  // register event method
  on(eventName, callback) {
    // check to see if event exists
    if (this.events[eventName]) {
      // if exists, add callback to array
      this.events[eventName].push(callback);
    } else {
      // if not, create event with value
      // of array containing callback
      this.events[eventName] = [callback];
    }
  }
  
  // trigger event method
  trigger(eventName, ...rest) {
    // if event exists
    if (this.events[eventName]) {
      // iterate thru event's array of callbacks
      this.events[eventName].forEach(cb => {
        // trigger callback with parameters
        cb.apply(rest);
      });
    }
  }
}

// create example instance
const ee = new EventEmitter();
ee.on('change', () => {
  console.log('hello there');
});

// trigger emitter
ee.trigger('change');
