import { startCase, toLower, replace } from 'lodash'

export default function CardCNAE(props: any) {
    let codigo = props.cnae.code;
    let descricao = props.cnae.text;
    let principal: boolean = props.principal;
    return (
        <div>
            {
                principal && (
                    <div className="bg-secondary-dark border border-secondary-light rounded-lg shadow-md p-6 m-1 text-left">
                        <p className=""><span className='text-lg text-secondary-light'>{descricao}</span><span className='text-sm text-secondary'> - ({codigo})</span></p>
                    </div>
                )
            }
            {
                !principal && (
                    <div className="bg-white border border-secondary-light rounded-lg shadow-md p-6 m-1 text-left">
                        <p className=""><span className='text-lg text-secondary-dark'>{descricao}</span><span className='text-sm text-secondary'> - ({codigo})</span></p>
                    </div>
                )
            }
        </div>
    )
}