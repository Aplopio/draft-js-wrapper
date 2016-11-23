'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

require('babel-polyfill');

var _draftJs = require('draft-js');

var DraftJS = _interopRequireWildcard(_draftJs);

exports['default'] = DraftJS;
module.exports = exports['default'];
