import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  receieved: Boolean,
});

export default mongoose.model("messagecontents", whatsappSchema);
