import slugify from "slugify"
import { Playlist } from "../models/Playlist.js"
import { getFullTextSearch } from "../utils/fullTextSearch.js"

export async function getAllPlaylists(q) {
  let filter = {}
  if (q) {
    filter = {
      ...filter,
      ...getFullTextSearch(q, true, "name"),
    }
  }
  console.log(filter)
  try {
    return await Playlist.find(filter).populate("songs")
  } catch (err) {
    console.error("Unable to read from 'Playlists'", err)
    return []
  }
}

export async function getPlaylistById(id) {}

export async function createPlaylist(name, description = null) {
  const playlist = new Playlist({
    name,
    description,
    songs: [],
  })

  await playlist.save()
  return playlist
}

export async function addSongToPlaylist(playlistId, songId) {}
export async function removeSongFromPlaylist(playlistId, songId) {}
