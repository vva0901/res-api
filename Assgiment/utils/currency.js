
const currency = number => {
  return new Intl.NumberFormat('de-DE').format(number);
};

module.exports = currency;



