(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  const fs = require('fs');

  console.log(fs);

  const fileToBuffer = (file) => {
    console.log(10010, 'fs:', fs);
    const res = fs.readFileSync(file);
    return res
  };

  module.exports = fileToBuffer;

}));
