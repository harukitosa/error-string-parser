interface ErrorObject {
    message: string;
    name: string;
    stack?: string;
}
export declare function encode(err: ErrorObject): {
    message: string;
    name: string;
    stack: string;
};
export declare function decode(err: Error): Error;
export {};
