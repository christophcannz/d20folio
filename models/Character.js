var mongoose = require("mongoose");
var schema = mongoose.Schema;

var CharacterSchema = new Schema ({
    name: String,
    imageUrl: String,

    race: {
        type: String,
        enum: ["Elf", "Dwarf", "Human"]
    },
    class: {
        type: String,
        enum: ["warrior", "mystic", "rogue"]
    },
    level: {
        type: Number,
        default: 1
        
    },

    STR: Number,
    DEX: Number,
    CON: Number,
    INT: Number,
    WIS: Number,
    CHA: Number,

    equipment: [
        {
        type: Schema.Type.ObjectId,

        ref: "Equipment"
    }


});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;