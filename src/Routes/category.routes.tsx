
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import PageSubcategory from '../Pages/PageSubcategory';
import { categoryModel } from '../Utils/ServiceModels';

export  function CategoryRoutes () {
  
  
  return (
    <>
        <Routes>
      { categoryModel.map( category => {
        return (
          <Route path={ `/servicebook/${ category.titleCategory }` } element={ <PageSubcategory /> } />

          );
        }
        ) }
        </Routes>
        </>
  );
}
 


