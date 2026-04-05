import { Sequelize } from "sequelize";
import databaseConfig from "../config/databaseConfig";

import aluno from "../models/aluno";
import usuario from "../models/usuario";
import foto from "../models/foto";
import professor from "../models/professor";
import materia from "../models/materia";
import curso from "../models/curso";
import turmas from "../models/turmas";
import atribuicao from "../models/atribuicoes";
import matricula from "../models/matricula";

const conncetion = new Sequelize(databaseConfig);

const models = [
  aluno,
  usuario,
  foto,
  professor,
  materia,
  curso,
  turmas,
  atribuicao,
  matricula
];
models.forEach((model) => model.init(conncetion));
models.forEach(
  (model) => model.associate && model.associate(conncetion.models)
);
