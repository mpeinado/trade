'use strict';

class DataStore {
    constructor() {
        this.DATA_STORE_FILE_PATH = 'appData.json';
        this.fs = require("fs");

        this.data = {};
    }
    
    writeToFile(data) {
        this.fs.writeFile(this.DATA_STORE_FILE_PATH, JSON.stringify(data), "utf8", (err) => {
            if(err != null){
                console.log(`Error while writing to file ${err}`);
            }
        });
    }

    loadDataFromFile() {
        let dataStore = {};
        
        if (this.fs.existsSync(this.DATA_STORE_FILE_PATH)) {
            const rawdata = this.fs.readFileSync(this.DATA_STORE_FILE_PATH);  
            dataStore = JSON.parse(rawdata);
        }

        this.data =  dataStore;
    }
}

module.exports = DataStore;

