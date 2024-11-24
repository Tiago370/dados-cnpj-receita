import CardCNAE from "./CardCNAE";

export default function CardCNAEs(props: any) {
  const cnaes_secundarios = props.cnaes_secundarios;
  const cnae_principal = props.cnae_principal[0];
  console.log(cnae_principal)
  return (
    <div className="bg-neutral-5 py-10 px-10 my-10 border border-secondary-light rounded-lg shadow-md text-left">
      <h3>Atividades Econômicas</h3>
      <CardCNAE cnae={cnae_principal} principal={true} />
      {cnaes_secundarios.map((cnae: any, index: number) => (
        <CardCNAE key={index} cnae={cnae} principal={false} />
      ))}
    </div>
  );
}
