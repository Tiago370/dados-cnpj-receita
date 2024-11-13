import { startCase, toLower, replace } from 'lodash'

export default function CardCNAE(props: any) {
    let codigo = props.cnae.code;
    let descricao = props.cnae.text;
    let principal: boolean = props.principal;
    return (
        <div>
            {
                principal && (
                    <div className="card-cnae-principal">
                        <p className=""><span>{descricao}</span> <span>{codigo}</span></p>
                    </div>
                )
            }
            {
                !principal && (
                    <div className="card-cnae">
                        <p className=""><span>{descricao}</span> <span>{codigo}</span></p>
                    </div>
                )
            }
        </div>
    )
}