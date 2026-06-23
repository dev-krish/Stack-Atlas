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
  },
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
      trim: true,
    },

    repositoryUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    primaryLanguage: {
      type: String,
    },

    stars: {
      type: Number,
  },

    sourceType: {
      type: String,
      enum: ["github", "zip"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },
    overallScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    repositoryHealthScore: {
      type: Number,
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
  },
);

export const Report = models.Report || model("Report", reportSchema);
