import Enunciado from "../components/Enunciado";
import Questao from "../components/Questao";
import QuestaoModel from "./../model/questao";
import RespostaModel from "./../model/resposta";

export default function Home() {
  const questaoTeste = new QuestaoModel(1, "Melhor Cor", [
    RespostaModel.errada("verde"),
    RespostaModel.errada("verde"),
    RespostaModel.errada("verde"),
    RespostaModel.certa("preto"),
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
}
