import { Page } from "../../components/Page";
import {CardServiceLetter} from './CardServiceLetter'

export function ServiceLetter() {
  return ( 
    <Page
      pageTitle={"Carta de Serviço"} contentPage={<CardServiceLetter />}/>
  )
}
