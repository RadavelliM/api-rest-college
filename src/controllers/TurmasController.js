import Turmas from "../models/turmas";

class TurmasController {
  constructor() {}

  async index(req, res) {
    const turmas = await Turmas.findAll({
      attributes: ["turma_id", "turma_sala", "turma_semestre"],
    });

    return res.json(turmas);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const turma = await Turmas.findByPk(id, {
        attributes: ["turma_id", "turma_sala", "turma_semestre"],
      });

      if (!turma) {
        return res.status(404).json({ errors: ["Turma não encontrada"] });
      }

      return res.json(turma);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novaTurma = await Turmas.create(req.body);

      const { turma_id, turma_sala, turma_semestre } = novaTurma;

      const informacoesTurma = {
        turma_id,
        turma_sala,
        turma_semestre,
      };

      return res.status(201).json(informacoesTurma);
    } catch (e) {
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

      const turma = await Turmas.findByPk(id);

      if (!turma) {
        return res.status(404).json({ errors: ["Turma não encontrada"] });
      }

      const turmaAtualizada = await turma.update(req.body);

      const { turma_id, turma_sala, turma_semestre } = turmaAtualizada;

      const informacoesTurma = {
        turma_id,
        turma_sala,
        turma_semestre,
      };

      return res.json(informacoesTurma);
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

      const turma = await Turmas.findByPk(id);

      if (!turma) {
        return res.status(404).json({ errors: ["Turma não encontrada"] });
      }

      await turma.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new TurmasController();
