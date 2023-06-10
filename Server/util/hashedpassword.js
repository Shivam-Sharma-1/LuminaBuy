const CryptoJS = require("crypto-js");

function hashedPassword(password) {
	return CryptoJS.AES.encrypt(
		password,
		process.env.PASSWORD_SECRET
	).toString();
}

function decryptPassword(password) {
	const bytes = CryptoJS.AES.decrypt(password, process.env.PASSWORD_SECRET);

	return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { hashedPassword, decryptPassword };
