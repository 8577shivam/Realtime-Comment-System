function dbConnect() {
    const mongoose = require('mongoose')
    const url = 'mongodb://localhost/comments'



    mongoose.connect(url, {
        // userNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindModify: true
    })

    const connection = mongoose.connection


    //checking for connection
    connection.once('open', function() {
        console.log("Connection established");
    }).on('error', err => {
        console.log("Conncetion is Failed........");
    });

}

module.exports = dbConnect