
exports.createOrder = async (req, res) => {
  try {
    const { service } = req.body;
    const userID = req.user.userID;

    const newOrder = new Order({ service, userID });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userID = req.user.userID;
    const orders = await Order.find({ userID }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};