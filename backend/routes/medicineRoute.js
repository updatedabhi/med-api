const express = require("express");
const medicineController = require("../controllers/medicineController");
const router = express.Router();

router
  .route("/")
  .get(medicineController.getMedicines)
  .post(medicineController.addMedicines);

router
  .route("/:id")
  .patch(medicineController.updateMedicine)
  .delete(medicineController.deletMedicine);

module.exports = router;
