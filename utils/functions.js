module.exports = () => {
  return {
    between: between,
    multipleTimes: multipleTimes,
  };

  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function multipleTimes(min, max, times) {
    let result = [];
    for (let i = 1; i <= times; i++) {
      result.push(between(min, max));
    }
    return result;
  }
};
