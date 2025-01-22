const Medicine = require("../models/medicineModel");

const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json({
      status: "success",
      data: {
        medicines,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const addMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        medicines,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const updateMedicine = async (req, res) => {
  try {
    const newMedicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      data: {
        newMedicine,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deletMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getMedicines, addMedicines, updateMedicine, deletMedicine };
