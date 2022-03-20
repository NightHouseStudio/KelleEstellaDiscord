const mongoose = require("mongoose");

const PrefixSchema = new mongoose.Schema({
  // Selected prefix
  Prefix: {
    type: String
  },
  // Guild ID
  GuildID: String
});

const MessageModel = module.exports = mongoose.model('prefixes', PrefixSchema)