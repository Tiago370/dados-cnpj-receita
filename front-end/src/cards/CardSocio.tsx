import { startCase, toLower, replace} from 'lodash'


export default function CardSocio(props: any) {
    let socio = startCase(toLower(props.socio));
    let qualificacao = props.qualificacao;
    qualificacao = replace(qualificacao, /[\d]/g, '');
    qualificacao = replace(qualificacao, /-/g, ' ');
    return (
      <div className="bg-neutral-6 rounded-lg shadow-md p-6 m-1 text-center">
        <p className="text-neutral-1 font-bold text-xl">{socio}</p>
        <p className="text-neutral-1">{qualificacao}</p>
      </div>
    )
  }