import { startCase, toLower, replace} from 'lodash'


export default function CardSocio(props: any) {
    let socio = startCase(toLower(props.socio));
    let qualificacao = props.qualificacao;
    qualificacao = replace(qualificacao, /[\d]/g, '');
    qualificacao = replace(qualificacao, /-/g, ' ');
    return (
      <div className="bg-white border border-secondary-light rounded-lg shadow-md p-6 m-1 text-center">
        <p className="text-xl text-secondary-dark">{socio}</p>
        <p className="text-secondary">{qualificacao}</p>
      </div>
    )
  }