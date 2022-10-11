import mongoose from "mongoose";

const { DATABASEMONGO, HOSTMONGO } = process.env;

(async () => {

    try {

        await mongoose.connect(`mongodb://${HOSTMONGO}/${DATABASEMONGO}`)

        console.log("Database mongo is running");
        
        
    } catch (error) {
        console.log(error);
    }

})()