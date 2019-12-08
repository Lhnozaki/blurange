require("dotenv").config();

const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SK);

router.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

router.post("/", async (req, res) => {
  console.log(req.body.token);

  try {
    let { status } = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "A Cool Template",
      receipt_email: req.body.token.email,
      metadata: { email: req.body.token.email },
      source: req.body.token.id
    });

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
