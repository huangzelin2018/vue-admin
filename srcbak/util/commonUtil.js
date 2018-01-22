let commonUtil = {
  merge: function () { //数组合并
    return Array.prototype.concat.apply([], arguments)
  }
}

export default commonUtil;
