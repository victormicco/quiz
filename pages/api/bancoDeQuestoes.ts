import QuestaoModel from "../../model/questao";
import RespostaModel from "./../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(306, "Qual é a cor dos olhinhos da minha vuaida?", [
    RespostaModel.errada("Azuis"),
    RespostaModel.errada("Verdes"),
    RespostaModel.errada("Pretos"),
    RespostaModel.certa("Castanhos"),
  ]),

  new QuestaoModel(202, "Qual o tamanho que minha muie calça?", [
    RespostaModel.errada("34"),
    RespostaModel.errada("36"),
    RespostaModel.errada("35"),
    RespostaModel.certa("38"),
  ]),

  new QuestaoModel(203, "Qual gênero musical minha vidona mais gosta?", [
    RespostaModel.errada("Rock"),
    RespostaModel.errada("Samba"),
    RespostaModel.errada("Rap"),
    RespostaModel.certa("Tudo e mais um pouco"),
  ]),

  new QuestaoModel(204, "Como a minha amada demonstra que realmente me ama?", [
    RespostaModel.errada("Me xingando"),
    RespostaModel.errada("Falando que me ama"),
    RespostaModel.errada("Se irritando com atitudes minhas"),
    RespostaModel.certa("Tudo isso ai, e mais um milhão de coisas"),
  ]),
];

export default questoes;
