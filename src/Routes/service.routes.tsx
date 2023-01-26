import { Routes, Route } from "react-router-dom";
import { CategoryProvider } from "../Contexts/CategoryContext";
import { ServiceProvider } from "../Contexts/ServiceContext";
import { ServiceLetterProvider } from "../Contexts/ServiceLetterContext";
import { SubcategoryProvider } from "../Contexts/SubcategoryContext";
import AddCategory from "../Pages/AddCategory";
import AddSubcategory from "../Pages/AddSubcategory";
import CreateService from "../Pages/CreateService";
import PageCategoriaHome from "../Pages/PageCategoriaHome";
import PageSubcategory from "../Pages/PageSubcategory";
import { ServiceLetter } from "../Pages/ServiceLetter";
import ServicesByCategory from "../Pages/ServicesByCategory";
import ServicesPage from "../Pages/ServicesPage";


export function ServiceRoutes () {
  return (
    <ServiceProvider>
      <ServiceLetterProvider>
          <SubcategoryProvider>
        <CategoryProvider>
            
      <Routes>
        <Route path="/service/letter" element={ <ServiceLetter /> } />
        <Route path="/service/create" element={ <CreateService /> } />
        <Route path="/service/list" element={ <ServicesPage /> } />

        <Route
          path="/servicebook/category"
          element={ <PageCategoriaHome /> }
          />
        <Route
          path="/servicebook/subcategory"
          element={ <PageSubcategory /> }
          />
        <Route
          path="/servicebook/service"
          element={ <ServicesByCategory /> }
          />
        <Route
          path="/servicebook/category/create"
          element={ <AddCategory /> }
          />
        <Route
          path="/servicebook/subcategory/create"
          element={ <AddSubcategory /> }
          />
      </Routes>

          </CategoryProvider>
            </SubcategoryProvider>
        </ServiceLetterProvider>
    </ServiceProvider>

  );
}