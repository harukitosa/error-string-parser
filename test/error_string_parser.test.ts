import { decode, encode } from "../src/error-string-parser";
// const add = require('../src/error-stringify');

test('test encode', () => {
    const encoded = encode(new Error("hoge"));
    expect(encoded.message).toBe("hoge");
    expect(encoded.name).toBe("Error");
    expect(encoded.stack).not.toBe(undefined);
});

test('test decode', () => {
    const encoded = encode(new Error("hoge"));
    const decoded = decode(encoded);
    expect(decoded.message).toBe("hoge");
    expect(decoded.name).toBe("Error");
    expect(decoded.stack).not.toBe(undefined);
})