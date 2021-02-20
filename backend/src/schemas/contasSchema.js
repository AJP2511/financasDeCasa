const mongoose = require("../server/database");

const Schema = mongoose.Schema;

const contaSchema = new Schema({
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
});

const mesSchema = new Schema({
  mes: { type: String, required: true,  },
  ano: { type: Number, required: true, unique: true },
  despesas: [contaSchema],
});

module.exports = mongoose.model("Conta", mesSchema);
