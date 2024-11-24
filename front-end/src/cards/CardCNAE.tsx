import { startCase, toLower, replace } from 'lodash'

export default function CardCNAE(props: any) {
    let codigo = props.cnae.code;
    let descricao = props.cnae.text;
    let principal: boolean = props.principal;
    return (
        <div>
            {
                principal && (
                    <div className="bg-neutral-6 border border-secondary-light rounded-lg shadow-md p-6 m-1 text-left">
                        <p className=""><span className='text-neutral-1 text-lg'>{descricao}</span><span className='text-neutral-2 text-sm'> - ({codigo})</span></p>
                    </div>
                )
            }
            {
                !principal && (
                    <div className="bg-neutral-6 border border-secondary-light rounded-lg shadow-md p-6 m-1 text-left">
                        <p className=""><span className='text-neutral-1 text-lg'>{descricao}</span><span className='text-neutral-2 text-sm'> - ({codigo})</span></p>
                    </div>
                )
            }
        </div>
    )
}