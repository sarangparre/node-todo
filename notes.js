const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {  
       const notes = loadNote()
       const duplicateNotes = notes.find((note) => note.title === title)
       if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
       console.log(chalk.bgGreen.black('Note Added!'))
       }else{
           console.log(chalk.bgRed.black('Title already taken!'))
       }    
}

const removeNote = (title) => {
    const notes = loadNote()
    const updateNotes = notes.filter((note) => note.title != title)
    if(notes.length != updateNotes.length){
        saveNotes(updateNotes)
        console.log('Note removed!')
    }else{
        console.log('Note not found!')
    }      
}

const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.inverse("Notes list"))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = (title) => {
    const notes = loadNote()
    const readingNote = notes.find((note) => note.title === title)
    console.log(chalk.inverse(readingNote.title))
    console.log(readingNote.body)
}

const loadNote = () => {
    try{
        const bufferNotes = fs.readFileSync('notes.json');
        const jNotes = bufferNotes.toString()
        const jsNotes = JSON.parse(jNotes) 
        return jsNotes;
    }catch(e) {
        return []
    }    
}

const saveNotes = (notes) => {
    const jsonNotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonNotes)
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}