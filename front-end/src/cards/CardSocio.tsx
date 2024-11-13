import { startCase, toLower, replace} from 'lodash'


export default function CardSocio(props: any) {
    let socio = startCase(toLower(props.socio));
    let qualificacao = props.qualificacao;
    qualificacao = replace(qualificacao, /[\d]/g, '');
    qualificacao = replace(qualificacao, /-/g, ' ');
    return (
      <div className="card-socio">
        <p className="">{socio}</p>
        <p className="">{qualificacao}</p>
      </div>
    )
  }