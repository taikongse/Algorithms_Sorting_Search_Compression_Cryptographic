/*
Cryptographic algorithms: These algorithms are used to secure data by encrypting it. Some examples include the Caesar cipher and the RSA algorithm.
*/

//crypto module in Node.js to encrypt a string of data using the Caesar cipher:
const crypto = require('crypto');

function caesarCipher(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

const data = 'This is some sensitive data that we want to encrypt.';
const key = 'mysecretkey';
console.log(caesarCipher(data, key));
/* This code will encrypt the string of data using the Caesar cipher and output the resulting encrypted data as a hexadecimal string.*/



function caesarDecipher(encrypted, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

console.log(caesarDecipher(encrypted, key));
/* This code will take the encrypted data and the key used to encrypt it, and decrypt the data, outputting the resulting plaintext data as a string.

Note that the Caesar cipher is a very simple and easy-to-break encryption algorithm, and should not be used for secure data encryption in practice.
*/

const fs = require('fs');

// Generate a new RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
});

// Save the keys to files
fs.writeFileSync('public.pem', publicKey);
fs.writeFileSync('private.pem', privateKey);

// Load the keys from the files
const publicKey2 = fs.readFileSync('public.pem');
const privateKey2 = fs.readFileSync('private.pem');

// Encrypt the data using the public key
const data = 'This is some sensitive data that we want to encrypt.';
const encrypted = crypto.publicEncrypt(publicKey2, Buffer.from(data));

// Decrypt the data using the private key
const decrypted = crypto.privateDecrypt(privateKey2, encrypted);
console.log(decrypted.toString());

/* The RSA algorithm is a more secure encryption algorithm that is commonly used for secure data transmission. Here is an example of how you might use the crypto module to encrypt and decrypt data using the RSA algorithm:

This code generates a new RSA key pair and saves the keys to files. It then loads the keys from the files and uses them to encrypt and decrypt a string of data.
*/