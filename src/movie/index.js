exports.addMovie = async (movieObj, collection) => {
    try{
        await collection.insertOne(movieObj)
        console.log(`Successfully added ${movieObj.title}`)
    }catch (error) {
        console.log(error)
    }
}

exports.editMovie = async (movieObj, newObj, collection) => {
    try{
        await collection.updateOne(movieObj, newObj)
        if (movieObj.actor){
            console.log(`Successfully changed ${movieObj.actor} to ${newObj.$set.actor}`)
        }
        else if (movieObj.title){
            console.log(`Successfully changed ${movieObj.title} to ${newObj.$set.title}`)
        }
    }catch (error) {
        console.log(error)
    }
}