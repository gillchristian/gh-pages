const sass = require('node-sass');
const fs = require('fs');

function compileCb(err, result) {
  if (err) {
    console.log(err);
    throw err;
  }
  fs.writeFile('./src/index.css', result.css, err => {
    if(err){
      throw err;
    }
    console.log('Success!!!');
  });
}

sass.render({
  file: './src/styles/main.scss'
}, compileCb);
