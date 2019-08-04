function proxyEvent(source, target, name) {
  source.on(name, function () {
    try {
      target.emit.apply(target, [name].concat([].slice.call(arguments)));
    } catch (error) {
      // error
    }
  });
}

module.exports = proxyEvent;