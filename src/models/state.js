const mongoose = require('mongoose');

const timestamps = require('mongoose-timestamp');

const StateSchema = new mongoose.Schema({
  uf: {
    type: 'String',
  },
  nome_uf: {
    type: 'String',
  },
  sigla_uf: {
    type: 'String',
  },
}, { collection: 'municipios' });

let state;

if (mongoose.models.Municipio) {
  state = mongoose.model('Municipio');
} else {
  StateSchema.plugin(timestamps);
  state = mongoose.model('Municipio', StateSchema);
}

module.exports = state;
