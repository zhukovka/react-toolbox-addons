export const CSS_UPLOAD_ACTIVE = 'upload--active';

export const FILE_TYPE_JPEG = 'image/jpeg';
export const FILE_TYPE_JPG = 'image/jpg';
export const FILE_TYPE_PNG = 'image/png';
export const FILE_TYPE_GIF = 'image/gif';
export const FILE_TYPE_SVG = 'image/svg+xml';

export const ERROR_BAD_TYPE = 'badType';
export const ERROR_MIN_REQUIREMENTS = 'minRequirements';
export const ERROR_MAX_REQUIREMENTS = 'maxRequirements';

export const UPLOAD_TYPE_AVATAR = 'avatar';
export const UPLOAD_TYPE_OVERLAY = 'overlay';
export const UPLOAD_TYPE_DEFAULT = 'default';

export const TYPES_BY_UPLOAD = {
  [UPLOAD_TYPE_AVATAR]: [FILE_TYPE_JPEG, FILE_TYPE_JPG, FILE_TYPE_PNG],
  [UPLOAD_TYPE_OVERLAY]: [FILE_TYPE_PNG, FILE_TYPE_SVG, FILE_TYPE_GIF],
  [UPLOAD_TYPE_DEFAULT]: [FILE_TYPE_JPEG, FILE_TYPE_JPG, FILE_TYPE_PNG, FILE_TYPE_PNG, FILE_TYPE_SVG, FILE_TYPE_GIF]
};

