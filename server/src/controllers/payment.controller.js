export const paymentController = {
    createIntent: async (req, res) => {
        const booking = req.body;
        const price = booking.price;
        const amount = price * 100;

        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: amount,
            "payment_method_types": [
                "card"
            ]
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    },
    
    create: async (req, res) => {
        const payment = req.body;
        const result = await paymentsCollection.insertOne(payment);
        const id = payment.bookingId
        const filter = { _id: ObjectId(id) }
        const updatedDoc = {
            $set: {
                paid: true,
                transactionId: payment.transactionId
            }
        }
        const updatedResult = await bookingsCollection.updateOne(filter, updatedDoc)
        res.send(result);
    }
}