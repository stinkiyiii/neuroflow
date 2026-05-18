const validator = require('validator');

function isValidEmail(email) {
  return typeof email === 'string' && validator.isEmail(email);
}

function detectBrowser(userAgent = '') {
  if (/Edg\//i.test(userAgent)) return 'Edge';
  if (/OPR\//i.test(userAgent)) return 'Opera';
  if (/Chrome\//i.test(userAgent)) return 'Chrome';
  if (/Safari\//i.test(userAgent)) return 'Safari';
  if (/Firefox\//i.test(userAgent)) return 'Firefox';
  return 'Desconocido';
}

module.exports = { isValidEmail, detectBrowser };
