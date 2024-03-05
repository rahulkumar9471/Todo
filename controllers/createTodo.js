const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Todo Created Successfully",
    });
  } catch (err) {
    console.error("Todo Error", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
