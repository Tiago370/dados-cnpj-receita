import CardSocio from "./CardSocio";

export default function CardSocios(props: any) {
  const socios = props.socios;

  return (
    <div className="card-socios">
      {socios.map((socio: any, index: number) => (
        <CardSocio key={index} socio={socio.nome} qualificacao={socio.qual} />
      ))}
    </div>
  );
}
