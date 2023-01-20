import * as Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method === "POST") {
    const razorpay = new Razorpay({
      key_id: "rzp_test_NRSClsMgMg8fwL",
      key_secret: "98cv8fjlZgh3MatAOZ7SqsHv",
    });

    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
}