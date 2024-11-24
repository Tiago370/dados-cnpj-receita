import { differenceInYears, parse } from 'date-fns'
export default function LinhaIdade(props: any) {
    let data_abertura = parse(props.data_abertura, "dd/MM/yyyy", new Date());
    let idade = differenceInYears(new Date(), data_abertura);
    let linha = `${idade} anos de existência`
    return (
      <div className="text-neutral-1 text-center text-xl font-semibol">
        <p className="">{linha}</p>
      </div>
    )
  }