import Nota from "../models/nota";

class NotaController {
  constructor() {}

  async index(req, res) {
    const notas = await Nota.findAll({
      attributes: ["nota_id", "matricula_id", "nota"]
    });

    return res.json(notas);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const nota = await Nota.findByPk(id, {
        attributes: ["nota_id", "matricula_id", "nota"]
      });

      if (!nota) {
        return res.status(404).json({ errors: ["Nota não encontrada"] });
      }

      return res.json(nota);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async create(req, res) {
    try {
      const novaNota = await Nota.create(req.body);

      const { nota_id, matricula_id, nota } = novaNota;

      const informacoesNota = {
        nota_id,
        matricula_id,
        nota
      };

      return res.status(201).json(informacoesNota);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const notas = await Nota.findByPk(id);

      if (!notas) {
        return res.status(404).json({ errors: ["Nota não encontrada"] });
      }

      const notaAtualizada = await notas.update(req.body);

      const { nota_id, matricula_id, nota } = notaAtualizada;

      const informacoesNota = {
        nota_id,
        matricula_id,
        nota
      };

      return res.json(informacoesNota);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const nota = await Nota.findByPk(id);

      if (!nota) {
        return res.status(404).json({ errors: ["Nota não encontrada"] });
      }

      await nota.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new NotaController();
