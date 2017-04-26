module.exports = () => {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  firstPart = `000${firstPart.toString(36)}`.slice(-3).toUpperCase();
  secondPart = `000${secondPart.toString(36)}`.slice(-3).toUpperCase();
  return firstPart + secondPart;
};
