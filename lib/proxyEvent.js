function proxyEvent(source, target, name) {
  try {
    source.on(name, function() {
      target.emit.apply(target, [name].concat([].slice.call(arguments)));
    });
  } catch (error) {
    // error
  }
}

module.exports = proxyEvent;
