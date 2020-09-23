exports.isNotEmpty = (name) => {
  return (v) => {
    if (!v || v.trim === "") {
      return `${name}为必填项`;
    } else {
      return true;
    }
  };
};
