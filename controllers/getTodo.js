const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todos,
      message: "Todo Data Fetched",
    });
  } catch (err) {
    console.error("Todo Error", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    if(!todo){
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo Data Fetched",
    });
    
  } catch (err) {
    console.error("Todo Error", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
