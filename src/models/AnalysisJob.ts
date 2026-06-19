import { Schema, model, models, Types } from "mongoose";

const analysisJobSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    repositoryUrl: {
      type: String,
      default: "",
    },

    repositoryName: {
      type: String,
      required: true,
    },

    sourceType: {
      type: String,
      enum: ["github", "zip"],
      required: true,
    },

    status: {
      type: String,
      enum: [
        "queued",
        "processing",
        "completed",
        "failed",
      ],
      default: "queued",
    },

    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    reportId: {
      type: Types.ObjectId,
      ref: "Report",
      default: null,
    },

    errorMessage: {
      type: String,
      default: "",
    },

    startedAt: {
      type: Date,
      default: null,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const AnalysisJob =
  models.AnalysisJob ||
  model("AnalysisJob", analysisJobSchema);