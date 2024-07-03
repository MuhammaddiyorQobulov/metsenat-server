import mongoose from "mongoose";

const Student = new mongoose.Schema({
  contract: { type: Number, required: true },
  full_name: { type: String, required: true },
  given: { type: Number, default: 0 },
  institute: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
  },
  phone: { type: String, required: true },
  type: { type: Number, default: 1 },
  created_at: { type: Date, default: Date.now() },
  get_status_display: { type: String, default: "Yangi" },
});

export default mongoose.model("Student", Student);
