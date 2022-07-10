export {};

String.prototype.lower = function () {
  return this.toLowerCase();
};

String.prototype.l = function () {
  return this.toLowerCase();
};

String.prototype.upper = function () {
  return this.toUpperCase();
};

String.prototype.u = function () {
  return this.toUpperCase();
};

String.prototype.capitalize = function (e) {
  switch (typeof e) {
    case 'number':
      return this.split('')
        .map((x, i) => (i === e ? x.l() : x.u()))
        .join('');
    case 'object':
      return this.split('')
        .map((x, i) => (e.includes(i) ? x.l() : x.u()))
        .join('');
    default:
      return this.split(' ')
        .map((x, i) => (i ? x.l() : x.u()))
        .join(' ');
  }
};
