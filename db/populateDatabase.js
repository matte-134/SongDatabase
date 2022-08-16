const { db} = require('.')
const {songData} = require('./seedData');
const {Song} = require('./model')

let populateDataBase = async () => {
      await db.sync({ force: true });
      await Promise.all(songData.map((c) => {Song.create(c)}))
      }

  
let buildDB = async () => {
        await populateDataBase()
  }
//   buildDB()

  module.exports = {buildDB, Song}