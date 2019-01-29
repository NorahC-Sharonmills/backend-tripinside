const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coment = new Schema({
    author: {type: Schema.Types.ObjectId, ref: "User"},
    content: {type: String}
});

const pushComent = new Schema({
    _id: {tyoe: String},
    uComent: {type: [coment], default: []}
});

const constpush = mongoose.model("Comment", pushComent);

module.exports = constpush;