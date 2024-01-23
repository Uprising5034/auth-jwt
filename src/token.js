const jwt = require("jsonwebtoken");

const rickPayload = {
  id: 153,
  username: "sanchez",
  email: "rick@sanchez.com",
  role: "ADMIN",
};

const rickSecret = "87764d1a-92dc-4ced-a758-9c898c31d525"

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secretKey) {
  return jwt.sign(payload, secretKey);
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secretKey, expiryTime) {
  return jwt.sign(payload, secretKey, { expiresIn: expiryTime });
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 *
 * @param {String} webToken
 * @param {import("jsonwebtoken").Secret} secretKey
 */
function verifyToken(webToken, secretKey) {
  try {
    return jwt.verify(webToken, secretKey);
  } catch (error) {
    return false;
  }
}

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};

const rick = createToken(rickPayload, rickSecret)
console.log(rick)