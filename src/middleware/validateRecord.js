//validation
export const validateRecord = (req, res, next) => {
  const { amount, type } = req.body;

  // Only validate if field is present
  if (amount !== undefined) {
    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount)) {
      return res.status(400).json({ message: "Amount must be valid" });
    }
    req.body.amount = parsedAmount;
  }

  if (type !== undefined && !["income", "expense"].includes(type)) {
    return res.status(400).json({ message: "Invalid type" });
  }

  next();
};