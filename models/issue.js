const mongoose = require('mongoose');
// Creating issue schema
const issueSchema = new mongoose.Schema(
    {
      title: {
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
      labels: [
        {
          type: String,
          required: true,
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  
  const Issue = mongoose.model('Issue', issueSchema);
  
  module.exports = Issue;