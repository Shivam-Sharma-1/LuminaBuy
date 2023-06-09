const CryptoJS = require("crypto-js");

function hashedPassword(password) {
	return CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET);
}

module.exports = hashedPassword;
