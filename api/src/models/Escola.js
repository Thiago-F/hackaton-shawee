const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EscolaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    responsavel: {
        type: String,
        required: true
    },
    numeroTotalDeAlunos: {
        type: String,
        default: Date.now
    },
    cidade:{
      type: String,
      required:true
    },
    bairro:{
      type: String,
      required:true
    },
    cep:{
      type: String,
      required:true
    },
    createdAt: {
      type: Date,
      default: Date.now
  },
});

EscolaSchema.plugin(mongoosePaginate);
mongoose.model('Escola', EscolaSchema);