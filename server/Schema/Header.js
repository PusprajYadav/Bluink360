const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    get: (date) => ({
      day: date.getDate(),
      month: date.getMonth() + 1, // Months are zero-indexed
      year: date.getFullYear(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    }),
  },
  seats: {
    total: {
      type: Number,
      default: 100, // Default total seats
    },
    remaining: {
      type: Number,
      required: true,
    },
  },
});

// Optional: Transform to JSON if you need formatted output
headerSchema.set("toJSON", { getters: true, virtuals: true });

const Header = mongoose.model("Header", headerSchema);

module.exports = Header;
