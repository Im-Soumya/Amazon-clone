const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items } = req.body;
  console.log(items);
}