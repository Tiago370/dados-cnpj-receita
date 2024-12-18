
import CardSocios from "./CardSocios";
import CardCNAEs from "./CardCNAEs";
import LinhaEndereco from "../linhas/LinhaEndereco";
import LinhaIdade from "../linhas/LinhaIdade";

export default function CardEmpresa(props: any) {
    let fantasia = props.empresa.fantasia;
    let nome = props.empresa.nome;
    let socios = props.empresa.qsa;
    let situacao = props.empresa.situacao;
    let natureza_juridica = props.empresa.natureza_juridica;
    let cnpj = props.empresa.cnpj;
    let data_abertura = props.empresa.abertura;
    let atividade_principal = props.empresa.atividade_principal;
    let atividades_secundarias = props.empresa.atividades_secundarias;
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
            <div className="bg-neutral-6 rounded-lg shadow-md p-6 m-6 text-center">
                <p className="text-neutral-1 text-4xl font-bold">{fantasia}</p>
                <p className="text-neutral-1 text-2xl font-bold">{nome}</p>
                <p className="text-neutral-1 text-xl font-bold">{cnpj}</p>
                {/* <p className="">{situacao}</p> */}
                <p className="text-neutral-1 text-2xl font-semibol">{natureza_juridica}</p>
                <LinhaIdade data_abertura={data_abertura} />
                <LinhaEndereco endereco={endereco} />
                <CardSocios socios={socios} />
                <CardCNAEs cnae_principal={atividade_principal} cnaes_secundarios={atividades_secundarias} />
            </div>

        </>
    )
}