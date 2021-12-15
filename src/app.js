const yargs = require("yargs")
const { connection, connection2 } = require("./db/connection")
const { addMovie, editMovie, deleteMovie } = require("./movie")

const app = async (args) => {
    try{
        if (args.add) {
            const movieObj = {title: args.title, actor: args.actor}
            await connection(addMovie, movieObj)
        }
        else if (args.edit) {
            if (args.title){
                const newObj = {$set: { title: args.set }}
                const movieObj = { title: args.title } 
                await connection2(editMovie, movieObj, newObj)
            }
            else if (args.actor){
                const newObj = {$set: { actor: args.set }}
                const movieObj = { actor: args.actor }
                await connection2(editMovie, movieObj, newObj)
            }
        }
        else if (args.delete){
            if (args.title){
                const movieObj = { title: args.title }
                await connection(deleteMovie, movieObj)
            }
            else if (args.actor){
                const movieObj = { actor: args.actor }
                await connection(deleteMovie, movieObj)
            }
        }
    }catch (error) {
        console.log((error))
    }
}

app(yargs.argv)