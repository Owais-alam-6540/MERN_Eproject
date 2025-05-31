const Stall = require("../Collection/Stall"); // adjust path as needed

// Create Stall
exports.createStall = async (req, res) => {
  try {
    const stall = new Stall(req.body);
    const savedStall = await stall.save();
    res.status(201).json(savedStall);
  } catch (err) {
    res.status(501).json({ error: err.message });
  }
};

// Get all stalls
exports.getAllStalls = async (req, res) => {
  try {
    const stalls = await Stall.find().populate("hall", "hall_no");
    res.json(stalls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single stall by id
exports.getStallById = async (req, res) => {
  try {
    const stall = await Stall.findById(req.params.id).populate("hall", "hall_no");
    if (!stall) return res.status(404).json({ error: "Stall not found" });
    res.json(stall);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update stall by id
exports.updateStall = async (req, res) => {
  try {
    const updatedStall = await Stall.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedStall) return res.status(404).json({ error: "Stall not found" });
    res.json(updatedStall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete stall by id
exports.deleteStall = async (req, res) => {
  try {
    const deletedStall = await Stall.findByIdAndDelete(req.params.id);
    if (!deletedStall) return res.status(404).json({ error: "Stall not found" });
    res.json({ message: "Stall deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
