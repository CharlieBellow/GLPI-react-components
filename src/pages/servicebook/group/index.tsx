import { Page } from "../../../components/Page";
import GroupList from "../../../components/GroupList";
import { ServiceContext } from "../../../Contexts/ServiceContext";



export default function CategoryHome () {
  return <Page pagetitle={ "" } >
    <GroupList />
  </Page>;
}