import { Page } from "../../../components/Page";
import GroupList from "../../../components/GroupList";

export default function Servicebook () {
  return <Page pagetitle={ "Categorias" } contentpage={ <GroupList /> } />;
}