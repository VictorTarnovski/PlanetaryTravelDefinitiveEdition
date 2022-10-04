import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema(
  {
    Starship: {
      type: String,
    },
    Pilot: {
      type: String,
    },
    Copilot: {
      type: String,
    },
    OrigPlanet: {
      type: String,
    },
    DestPlanet: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Travel = mongoose.model("Travel", TravelSchema);

export { Travel };
