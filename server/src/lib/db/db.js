import mongoose from "mongoose"

const uri = 'mongodb://admin:ADMIN@localhost:27017/soloVenture?authSource=admin'

export const connectDB = async () => {
    try {
        // mongoose.connect(uri, (instance) => {
        //     console.log("Mongoose connection instance : " + instance)
        // })
       await mongoose.connect(uri);
    } catch (error) {
        console.log("Error to connect mongoose :" + error)
        throw error;
    }
}