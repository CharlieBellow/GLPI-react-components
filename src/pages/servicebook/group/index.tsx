import { Page } from "../../../components/Page";
import { ServiceContext } from "../../../Contexts/ServiceContext";
import GroupList from "../../../components/GroupList";



export default function CategoryHome () {
  return <Page pagetitle={ "" } contentpage={
  
    
      <GroupList />
    
  } />;
}