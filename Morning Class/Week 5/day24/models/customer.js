const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const customerSchema = new mongoose.Schema(
  // For column
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
      get: getPhoto,
    },
  },
  // Enables timestamps
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

/* Getter photo */
function getPhoto(photo) {
  if (!photo || photo.includes('https') || photo.includes('http')) {
    return photo;
  }

  return `/images/customers/${photo}`;
}

// Enable soft delete, it will make delete column automaticly
customerSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('customer', customerSchema); // Export customer models
