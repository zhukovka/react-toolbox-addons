'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TYPES_BY_UPLOAD;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CSS_UPLOAD_ACTIVE = exports.CSS_UPLOAD_ACTIVE = 'upload--active';

var FILE_TYPE_JPEG = exports.FILE_TYPE_JPEG = 'image/jpeg';
var FILE_TYPE_JPG = exports.FILE_TYPE_JPG = 'image/jpg';
var FILE_TYPE_PNG = exports.FILE_TYPE_PNG = 'image/png';
var FILE_TYPE_GIF = exports.FILE_TYPE_GIF = 'image/gif';
var FILE_TYPE_SVG = exports.FILE_TYPE_SVG = 'image/svg+xml';

var ERROR_BAD_TYPE = exports.ERROR_BAD_TYPE = 'badType';
var ERROR_MIN_REQUIREMENTS = exports.ERROR_MIN_REQUIREMENTS = 'minRequirements';
var ERROR_MAX_REQUIREMENTS = exports.ERROR_MAX_REQUIREMENTS = 'maxRequirements';

var UPLOAD_TYPE_AVATAR = exports.UPLOAD_TYPE_AVATAR = 'avatar';
var UPLOAD_TYPE_OVERLAY = exports.UPLOAD_TYPE_OVERLAY = 'overlay';
var UPLOAD_TYPE_DEFAULT = exports.UPLOAD_TYPE_DEFAULT = 'default';

var TYPES_BY_UPLOAD = exports.TYPES_BY_UPLOAD = (_TYPES_BY_UPLOAD = {}, _defineProperty(_TYPES_BY_UPLOAD, UPLOAD_TYPE_AVATAR, [FILE_TYPE_JPEG, FILE_TYPE_JPG, FILE_TYPE_PNG]), _defineProperty(_TYPES_BY_UPLOAD, UPLOAD_TYPE_OVERLAY, [FILE_TYPE_PNG, FILE_TYPE_SVG, FILE_TYPE_GIF]), _defineProperty(_TYPES_BY_UPLOAD, UPLOAD_TYPE_DEFAULT, [FILE_TYPE_JPEG, FILE_TYPE_JPG, FILE_TYPE_PNG, FILE_TYPE_PNG, FILE_TYPE_SVG, FILE_TYPE_GIF]), _TYPES_BY_UPLOAD);