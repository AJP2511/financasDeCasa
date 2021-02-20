const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/financas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Conexão com o banco de dados efetuada com sucesso`);
  });

module.exports = mongoose;
