const database = require("../database/database");

exports.deleteTask = async (req, res) => {
  const itemId = req.params.itemId;

  try {
    const result = await database.query(
      "DELETE FROM task WHERE _id = $1",
      [itemId] // 인젝션 공격을 막을 때 사용하는 방법 = $1, []
    );
    return res.status(201).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Delete Task Fail" + error });
  }
};
