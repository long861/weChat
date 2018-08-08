import Data from './Data';

module.exports = function(eventName) {
  var args = Array.prototype.slice.call(arguments, 1);
  if (args.length && typeof args[args.length - 1] === "function") {
    var callback = args.pop();
  }


  const id = Data.ddp.method(eventName, args);
  // console.log(id);
  Data.calls.push({
    id: id,
    callback: callback
  });
  // console.log(Data.calls[0])
}
