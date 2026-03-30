import Curso from "../models/curso";

class CursoController {
  constructor() {}

  async index(req, res) {
    const cursos = await Curso.findAll({
      attributes: ["curso_id", "curso_nome"],
    });

    res.json(cursos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const curso = await Curso.findByPk(id, {
        attributes: ["curso_id", "curso_nome"],
      });

      if (!curso) {
        return res.status(404).json({ errors: ["Curso não encontrado"] });
      }

      return res.json(curso);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novoCurso = await Curso.create(req.body);

      const { curso_id, curso_nome } = novoCurso;

      const informacoesCurso = {
        curso_id,
        curso_nome,
      };

      return res.status(201).json(informacoesCurso);
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

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return res.status(404).json({ errors: ["Curso não encontrado"] });
      }

      const cursoAtualizado = await curso.update(req.body);

      const { curso_id, curso_nome } = cursoAtualizado;

      const informacoesCurso = {
        curso_id,
        curso_nome,
      };

      return res.json(informacoesCurso);
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

      const curso = await Curso.findByPk(id);

      if (!curso) {
        return res.status(404).json({ errors: ["Curso não encontrado"] });
      }

      await curso.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CursoController();
