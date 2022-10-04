import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema(
  {
    Starship: {
      type: String,
      required: true,
    },
    Pilot: {
      type: String,
      required: true,
    },
    Copilot: {
      type: String,
      required: true,
    },
    OrigPlanet: {
      type: String,
      required: true,
    },
    DestPlanet: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Travel = mongoose.model("Travel", TravelSchema);

export { Travel };
