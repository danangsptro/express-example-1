import mongoose from "../../config/mongodb.mjs";
import { DataDiriSchema } from "../../schema/index.mjs";

const Data = mongoose.model('service', DataDiriSchema);

export default Data