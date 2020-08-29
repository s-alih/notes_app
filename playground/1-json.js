const fs = require('fs')
const  book = {
    name:'Zero to one',
    author:'peter thiel'
}
const userBuffer = fs.readFileSync('1-json.json')
const userJSON = userBuffer.toString()
const userOBJECT = JSON.parse(userJSON)
userOBJECT.name = 'Salih'
userOBJECT.age = 19
const jsonUSER = JSON.stringify(userOBJECT)
fs.writeFileSync('1-json.json',jsonUSER)
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const bookBuffer = fs.readFileSync('1-json.json')
// const bookJson = bookBuffer.toString()
// const bookObject =JSON.parse(bookJson)
// console.log(bookObject.name);

