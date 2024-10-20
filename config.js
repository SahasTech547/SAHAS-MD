const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HPYCGCbC#kgdBxWyqX3Fk76oISEsHtTkcUXbkfIMGC8B1QitvwGU",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/dbFAKoG.jpg",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"
};
