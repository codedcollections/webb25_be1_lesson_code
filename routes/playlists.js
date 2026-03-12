import { Router } from "express"
import { getAllPlaylists, createPlaylist } from "../db/playlists.js"
const playlistRouter = Router()

playlistRouter.get("/", async (req, res) => {
  console.log("tried to run get ")
  const { q } = req.query
  const playlists = await getAllPlaylists(q)
  return res.json(playlists)
})

playlistRouter.post("/", async (req, res) => {
  const { name, description, songs } = req.body
  const hasName = name && typeof name === "string"
  let _songs = songs.length ? songs : []
  if (!hasName) {
    return res.status(400).json({
      message: "Name is required",
    })
  }
  const playlist = await createPlaylist({ name, description, songs: _songs })

  if (!playlist) {
    return res.status(409).json({
      message: `playlist with name '${name}' already exists`,
    })
  }

  //return res.status(201).json(playlist)
  return res.json(playlist)
})

export default playlistRouter
