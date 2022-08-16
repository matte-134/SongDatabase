const {DataTypes, db} = require('./index')

const Song = db.define('song', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING
    },
    artist: DataTypes.STRING,
    key: DataTypes.STRING,
    BPM: DataTypes.INTEGER
})

module.exports = {Song}