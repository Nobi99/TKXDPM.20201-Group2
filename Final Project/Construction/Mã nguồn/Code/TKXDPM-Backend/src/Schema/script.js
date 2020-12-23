import connection from '../config/database.config';



const createFakeDb = () => {
    var createDb = new Promise((resolve, reject) => {
        try {
            connection.query(`CREATE DATABASE IF NOT EXISTS ecobike`, (err, result) => {
                if (err) throw err;
                console.log("Create database successfully!!");
            })
        } catch (err) { console.log(err); }
    })
    createDb.then(

    )

}
