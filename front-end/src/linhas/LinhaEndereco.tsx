import { startCase, toLower } from 'lodash'
export default function LinhaEndenreco(props: any) {
    let logradouro = startCase(toLower(props.endereco.logradouro));
    let municipio = startCase(toLower(props.endereco.municipio));
    let bairro = startCase(toLower(props.endereco.bairro));
    let numero = props.endereco.numero;
    let cep = props.endereco.cep;
    let uf = props.endereco.uf;
    let endereco = `${logradouro}, ${numero} - ${bairro}, ${municipio} - ${uf}, ${cep}`
    return (
      <div className="text-neutral-1 text-center text-base">
        <p className="">{endereco}</p>
      </div>
    )
  }