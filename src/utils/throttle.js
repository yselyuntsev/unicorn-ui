export function throttle(func, ms) {
  let isThrottled = false;
  let args = null;
  let self = null;

  function wrapper() {
    if (isThrottled) {
      args = arguments;
      self = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (args) {
        wrapper.apply(self, args);
        args = self = null;
      }
    }, ms);
  }

  return wrapper;
}
