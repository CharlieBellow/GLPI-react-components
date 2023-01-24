/* 

Para criar o contexto de serviço:

//Contexto de serviço

const lista de carta de serviços
id da carta de serviço

const lista de categorias
id da categoria

const lista de subcategorias
id da subcategoria

criar o serviço
id, nome e credencial do usuário pelo contexto de usuário logado
id da carta de serviço eu sei a qual categoria ele pertence

pra obrigar a carta de serviço a ter uma categoria eu crio desde o início a categoria e subcategoria com o nome outros. E aí quando for criar a carta de serviço obriga a colocar uma categoria e subcategoria, se não se aplicar a nenhuma a pessao escolhe outros.

*/

import * as Icon from 'phosphor-react'
export const categoryIcons = [
  { name: "Plus", icon: <Icon.Plus /> },
  { name: "DotsThreeVertical", icon: <Icon.DotsThreeVertical /> },
  { name: "AddressBook", icon: <Icon.DotsThreeVertical /> },
  { name: "Archive", icon: <Icon.Archive /> },
  { name: "Archive", icon: <Icon.Archive /> },
  { name: "Asterisk", icon: <Icon.Asterisk /> },
  { name: "Book", icon: <Icon.Book /> },
  { name: "Books", icon: <Icon.Books /> },
  { name: "BookOpen", icon: <Icon.BookOpen /> },
  { name: "BoundingBox", icon: <Icon.BoundingBox /> },
  { name: "Bus", icon: <Icon.Bus /> },
  { name: "CalendarCheck", icon: <Icon.CalendarCheck /> },
  { name: "Car", icon: <Icon.Car /> },
  { name: "ChalkboardTeacher", icon: <Icon.ChalkboardTeacher /> },
  { name: "ChatCircleText", icon: <Icon.ChatCircleText /> },
  { name: "Clock", icon: <Icon.Clock /> },
  { name: "ClockClockwise", icon: <Icon.ClockClockwise /> },
  { name: "Command", icon: <Icon.Command /> },
  { name: "Cpu", icon: <Icon.Cpu /> },
  { name: "CurrencyDollar", icon: <Icon.CurrencyDollar /> },
  { name: "DesktopTower", icon: <Icon.DesktopTower /> },
  { name: "Database", icon: <Icon.Database /> },
  { name: "FadersHorizontal", icon: <Icon.FadersHorizontal /> },
  { name: "Eye", icon: <Icon.Eye /> },
  { name: "File", icon: <Icon.File /> },
  { name: "FolderUser", icon: <Icon.FolderUser /> },
  { name: "ForkKnife", icon: <Icon.ForkKnife /> },
  { name: "ForkKnife", icon: <Icon.ForkKnife /> },
  { name: "Funnel", icon: <Icon.Funnel /> },
  { name: "Gear", icon: <Icon.Gear /> },
  { name: "GraduationCap", icon: <Icon.GraduationCap /> },
  { name: "Hamburger", icon: <Icon.Hamburger /> },
  { name: "HourglassHigh", icon: <Icon.HourglassHigh /> },
  { name: "IdentificationCard", icon: <Icon.IdentificationCard /> },
  { name: "Person", icon: <Icon.Person /> },
  { name: "PersonSimple", icon: <Icon.PersonSimple /> },
  { name: "PencilLine", icon: <Icon.PencilLine /> },
  { name: "WifiHigh", icon: <Icon.WifiHigh /> },
  { name: "Rss", icon: <Icon.Rss /> },
  { name: "User", icon: <Icon.User /> },
  { name: "Wrench", icon: <Icon.Wrench /> },
]

export const categoryModel = [
  {
  id: "00",
    titleCategory: "Outros",
    name: "Biblioteca 2",
    Icon: "",
    link: "/servicebook/subcategory",
  description: "Quando um serviço é criado mas não se enquadra em nenhuma das outras categorias, essa categoria será atribuída.",
    subcategory: [ {
      requisito: "opcional",
      id: "00",
      titleSubcategory: "Outros",
      description: "Quando uma categoria é criada mas não tem nenhuma outra subcategorias, essa subcategoria será atribuída.",
      category: [ { sendo: " select múltiplo da lista de categorias criadas opcional" } ],
      services: [ { sendo: "select múltiplo da lista de serviços criados opcional" } ],
    }],
  },
  
  {
  id: "",
  titleCategory: "",
  description: "",
  subcategory: [ { sendo: "lista de subcategorias opcional" } ],
  name: "Biblioteca 2",
  Icon: "",
  link: "/servicebook/subcategory",
  },
  
];

export const subcategoryModel = [ {
  id: "",
  titleSubcategory: "",
  description: "",
  category: [ { sendo: "select múltiplo lista de categorias criadas" } ],
  services: [ { sendo: "select múltiplo da lista de serviços criados opcional" } ],
} ];

//lógica: se pra ter acesso a essa carta de serviço eu já tenho que ter validado todas as credencias e nome da pessoa, eu posso pegar o contexto a partir daqui. Mas a questão é que a pessoa pode ver o serviço mas se ela não tiver permissão pra criar o serviço o botão vai ficar desabilitado.

export const serviceLetterModel = [ {
  id: "",
  category: [ { sendo: "pegar o index do array da lista de categorias"} ],
  subcategory: [ { sendo: "pegar o index do array da lista de subcategorias"} ],
  title: [ { sendo: "informado pelo usuário" } ],
  patrimônio: "opcional mas informado pelo usuário se precisa e de qual tipo",
  description:
    "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
  applicantsName: "select múltiplo pra dizer quem (aluno, professor, técnico) pode solicitar o serviço",
  publicoAlvo: "informado pelo usuário",
  tempoDeEspera: "input",

},

];


export const serviceModel = [ {
  id: "",
  category: [ { sendo: "pegar o index do array da lista de categorias"} ],
  subcategory: [ { sendo: "pegar o index do array da lista de subcategorias"} ],
  
  applicantsName: "vai ser o contextUser (usuário logado) da pessoa - pego pelo contexto",
  credentialType: "aluno/servidor/professor/tecnico - pego pelo contexto de usuário",
  title: [ { sendo: "nome do serviço clicado na lista da carta de serviço" } ],
  patrimônio: "arquivo pdf",
  description:
    "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
  serviceLocal: "Bloco A",
},

];

