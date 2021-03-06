const isArray = require('./utils/is-array');
const appendDotPath = require('./utils/append-dot-path');
const isObject = require('./utils/is-object');

class Diff {
  constructor(diff) {
    this.kind = diff.kind;
    this.index = diff.index;
    this.lhs = diff.lhs;
    this.rhs = diff.rhs;
    this.item = diff.item;
    this.path = diff.path;
    this.isArray = isArray(diff);
    this.hasNestedChanges = isObject(diff.item);
    this.dotpath = appendDotPath(diff);
  }
}

module.exports = Diff;
