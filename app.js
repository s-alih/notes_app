const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes')
const { describe, argv } = require('yargs')
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
    handler:()=>{
       notes.addNotes(argv.tittle,argv.body)
    }
})
//remove notes
yargs.command({
    command:'remove',
    describe:'Remove notes',
    handler:()=>{
        console.log('Removing notes');
    }
})
//list notes
yargs.command({
    command:'list',
    describe:'List notes',
    handler:()=>{
        console.log('Listing notes');
    }
})
//read notes
yargs.command({
    command:'read',
    describe:'Read notes',
    handler:()=>{
        console.log('Reading notes');
    }
})


yargs.parse()

