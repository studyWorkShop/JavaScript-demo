const oldPromise = (successCallback, rejectedCallback, number) => {
  if (number <= 0) {
    return successCallback(number);
  } else {
    return rejectedCallback(number);
  }
};

const successCallback = () => {
  return `Success`;
};

const rejectedCallback = () => {
  return `Rejected`;
};

module.exports = {oldPromise, successCallback, rejectedCallback};