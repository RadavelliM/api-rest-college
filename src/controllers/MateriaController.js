import Materia from "../models/materia";

class MateriaController {
  constructor() {}

  async index(req, res) {
    const materias = await Materia.findAll({
      attributes: ["materia_id", "materia_nome"],
    });

    res.json(materias);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const materia = await Materia.findByPk(id, {
        attributes: ["materia_id", "materia_nome"],
      });

      if (!materia) {
        return res.status(404).json({ errors: ["Matéria não encontrada"] });
      }

      return res.json(materia);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novaMateria = await Materia.create(req.body);

      const { materia_id, materia_nome } = novaMateria;

      const informacoesMateria = {
        materia_id,
        materia_nome,
      };

      return res.status(201).json(informacoesMateria);
    } catch (e) {
      console.log(`ERRO: ${e}`)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const materia = await Materia.findByPk(id);

      if (!materia) {
        return res.status(404).json({ errors: ["Matéria não encontrada"] });
      }

      const materiaAtualizada = await materia.update(req.body);

      const { materia_id, materia_nome } = materiaAtualizada;

      const informacoesMateria = {
        materia_id,
        materia_nome,
      };

      return res.json(informacoesMateria);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const materia = await Materia.findByPk(id);

      if (!materia) {
        return res.status(404).json({ errors: ["Matéria não encontrada"] });
      }

      await materia.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new MateriaController();
