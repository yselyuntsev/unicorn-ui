export function addOnceEventListener(el, eventName, cb, options) {
  const once = (event) => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
