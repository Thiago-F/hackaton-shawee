const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const VisitacaoSchema = new mongoose.Schema({
  escola: {
    type: String,
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});

VisitacaoSchema.plugin(mongoosePaginate);
mongoose.model('Visitacao', VisitacaoSchema);