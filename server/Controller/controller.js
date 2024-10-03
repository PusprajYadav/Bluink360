const userModal = require("../Schem/userModal");

// post data from express for mogo db
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

// get all data function

exports.GetAllData = async (req, res) => {
  try {
    const GetAllStudentData = await userModal.find();

    if (GetAllStudentData) {
      res.status(201).json({
        message: "Data Received successfully",
        GetAllStudentData,
      });
    } else {
      res.status(400).json({
        message: "Data Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// get one data using the find one Email

exports.GetOneData = async (req, res) => {
  try {
    const GetParticular = await userModal.findOne({
      email: req.query.email,
    });

    if (GetParticular) {
      res.status(201).json({
        message: " Data Received Success Fully",
        GetParticular,
      });
    } else {
      res.status(400).json({
        message: " Data Not Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};

// GetAllParticularData Name
exports.GetAllParticularData = async (req, res) => {
  try {
    const GetAllParticularNameData = await userModal.find(req.query);
    if (GetAllParticularNameData) {
      res.status(201).json({
        message: "Data Received successfully",
        GetAllParticularNameData,
      });
    } else {
      res.status(400).json({
        message: "Data Not Found",
      });
    }
  } catch (err) {
    res.status(201).json({
      message: " Internal Server Error ",
    });
  }
};
