const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(image);
  res.end();
};

module.exports.getSpongegar = getSpongegar;
