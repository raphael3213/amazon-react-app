const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51J2gxXSGCqGphdr6XuGDlsD7X3qeNQaThGFULDUVv021Wk2dXtax3NwqfAwXOttBoYx58CIiOTpKzM28dhGLtqNH00gYATlHeH')

const app = express();


app.use(cors({origin: true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.end("Hello");
});

app.post('/payments/create',async (req,res)=>{
    const total = parseInt(req.query.total).toString();
    console.log('Payment Request Recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
        description:"Software development services",
        shipping: {
            name: 'Jenny Rosen',
            address: {
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            },
          }
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// app.listen(8000,()=>{
//     lis
// })

exports.api = functions.https.onRequest(app);