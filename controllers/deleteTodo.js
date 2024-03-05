const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
        success: true, 
        message: "Todo Delete Successfully",
      })
     
  } catch (err) {
    console.error("Todo Error", err.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
