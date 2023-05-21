const app = require('./server');
const process = require('process');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server started!!');
});
