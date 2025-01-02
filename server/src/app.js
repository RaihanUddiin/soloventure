import env from 'dotenv'
import cors from "cors"
import express from "express"
import placeRoutes from './routes/place.routes.js'
import appointmentRoutes from './routes/appointment.routes.js'
import bookingRoutes from './routes/booking.routes.js'
import paymentRoutes from './routes/payment.routes.js'
import userRoutes from './routes/user.routes.js'
import tokenRoutes from './routes/token.routes.js'

env.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.twtll.mongodb.net/?retryWrites=true&w=majority`;
// const uri = 'mongodb://admin:ADMIN@localhost:27017/soloVenture?authSource=admin'
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function routesRun() {
    try{
        app.get('/', async (req, res) => {
            res.send('soloventure server is running');
        })

        app.use(placeRoutes)
        app.use(appointmentRoutes)
        app.use(bookingRoutes)
        app.use(paymentRoutes)
        app.use(userRoutes)
        app.use(tokenRoutes)

    }finally{
        //
    }
}

routesRun().catch(console.log);

export default app;