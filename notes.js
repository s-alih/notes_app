const fs = require('fs')


const getNotes = ()=>{
    return "this is my notes"
}

const addNotes = (tittle,body)=>{
 //get all notes
 const notes = getAllNotes()
 //check duplication
 const duplicated = notes.filter((note)=>{
     return note.tittle === tittle;
 })
 if(duplicated.length == 0){
    //push into array
    notes.push({
        tittle:tittle,
        body:body
    })
    //write the file
    writeNotes(notes)
    console.log('notes added successfully');
 }else{
     console.log('Alredy has this tittle');
 }
 
 
}
const removeNote = (tittle)=>{
    const notes = getAllNotes()
    const newArray = notes.filter((note)=>{
        return !(note.tittle === tittle)
    })
    if(newArray.length === notes.length){
       console.log('No notes found for this tittle to remove');
    }else{
        writeNotes(newArray);
        console.log('removed successfully');
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
    getNotes,
    addNotes,
    removeNote
}
