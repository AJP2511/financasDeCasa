const routes = require("express").Router();
const Conta = require("../schemas/contasSchema");

routes.get("/", async (req, res) => {
  try {
    const dados = await Conta.find();

    return res.json(dados);
  } catch (err) {
    return res.status(400).send({ erro: "Erro ao coletar dados do servidor" });
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const dados = await Conta.findById(req.params.id);

    return res.json(dados);
  } catch (err) {
    return res.status(400).send({ erro: "Erro ao coletar dados do servidor" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const dado = await Conta.create(req.body);

    return res.status(200).send({ msg: "Dado adicionado com sucesso" });
  } catch (err) {
    return res.status(400).send({ erro: "Erro ao criar dado." });
  }
});

routes.post("/:id", async (req, res) => {
  try {
    const dadoSelecionado = await Conta.findById(req.params.id);

    const despesas = dadoSelecionado.despesas;

    despesas.push(req.body);

    const dadoSalvo = await dadoSelecionado.save();

    return res.json(dadoSalvo);
  } catch (err) {
    return res.status(400).send({ erro: "Erro ao inserir nova despesa" });
  }
});

routes.delete("/:id", async (req, res) => {
  try {
    //ID enviado por query para deletar
    const { rmv } = req.query;
    //encontra o mês desejado
    const mesProcurado = await Conta.findById(req.params.id);
    //seleciona todas as despesas do mês desejado
    const despesas = mesProcurado.despesas;
    //laço para encontrar dentro do array das despesas, qual possui o id da que deseja ser deletada
    for (let i = 0; i < despesas.length; i++) {
      if (String(despesas[i]._id) === rmv) {
        despesas.splice(i, 1);
      }
    }

    const dadoSalvo = await mesProcurado.save();

    return res.json(dadoSalvo);
  } catch (err) {
    return res.status(400).send({ erro: "Erro ao deletar dado" });
  }
});

routes.get("/total", async (req, res) => {
  Conta.aggregate(
    [
      {
        $project: {
          mes: "$mes",
          soma: { $sum: "$despesas.valor" },
          divisao: { $divide: [{ $sum: "$despesas.valor" }, 2] },
        },
      },
      {
        $project: { _id: 0, mes: 1, soma: 1, divisao: 1 },
      },
    ],
    (error, result) => {
      if (error) return res.status(400).send({ erro: `${error}` });
      else res.json(result);
    }
  );
});

module.exports = (app) => app.use("/financas", routes);
