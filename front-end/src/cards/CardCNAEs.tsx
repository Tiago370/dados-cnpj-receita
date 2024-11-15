import CardCNAE from "./CardCNAE";

export default function CardCNAEs(props: any) {
  const cnaes_secundarios = props.cnaes_secundarios;
  const cnae_principal = props.cnae_principal[0];
  console.log(cnae_principal)
  return (
    <div className="card-socios">
      <CardCNAE cnae={cnae_principal} principal={true} />
      {cnaes_secundarios.map((cnae: any, index: number) => (
        <CardCNAE key={index} cnae={cnae} principal={false} />
      ))}
    </div>
  );
}
