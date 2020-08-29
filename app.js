const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes')
const notes = require('./notes')

yargs.version('1.1.0')
 // add command 
yargs.command({
    command:'add',
    describe:'Add new notes',
    builder:{
        tittle:{
            describe:'Provide tittle',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.addNotes(argv.tittle,argv.body)
    }
})
//remove notes
yargs.command({
    command:'remove',
    describe:'Remove notes',
    builder:{
        tittle:{
            describe:'Specify tittle',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       notes.removeNote(argv.tittle)
    }
})
//list notes
yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
       notes.listNotes()
    }
})
//read notes
yargs.command({
    command:'read',
    describe:'Read notes',
    builder:{
        tittle:{
            type:'string',
            demandOption:true,
            describe:'Add tittle'
        }
    },
    handler(argv){
        notes.readNotes(argv.tittle)
    }
})


yargs.parse()

