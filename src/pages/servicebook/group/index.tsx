import { Page } from "../../../components/Page";
import GroupList from "../../../components/GroupList";
import { ServiceContext } from "../../../Contexts/ServiceContext";
import GroupList from "../../../components/GroupList";



export default function CategoryHome () {
  return <Page pagetitle={ "" } >
    <GroupList />
  </Page>;
}