import { useState } from "react";
import onePieceLogo from "./assets/one-piece-logo.png";

function App() {
  const onePieceRoster = [
    {
      imgSrc: "./src/assets/personagem-monkey-d-luffy.png",
      imgAlt: "Foto do Monkey D. Luffy",
      characterName: "Monkey D. Luffy",
      description:
        "Luffy do Chapéu de Palha, como ficou conhecido, é o protagonista do anime, e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas.",
    },
    {
      imgSrc: "./src/assets/personagem-nami.png",
      imgAlt: "Foto da Nami",
      characterName: "Nami",
      description:
        "Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo.",
    },
    {
      imgSrc: "./src/assets/personagem-roronoa-zoro.png",
      imgAlt: "Foto do Roronoa Zoro",
      characterName: "Roronoa Zoro",
      description:
        "Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida.",
    },
    {
      imgSrc: "./src/assets/personagem-sanji.png",
      imgAlt: "Foto do Sanji",
      characterName: "Sanji",
      description:
        "Também conhecido como 'Perna Negra Sanji', este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo.",
    },
    {
      imgSrc: "./src/assets/personagem-tony-chopper.png",
      imgAlt: "Foto do Tony Chopper",
      characterName: "Tony Chopper",
      description:
        "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação.",
    },
  ];

  const buttonOptions = [
    {
      imgSrc: "./src/assets/tripulacao-luffy.png",
      imgAlt: "Tripulação Monkey D. Luffy",
    },
    { imgSrc: "./src/assets/tripulacao-nami.png", imgAlt: "Tripulação Nami" },
    {
      imgSrc: "./src/assets/tripulacao-zoro.png",
      imgAlt: "Tripulação Roronoa Zoro",
    },
    { imgSrc: "./src/assets/tripulacao-sanji.png", imgAlt: "Tripulação Sanji" },
    {
      imgSrc: "./src/assets/tripulacao-chopper.png",
      imgAlt: "Tripulação Tony Chopper",
    },
  ];

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  return (
    <>
      <main>
        {onePieceRoster.map((character, index) => {
          return (
            <div
              key={index}
              className={index === selectedButtonIndex ? "block" : "hidden"}
            >
              <img
                className="w-full h-screen object-cover max-md:w-full max-[425px]:h-auto"
                src={character.imgSrc}
                alt={character.imgAlt}
              />
              <div className="absolute z-10 top-0 left-32 flex flex-col min-h-screen justify-center max-w-sm max-md:justify-end max-md:left-0 max-md:-top-[15%] max-md:max-w-full max-md:p-8">
                <img className="h-32 w-56 bg-cover mb-9" src={onePieceLogo} />
                <h2 className="text-white text-5xl font-secularOne mb-5 max-md:text-4xl">
                  {character.characterName}
                </h2>
                <p className="text-white font-rubik text-base max-md:max-w-lg">
                  {character.description}
                </p>
              </div>
            </div>
          );
        })}
      </main>
      <div className="bg-gradient-to-l from-black/0 via-black/10 to-black/90 w-full h-full absolute top-0 left-0" />
      <ul className="flex flex-col justify-center absolute top-0 right-0 space-y-10 px-8 bg-black/30 h-screen max-md:flex-row max-md:items-end max-md:w-full max-md:p-8 max-md:gap-5">
        {buttonOptions.map((option, index) => {
          return (
            <li key={index} className="rounded-full">
              <button
                onClick={() => setSelectedButtonIndex(index)}
                className={
                  "rounded-full cursor-pointer hover:scale-125 hover:duration-500 hover:shadow-2xl" +
                  (index === selectedButtonIndex ? " scale-125" : "")
                }
              >
                <img
                  src={option.imgSrc}
                  alt={option.imgAlt}
                  className="rounded-full max-md:w-14"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
