const yargs = require('yargs')
const notes = require('./notes.js')
yargs.command({
    command: 'add',
    describe: 'adding note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
 })

 yargs.command({
     command: 'list',
     describe: 'list notes',
     handler: () => notes.listNotes()
 })

yargs.command({
    command: 'read',
    describe: 'read list',
    builder: {
        title: {
            describe: "list title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.readNotes(argv.title)
})

yargs.parse()