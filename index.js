"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.decode=function(e){var s=Error();return s.message=e.message,s.name=e.name,s.stack=e.stack,s},exports.encode=function(e){return{message:e.message,name:e.name,stack:e.stack}};
