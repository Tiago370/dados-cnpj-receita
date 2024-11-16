import CardSocio from "./CardSocio";

export default function CardSocios(props: any) {
  const socios = props.socios;

  return (
    <div className="py-10 px-10 my-10 bg-white border border-secondary-light rounded-lg shadow-md text-left">
      <h3>Sócios</h3>
      <div className="flex items-center justify-center flex-wrap">
        {socios.map((socio: any, index: number) => (
          <CardSocio key={index} socio={socio.nome} qualificacao={socio.qual} />
        ))}
      </div>
    </div>
  );
}
