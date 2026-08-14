const ImageKit = require('@imagekit/nodejs');

// 1. Initialize with all required credentials
const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, 
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadfile(buffer) {
  // 2. Call .upload() on your `client` instance
  const result = await client.files.upload({
    file: buffer.toString("base64"),
    fileName: "deadpool.jpg"
  });

  return result;
}

module.exports = uploadfile;