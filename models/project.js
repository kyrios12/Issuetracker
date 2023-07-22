const mongoose = require('mongoose');
//Project which user is facing issues
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    //Creating a attribute issue
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue',
      },
    ],
    //type of issue
    labels: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
