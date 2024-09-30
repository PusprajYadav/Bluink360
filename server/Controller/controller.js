const userModal = require("../Schem/userModal");

exports.PostUser = async (req, res) => {
  try {
    const PostData = await userModal.create(req.body);
    res.status(201).json({
      message: " Data Posted Successsfully",
      PostData,
    });
  } catch (err) {
    res.status(400).json({
      message: " Data Not Posted",
      err: err,
    });
  }
};
