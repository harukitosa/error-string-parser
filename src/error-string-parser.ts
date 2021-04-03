interface ErrorObject {
    message: string
    name: string
    stack?: string
}

export function encode(err: ErrorObject) {
    return {
        message: err.message,
        name: err.name,
        stack: err.stack
    }
}

export function decode(err: Error) {
    let newError = Error();
    newError.message = err.message;
    newError.name = err.name;
    newError.stack = err.stack;
    return newError;
}