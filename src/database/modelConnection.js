import { Sequelize } from "sequelize";
import databaseConfig from "../config/databaseConfig";

import aluno from "../models/aluno";
import usuario from "../models/usuario";
import foto from "../models/foto";
import professor from "../models/professor"

const conncetion = new Sequelize(databaseConfig);

const models = [aluno, usuario, foto, professor];
models.forEach((model) => model.init(conncetion));
models.forEach(
  (model) => model.associate && model.associate(conncetion.models)
);
