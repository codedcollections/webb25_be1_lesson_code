import { connectToDb } from "./connect.js"
import Artist from "./models/Artist.js"
import {
  getAllArtists,
  updateArtist,
  deleteArtist,
  getArtistById,
} from "./db/artists.js"

async function main() {
  try {
    await connectToDb("test")
  } catch (error) {
    console.warn("Unable to connect to mongo.db ", error)
  }

  try {
    /* Uppgift 1
     const allArtists = await getAllArtists()
    console.log(JSON.stringify(allArtists)) */
    /*     const foundArtist = await updateArtist(
      "69a57fcf917509dbf776f77f",
      "Young Lila",
    )
    const savedDeletedArtist = await deleteArtist("69a57fcf917509dbf776f77f")
    const allArtists = await getAllArtists()
    const filteredArtists = allArtists.filter(
      (artist) => artist.name.length >= 11,
    ) */
    //console.log(JSON.stringify(allArtists))
    /* console.log(filteredArtists) */

    /*     const foundArtist = await getArtistById("69a58030ea39d3b2c34ef0db")
    console.log(foundArtist) */

    /* await Artist.deleteMany() */
    const allArtists = await getAllArtists()
    console.log(JSON.stringify(allArtists))
  } catch (error) {
    if (error.code === 11000) {
      console.log(`Artist with name 'Bad bunny' allready exists`)
      return
    }
    console.log("Unable to interact with 'Artist' collection", error)
  }
}

main()
