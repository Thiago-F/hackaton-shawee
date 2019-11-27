const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EmpresaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  empresa: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  especialidade: {
    type: Array,
    required: false
  },
  email:{
    type: String,
    required:true
  },
  image:{
    type: String,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

EmpresaSchema.plugin(mongoosePaginate);
mongoose.model('Empresa', EmpresaSchema);