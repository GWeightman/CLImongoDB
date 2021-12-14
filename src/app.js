const yargs = require("yargs")
const connection = require("./db/connection")
const { addMovie } = require("./movie")

const app = async (args) => {
    try{
        if (args.add) {
            // console.log("yes?")
            const movieObj = {title: args.title, actor: args.actor}
            await connection(addMovie, movieObj)
        }
    }catch (error) {
        console.log((error))
    }
}

app(yargs.argv)