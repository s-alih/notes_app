const fs = require('fs')
const chalk = require('chalk')
const { debug } = require('console')

const addNotes = (tittle,body)=>{
 //get all notes
 const notes = getAllNotes()
 //check duplication
 const duplicated = notes.find(note => note.tittle ===tittle)
 
 if(!duplicated){
    //push into array
    notes.push({
        tittle:tittle,
        body:body
    })
    //write the file
    writeNotes(notes)
    console.log(chalk.green.inverse('notes added successfully'));
 }else{
     console.log(chalk.red.inverse('Alredy has this tittle'));
 }
 
 
}
const removeNote = (tittle)=>{
    const notes = getAllNotes()
    const newArray = notes.filter((note)=>{
        return note.tittle !== tittle
    })
    if(newArray.length === notes.length){
       console.log(chalk.red.inverse('No note found!'));
    }else{
        writeNotes(newArray);
        console.log(chalk.green.inverse('Note removed'));
    }
}
const listNotes = ()=>{
    const notes = getAllNotes()
    console.log(chalk.yellow.inverse('Your notes'));
    notes.forEach(note =>console.log(chalk.white(note.tittle)));

}
const readNotes = (tittle)=>{
  const notes = getAllNotes()
  const findedNote = notes.find((note)=>note.tittle === tittle)
  if(findedNote){
    console.log(chalk.underline.yellow(findedNote.tittle));
    console.log(findedNote.body);
  }else{
      console.log(chalk.red('No note found!'));
  }
  
}

const getAllNotes = ()=>{
    try{
        const bufferData =  fs.readFileSync('notes.txt')
        const jsonData = bufferData.toString()
        return JSON.parse(jsonData)
    }catch(e){
       return []
    }
 
}
const writeNotes = (notes)=>{
     const jsonData = JSON.stringify(notes)
     fs.writeFileSync('notes.txt',jsonData)
}





module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes
}
