import Atribuicao from "../models/atribuicoes";

class AtribuicaoController {
  constructor() {}

  async index(req, res) {
    const atribuicoes = await Atribuicao.findAll({
      attributes: [
        "atribuicao_id",
        "atribuicao_curso",
        "atribuicao_professor",
        "atribuicao_materia",
        "created_at",
        "updated_at",
      ],
    });

    return res.json(atribuicoes);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ errors: ["ID inválido"] });
      }

      const atribuicao = await Atribuicao.findByPk(id, {
        attributes: [
          "atribuicao_id",
          "atribuicao_curso",
          "atribuicao_professor",
          "atribuicao_materia",
          "created_at",
          "updated_at",
        ],
      });

      if (!atribuicao) {
        return res.status(404).json({ errors: ["Atribuição não encontrada"] });
      }

      return res.json(atribuicao);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novaAtribuicao = await Atribuicao.create(req.body);

      const {
        atribuicao_id,
        atribuicao_curso,
        atribuicao_professor,
        atribuicao_materia,
        created_at,
        updated_at,
      } = novaAtribuicao;

      const informacoesAtribuicao = {
        atribuicao_id,
        atribuicao_curso,
        atribuicao_professor,
        atribuicao_materia,
        created_at,
        updated_at,
      };

      return res.status(201).json(informacoesAtribuicao);
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

      const atribuicao = await Atribuicao.findByPk(id);

      if (!atribuicao) {
        return res.status(404).json({ errors: ["Atribuição não encontrada"] });
      }

      const atribuicaoAtualizada = await atribuicao.update(req.body);

      const {
        atribuicao_id,
        atribuicao_curso,
        atribuicao_professor,
        atribuicao_materia,
        created_at,
        updated_at,
      } = atribuicaoAtualizada;

      const informacoesAtribuicao = {
        atribuicao_id,
        atribuicao_curso,
        atribuicao_professor,
        atribuicao_materia,
        created_at,
        updated_at,
      };

      return res.json(informacoesAtribuicao);
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

      const atribuicao = await Atribuicao.findByPk(id);

      if (!atribuicao) {
        return res.status(404).json({ errors: ["Atribuição não encontrada"] });
      }

      await atribuicao.destroy();

      return res.status(200).json("Excluído com sucesso");
    } catch (e) {
      console.log(`erro: ${e}`);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AtribuicaoController();
