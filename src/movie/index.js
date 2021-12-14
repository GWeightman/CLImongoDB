exports.addMovie = async (movieObj, collection) => {
    try{
        await collection.insertOne(movieObj)
        console.log(`Successfully added ${movieObj.title}`)
    }catch (error) {
        console.log(error)
    }
}