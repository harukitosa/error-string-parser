# error-stringify

[![Build Status](https://travis-ci.com/harukitosa/error-stringify.svg?branch=main)](https://travis-ci.com/harukitosa/error-stringify)

This is a simple tool for converting between strings and ErrorObjects.

This is useful for converting an Error to a string on the client side and sending it to the server.

# How to Use


```
npm install error-string-parser
```

```js
const parser = require("error-string-parser")

const hoge = parser.encode(new Error("hoge"))
console.log(hoge)
```


##### Memo

```
git add -A
git commit -m "first commit"
git tag -a v1.0.0 -m "My first version v1.0.0"
git push origin tags/v1.0.0
npm publish ./
```