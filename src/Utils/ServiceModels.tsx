
import React from 'react'
import * as Icon from 'phosphor-react'

const sizeIcon = 27
const classIcon = ""

export const categoryIcons = [
  { name: "Plus", icon: <Icon.Plus /> },
  { name: "DotsThreeVertical", icon: <Icon.DotsThreeVertical /> },
  { name: "AddressBook", icon: <Icon.DotsThreeVertical /> },
  { name: "Archive", icon: <Icon.Archive size={ sizeIcon } className={ classIcon } /> },
  { name: "Archive", icon: <Icon.Archive /> },
  { name: "Asterisk", icon: <Icon.Asterisk size={ sizeIcon } className={ classIcon } /> },
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
    icon: categoryIcons[3].icon,
    link: "/servicebook/:titleCategory/:titleSubcategory",
  description: "Quando um serviço é criado mas não se enquadra em nenhuma das outras categorias, essa categoria será atribuída.",
  },
  {
  id: "01",
    titleCategory: "NTI",
    icon: categoryIcons[5].icon,
    link: "/servicebook/:titleCategory/:titleSubcategory",
  description: "Quando um serviço é criado mas não se enquadra em nenhuma das outras categorias, essa categoria será atribuída.",
  },
  
];


export const subcategoryModel = [
  {
  id: "02",
  titleSubcategory: "Redes",
  description: "",
  category: categoryModel[0],
  }
];


export const serviceLetterModel = [ {
  id: "005",
  category: categoryModel[0],
  subcategory: subcategoryModel[0],
  title: "titulo do serviço clicado na lista de subcategorias",
  patrimonio: "opcional mas informado pelo usuário se precisa e de qual tipo",
  description:
    "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
  applicantsName: "select múltiplo pra dizer quem (aluno, professor, técnico) pode solicitar o serviço",
  publicoAlvo: "informado pelo usuário",
  tempoDeEspera: "input",

},

];

export const serviceModel = [
  {
    id: "service01",
    serviceLocal: "Bloco A",
    description:
      "Infelizmente não dá pra gente ganhar todas, mas perder todas aparentemente dá sim.",
    serviceLetter: serviceLetterModel[0],
    patrimonio: "se obrigatorio (verificado em serviceLetterModel[0].patrimonio (booleano) então será exibido o input para adicionar arquivo)",
  },
];