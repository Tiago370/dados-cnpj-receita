import { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import CardEmpresa from './CardEmpresa';
import cpfCnpjValidator from 'cpf-cnpj-validator';
const { CNPJ } = cpfCnpjValidator;

const validarCNPJ = (cnpj: string) => {
  const cnpjLimpo = cnpj.replace(/[^\d]/g, ''); 
  return CNPJ.isValid(cnpjLimpo);
};
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function CardBusca() {
  const [empresa, setEmpresa] = useState<null | object>(null);
  const [cnpj, setCnpj] = useState('');
  const [error, setError] = useState<string | null>(null);

  const fetchEmpresa = async (cnpj: string) => {
    try {
      const cleanedCNPJ = cnpj.replace(/[^\d]/g, '');

      let retries = 0;
      while (retries < 3) {
        const response = await axios.get(`http://localhost:3001/cnpj/${cleanedCNPJ}`);
        console.log(response);
        if (response.status === 429) {
          console.log("Limite de requisições atingido. Tentando novamente em 20 segundos...");
          await delay(20000);
          retries++;
        } else {
          setEmpresa(response.data);
          setError(null);
          break;        }
      }
    } catch (error) {
      console.error("Erro ao buscar dados da empresa:", error);
      setError("Erro ao buscar dados da empresa");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cnpjInput = e.target.value;
    let cleanedCNPJ = cnpjInput.replace(/[^\d]/g, '');
    if(cleanedCNPJ.length == 14){
      fetchEmpresa(cleanedCNPJ);
    }
    setCnpj(cleanedCNPJ);
  };

  return (
    <>
      <div className="w-full bg-slate-50 text-center h-24 flex items-center justify-center">
        <InputMask
          mask="99.999.999/9999-99"
          value={cnpj}
          onChange={handleChange}
          placeholder="Digite o CNPJ"
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>
      
      {error && <div className="text-red-500 text-center">{error}</div>}

      {empresa && Object.keys(empresa).length > 0 ? (
        <CardEmpresa empresa={empresa} />
      ) : (
        !error && cnpj.length > 0 && cnpj.length < 14 && (
          <div className="text-gray-500 text-center">CNPJ incompleto</div>
        )
      )}
    </>
  );
}
