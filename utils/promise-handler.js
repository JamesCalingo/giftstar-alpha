// create function to handle promises and avoid having to use too many .then / .catch
module.exports = promise => promise
  .then(response => [null, response])
  .catch(err => [err, null]);