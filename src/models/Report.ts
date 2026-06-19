import { Schema, model, models, Types } from "mongoose";

const categorySchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },

    score: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    summary: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const reportSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    repositoryName: {
      type: String,
      required: true,
      trim: true,
    },

    repositoryUrl: {
      type: String,
      required: true,
    },

    sourceType: {
      type: String,
      enum: ["github", "zip"],
      required: true,
    },

    overallScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    repositoryHealthScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    categories: {
      type: [categorySchema],
      default: [],
    },

    recommendations: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const Report =
  models.Report || model("Report", reportSchema);