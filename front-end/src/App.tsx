import CardEmpresa from "./cards/CardEmpresa";

export default function App() {

  const empresa = {
    "abertura": "31/01/1986",
    "situacao": "ATIVA",
    "tipo": "MATRIZ",
    "nome": "GLOBO COMUNICACAO E PARTICIPACOES S/A",
    "fantasia": "TV/REDE/CANAIS/G2C+GLOBO GLOBO.COM GLOBOPLAY",
    "porte": "DEMAIS",
    "natureza_juridica": "205-4 - Sociedade Anônima Fechada",
    "atividade_principal": [
      {
        "code": "60.21-7-00",
        "text": "Atividades de televisão aberta"
      }
    ],
    "atividades_secundarias": [
      {
        "code": "59.11-1-02",
        "text": "Produção de filmes para publicidade"
      },
      {
        "code": "59.11-1-99",
        "text": "Atividades de produção cinematográfica, de vídeos e de programas de televisão não especificadas anteriormente"
      },
      {
        "code": "59.12-0-02",
        "text": "Serviços de mixagem sonora em produção audiovisual"
      },
      {
        "code": "59.13-8-00",
        "text": "Distribuição cinematográfica, de vídeo e de programas de televisão"
      },
      {
        "code": "59.20-1-00",
        "text": "Atividades de gravação de som e de edição de música"
      },
      {
        "code": "60.22-5-01",
        "text": "Programadoras"
      },
      {
        "code": "62.02-3-00",
        "text": "Desenvolvimento e licenciamento de programas de computador customizáveis"
      },
      {
        "code": "62.03-1-00",
        "text": "Desenvolvimento e licenciamento de programas de computador não-customizáveis"
      },
      {
        "code": "62.04-0-00",
        "text": "Consultoria em tecnologia da informação"
      },
      {
        "code": "62.09-1-00",
        "text": "Suporte técnico, manutenção e outros serviços em tecnologia da informação"
      },
      {
        "code": "63.11-9-00",
        "text": "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet"
      },
      {
        "code": "63.19-4-00",
        "text": "Portais, provedores de conteúdo e outros serviços de informação na internet"
      },
      {
        "code": "64.63-8-00",
        "text": "Outras sociedades de participação, exceto holdings"
      },
      {
        "code": "70.20-4-00",
        "text": "Atividades de consultoria em gestão empresarial, exceto consultoria técnica específica"
      },
      {
        "code": "74.90-1-04",
        "text": "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários"
      },
      {
        "code": "77.39-0-99",
        "text": "Aluguel de outras máquinas e equipamentos comerciais e industriais não especificados anteriormente, sem operador"
      },
      {
        "code": "77.40-3-00",
        "text": "Gestão de ativos intangíveis não-financeiros"
      },
      {
        "code": "90.01-9-02",
        "text": "Produção musical"
      },
      {
        "code": "93.19-1-01",
        "text": "Produção e promoção de eventos esportivos"
      },
      {
        "code": "95.12-6-00",
        "text": "Reparação e manutenção de equipamentos de comunicação"
      }
    ],
    "qsa": [
      {
        "nome": "PAULO DAUDT MARINHO",
        "qual": "10-Diretor"
      },
      {
        "nome": "RAYMUNDO COSTA PINTO BARROS",
        "qual": "10-Diretor"
      },
      {
        "nome": "AMAURI SERGIO SOARES",
        "qual": "10-Diretor"
      },
      {
        "nome": "PEDRO BORGES GARCIA",
        "qual": "10-Diretor"
      },
      {
        "nome": "GEORGES AYOUB RICHE",
        "qual": "10-Diretor"
      }
    ],
    "logradouro": "R LOPES QUINTAS",
    "numero": "303",
    "municipio": "RIO DE JANEIRO",
    "bairro": "JARDIM BOTANICO",
    "uf": "RJ",
    "cep": "22.460-901",
    "telefone": "(21) 2155-4551/ (21) 2155-4552",
    "data_situacao": "03/11/2005",
    "cnpj": "27.865.757/0001-02",
    "ultima_atualizacao": "2024-11-06T18:25:37.047Z",
    "status": "OK",
    "complemento": "",
    "email": "",
    "efr": "",
    "motivo_situacao": "",
    "situacao_especial": "",
    "data_situacao_especial": "",
    "capital_social": "6983568523.86",
    "simples": {
      "optante": false,
      "data_opcao": null,
      "data_exclusao": null,
      "ultima_atualizacao": "2024-10-16T23:59:59.000Z"
    },
    "simei": {
      "optante": false,
      "data_opcao": null,
      "data_exclusao": null,
      "ultima_atualizacao": "2024-10-16T23:59:59.000Z"
    },
    "extra": {},
    "billing": {
      "free": true,
      "database": true
    }
  }
  return (
    <>
      {/* <CardSocios socios={empresa.qsa} /> */}
      <CardEmpresa empresa={empresa} />
    </>
  )
}