import mongoose from "mongoose";
const DummySchema = new mongoose.Schema({
    name: {type: String, required: true, default: "Dummy Name"},
    salary: {type: Number, default: 45000},
    language: {type: String, default: "Python"},
    city: {type: String, default: "Dummy City"},
    isManager: {type: Boolean, default: true}
});

export const Dummy = mongoose.model('Dummy', DummySchema);