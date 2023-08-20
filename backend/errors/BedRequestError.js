/* eslint-disable linebreak-style */
class BedRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BedRequestError;
