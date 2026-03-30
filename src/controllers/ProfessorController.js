import Professor from '../models/professor'

class ProfessorController {
  constructor() {}

  async index(req, res) {
    const professores = await Professor.findAll({
        attributes: [
          "professor_id",
          "professor_nome",
          "professor_sobrenome",
          "professor_email",
          "professor_dt_nasc"
        ]
    });

    res.json(professores);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const professores = await Professor.findByPk(id, {
        attributes: [
          "professor_id",
          "professor_nome",
          "professor_sobrenome",
          "professor_email",
          "professor_dt_nasc"
        ]
      });

      if (!professores) {
        return res.status(404).json({ errors: ["Professor nao encontrado"] });
      }

      return res.json(professores);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async create(req, res) {
    try {
      const newProfessor = await Professor.create(req.body);
      const { professor_id, professor_nome, professor_sobrenome, professor_email, professor_dt_nasc } =
        newProfessor;
      const informacoesProfessores = {
        professor_id,
        professor_nome,
        professor_sobrenome,
        professor_email,
        professor_dt_nasc,
      };
      res.status(201).json(informacoesProfessores);
    } catch (e) {
      console.log(e)
      res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return res.status(404).json({ errors: ["Professor nao encontrado"] });
      }

      const novoProfessor = await professor.update(req.body);

      const { professor_nome, professor_sobrenome, professor_email, professor_dt_nasc } = novoProfessor;
      const informacoesProfessores = {
        professor_nome,
        professor_sobrenome,
        professor_email,
        professor_dt_nasc
      };

      return res.json(informacoesProfessores);
    } catch (e) {
      console.log(`ERRO: ${e}`)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ["ID invalido"] });
      }

      const professor = await Professor.findByPk(id);

      if (!professor) {
        return res.status(404).json({ errors: ["Professor nao encontrado"] });
      }

      await professor.destroy();

      return res.status(200).json("Excluido com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new ProfessorController();
