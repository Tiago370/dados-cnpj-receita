import CardSocios from "./cards/CardSocios";

export default function App() {
  const socios = [
    {
      "nome": "PAULO DAUDT MARINHO",
      "qual": "10-Diretor"
    },
    {
      "nome": "RAYMUNDO COSTA PINTO BARROS",
      "qual": "10-Diretor"
    },
    {
      "nome": "AMAURI SERGIO SOARES",
      "qual": "10-Diretor"
    },
    {
      "nome": "PEDRO BORGES GARCIA",
      "qual": "10-Diretor"
    },
    {
      "nome": "GEORGES AYOUB RICHE",
      "qual": "10-Diretor"
    }
  ];
  return (
    <CardSocios socios={socios} />
  )
}