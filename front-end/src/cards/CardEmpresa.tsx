
import CardSocios from "./CardSocios";
import CardCNAE from "./CardCNAE";
import LinhaEndereco from "../linhas/LinhaEndereco";

export default function CardEmpresa(props: any) {
    let fantasia = props.empresa.fantasia;
    let nome = props.empresa.nome;
    let socios = props.empresa.qsa;
    let situacao = props.empresa.situacao;
    let natureza_juridica = props.empresa.natureza_juridica;
    let cnpj = props.empresa.cnpj;
    let endereco = {
        "logradouro": props.empresa.logradouro,
        "numero": props.empresa.numero,
        "municipio": props.empresa.municipio,
        "bairro": props.empresa.bairro,
        "uf": props.empresa.uf,
        "cep": props.empresa.cep,
    }
    return (
        <>
            <div className="w-full p-4">
                <p className="text-4xl">{fantasia}</p>
                <p className="">{nome}</p>
                <p className="">{situacao}</p>
                <p className="">{natureza_juridica}</p>
                <p className="">{cnpj}</p>
            </div>
            <LinhaEndereco endereco={endereco}/>
            <CardSocios socios={socios}/>
            <CardCNAE cnae={props.empresa.atividade_principal[0]} principal={true} />
        </>
    )
}