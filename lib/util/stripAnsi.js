'use strict';

const ansiRegex = require('ansi-regex');

module.exports = function stripAnsi(input) {
  return typeof input === 'string' ? input.replace(ansiRegex(), '') : input;
};
