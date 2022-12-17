import mongoose from "mongoose";

const { DATABASEMONGO, HOSTMONGO } = process.env;

(async () => {

    try {

        const connection = await mongoose.connect(`mongodb://${HOSTMONGO}/${DATABASEMONGO}`)

        if(connection.STATES.connected) {
            console.log("MongoDB is running");
        }
        
        
    } catch (error) {
        console.log(error);
    }

})()