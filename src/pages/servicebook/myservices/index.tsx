
import { Page } from "../../../components/Page";
import ServicesOrder from "../../../components/ServicesComponent/ServicesOrder";


export default function MyServices() {

  return (
    <Page pagetitle="Meus Serviços">

      <div className="m-8">
        <ServicesOrder />
      </div>
    </Page>
  )
}