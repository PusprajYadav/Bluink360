const Modal = require("../Schema/Alumani");

exports.AlumaniPost2 = async (req, res) => {
  try {
    const AlumanaiData2 = await Modal.create(req.body);
    res.status(201).json({
      message: "Alumani Posted Successsfully",
      AlumanaiData2,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Alumani  Not Posted yet",
      err: err,
    });
  }
};

// get all aluma alumanaii

exports.GetAllAlumani2 = async (req, res) => {
  try {
    const GetAllAlumanidata2 = await Modal.find();

    if (GetAllAlumanidata2) {
      res.status(201).json({
        message: "Alumani Data Received successfully",
        GetAllAlumanidata2,
      });
    } else {
      res.status(400).json({
        message: "Alumani Data Not Recived ",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Internal Server Error",
    });
  }
};
// delete Alumani
exports.DeleteAlumanai2 = async (req, res) => {
  try {
    const DeleteAlumanaiData2 = await Modal.findByIdAndDelete(req.params.id);
    if (DeleteAlumanaiData2) {
      res.status(201).json({
        message: " Job Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Not Able To delete Founded",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Internal Sever error",
      err,
    });
  }
};

// update event data
exports.UpadetAlumani2 = async (req, res) => {
  try {
    const UpdateAlumanaiData2 = await Modal.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (UpdateAlumanaiData2) {
      res.status(201).json({
        message: " Alumani Data Updated SuccessFully",
        UpdateAlumanaiData2,
      });
    } else {
      req.status(404).json({
        message: "Alumai Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Founded ",
      err,
    });
  }
};
