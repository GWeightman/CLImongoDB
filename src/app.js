const yargs = require("yargs")
const connection = require("./db/connection")
const { addMovie, editMovie } = require("./movie")

const app = async (args) => {
    try{
        if (args.add) {
            const movieObj = {title: args.title, actor: args.actor}
            await connection(addMovie, movieObj)
        }
        else if (args.edit) {
            if(args.title){
                const newObj = {$set: { title: args.set }}
                const movieObj = { title: args.title } 
                await connection(editMovie, movieObj, newObj)
            }
            else if (args.actor){
                const newObj = {$set: { actor: args.set }}
                const movieObj = { actor: args.actor }
                await connection(editMovie, movieObj, newObj)
            }
        }
    }catch (error) {
        console.log((error))
    }
}

app(yargs.argv)