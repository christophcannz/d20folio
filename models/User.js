var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    characters: [
        type: Schema.Types.ObjectId,
        ref: "Character"
    ]
    }
})