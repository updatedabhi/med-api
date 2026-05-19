const express = require("express");
const medicineController = require("../controllers/medicineController");
const { protect } = require("../middlewares/protect");
const { restrictTo } = require("../middlewares/restrictTo");
const router = express.Router();

router
  .route("/")
  .get(protect, restrictTo("admin", "user"), medicineController.getMedicines)
  .post(medicineController.addMedicines);

router
  .route("/:id")
  .get(medicineController.getMedicine)
  .patch(medicineController.updateMedicine)
  .delete(medicineController.deleteMedicine);

module.exports = router;
