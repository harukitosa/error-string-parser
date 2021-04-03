'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function encode(err) {
    return {
        message: err.message,
        name: err.name,
        stack: err.stack
    };
}
function decode(err) {
    var newError = Error();
    newError.message = err.message;
    newError.name = err.name;
    newError.stack = err.stack;
    return newError;
}

exports.decode = decode;
exports.encode = encode;
