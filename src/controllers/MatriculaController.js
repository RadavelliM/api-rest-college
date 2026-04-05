import Matricula from "../models/matricula";

class MatriculaController {
  constructor() {}

  async index(req, res) {
    const matriculas = await Matricula.findAll({
      attributes: [
        "matricula_id",
        "matricula_id_aluno",
        "matricula_turma",
        "matricula_atribuicao"
      ]
    });

    return res.json(matriculas);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const matricula = await Matricula.findByPk(id, {
        attributes: [
          "matricula_id",
          "matricula_id_aluno",
          "matricula_turma",
          "matricula_atribuicao"
        ]
      });

      if (!matricula) {
        return res.status(404).json({ errors: ["Matrícula não encontrada"] });
      }

      return res.json(matricula);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async create(req, res) {
    try {
      const novaMatricula = await Matricula.create(req.body);

      const {
        matricula_id,
        matricula_id_aluno,
        matricula_turma,
        matricula_atribuicao
      } = novaMatricula;

      const informacoesMatricula = {
        matricula_id,
        matricula_id_aluno,
        matricula_turma,
        matricula_atribuicao
      };

      return res.status(201).json(informacoesMatricula);
    } catch (e) {
      console.log("ERRO: ", e);
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

      const matricula = await Matricula.findByPk(id);

      if (!matricula) {
        return res.status(404).json({ errors: ["Matrícula não encontrada"] });
      }

      const matriculaAtualizada = await matricula.update(req.body);

      const {
        matricula_id,
        matricula_id_aluno,
        matricula_turma,
        matricula_atribuicao
      } = matriculaAtualizada;

      const informacoesMatricula = {
        matricula_id,
        matricula_id_aluno,
        matricula_turma,
        matricula_atribuicao
      };

      return res.json(informacoesMatricula);
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

      const matricula = await Matricula.findByPk(id);

      if (!matricula) {
        return res.status(404).json({ errors: ["Matrícula não encontrada"] });
      }

      await matricula.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new MatriculaController();
