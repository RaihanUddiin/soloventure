import app from "./app.js";
import { connectDB } from "./lib/db/db.js";

const port = process.env.PORT || 5000;

connectDB().then(() => console.log("Mongoose connected successfully."))

app.listen(port, () => console.log(`Doctors portal running on ${port}`))