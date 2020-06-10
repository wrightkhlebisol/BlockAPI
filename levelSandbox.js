const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

module.exports = dbController = {
    addLevelDBData: (key, value) => {
        return db.put(key, value, (err) => {
            if (err) console.log(err);
            console.log(`Inserted : ${value}`)
        })
    },

    // Get data from levelDB with key (Promise)
    getLevelDBData: (key) => {
        // new Promise(resolve, reject)
        db.get(key, (err, value) => {
            if (err) console.log(err);
            console.log(`Key is ${key} and value is ${value}`);
        });
    },

    // Method that return the height
    getBlocksCount: (key) => {
        // let keyData = db.get(key, (err, value) => value);
        // return keyData.length;
        let stream = db.createReadStream();

        let i = 0;
        stream.on('data', function (data) {
            i = i + 1;
            console.log(`${data.key} = ${data.value}`)
        }).once('close', function () {
            console.log(`Total data = ${i}`);

        })
    },

    deleteAllRecords: (key) => {
        // let keyData = db.get(key, (err, value) => value);
        // return keyData.length;
        let stream = db.createReadStream();

        stream.on('data', function (data) {
            db.del(data.key);
            console.log(`${data.key} = ${data.value}`)
        }).once('close', function () {
            console.log(`All records deleted`);

        })
    }

}
// Add data to levelDB with key and value (Promise)