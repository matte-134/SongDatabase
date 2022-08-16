const {buildDB} = require('./db/populateDatabase')
const express = require('express')
const app = express()
const {Song} = require('./db/model')

buildDB()

app.get('/songs/:id', async (req, res) => {
    console.log(req.params.id)
    let foundSong = await Song.findOne({
        where: {
            id: req.params.id
        }
    })
    let result = foundSong.title + ' by ' + foundSong.artist
    res.send(result)
})

app.get('/songs', async (req, res) => {
    const dbQuery = await Song.findAll()
    let beatsPerMinute = dbQuery.filter((song) => {
        if (song.BPM > req.query.BPM) {
            return true
        }
    })
    let payload = beatsPerMinute.map((b) => {
        return b.title
    })
    res.send(payload)
})

app.get('/songs/:key', async (req, res) => {
    let foundSong = await Song.findOne({
        where: {
            key: (req.params.key)
        }
    })
    let result = foundSong.title + ' by ' + foundSong.artist
    res.send(result)
})

app.listen(3000, () => {
    console.log('The server is live and listening at http://localhost:3000')
})
