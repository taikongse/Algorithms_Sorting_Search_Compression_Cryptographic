/*
Compression algorithms: These algorithms are used to compress data in order to reduce the amount of space it occupies. Some examples include Huffman coding and Lempel-Ziv-Welch (LZW) compression.
*/

const zlib = require('zlib');

const data = 'This is some sample data that we want to compress.';

zlib.deflate(data, (err, buffer) => {
  if (err) {
    console.error(err);
  } else {
    console.log(buffer);
  }
});

/*This code will compress the string of data using the LZW algorithm and output the resulting compressed data as a Buffer object.*/




zlib.inflate(buffer, (err, uncompressed) => {
  if (err) {
    console.error(err);
  } else {
    console.log(uncompressed.toString());
  }
});

/*This code will take the compressed data in buffer and decompress it, outputting the resulting uncompressed data as a string.*/
