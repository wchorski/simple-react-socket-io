console.log('------------------------------------------------------')
console.log('-------------getMedia-cntr.js loaded------------------')
console.log('------------------------------------------------------')


const path = require('path')
const fs = require('fs')
const dataJSON = require('./json/dataJSON.json')

let data = dataJSON


// update media
//TODO if not using 'filebrowser' then use 'react-frontend''s public folder
// const mediaDir = path.join(__dirname, '../client/react-frontend/public/root/media')
// let mediaJSON = { }

const readDirectory = () => {
  
//   fs.readdir(mediaDir, function (err, files){
//     if (err) return console.log('can not read dir' + err)
  
//     files = files.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
//     mediaJSON = { "media": files}
//     saveData(mediaJSON)
//   })

  let data = dataJSON
  console.log('readDirectory(): ' + data.name);
  return data
}
readDirectory()


const saveData = (data) => {
  const stringifyData = JSON.stringify(data)
  console.log("------ Writing media1.json-------")
  fs.writeFileSync('json/media1.json', stringifyData), err => {
    if (err) throw err;
    console.log("------done Writing media1.json-------");
  }
}

//TODO run this when when new files are added / deleted
exports.controllers_funct = (req, res) => {
  // console.log(readDirectory())
  readDirectory()
  // res.send("hello from me 22")
  res.send(readDirectory())
  // res.json(readDirectory())
}