//excluir


import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import PageSubcategory from '../Pages/Subcategory';
import { categoryModel, subcategoryModel, serviceLetterModel, serviceModel } from '../Utils/ServiceModels';
import ServiceByCategory from '../components/ServicesComponent/ServiceByCategory';
import ServicesByCategory from '../Pages/ServicesByCategory';
import CreateService from '../Pages/CreateService';
import { ServiceLetter } from '../Pages/ServiceLetter';

export function CategoryRoutes () {


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

export function SubcategoryRoutes () {

  const { titleCategory } = useParams();
  return (
    <>
      <Routes>
        { subcategoryModel.map( subcategory => {
          return (
            <Route path={ `/servicebook/${ titleCategory }/${ subcategory.titleSubcategory }` } element={ <ServicesByCategory /> } />
          );
        } ) }
      </Routes>
    </>
  );
}

export function ServiceByCategoryRoutes () {
  const { titleCategory, titleSubcategory } = useParams();

  return (
    <>
      <Routes>

        { serviceLetterModel.map( serviceLetter => {
          return (
            <Route path={ `/servicebook/${ titleCategory }/:${ titleSubcategory }/${ serviceLetter.title }/${ serviceLetter.id }` } element={ <ServiceLetter /> } />
          );
        } )

        }

      </Routes>
    </>
  );
}


export function ServiceLetterRoutes () {
  const { titleCategory, titleSubcategory, serviceLetter, idServiceLetter, serviceTitle } = useParams();
  return (
    <>
      <Routes>
        { serviceLetterModel.map( serviceTitle => {
          return (
            <Route path={ `/servicebook/${ titleCategory }/:${ titleSubcategory }/${ serviceLetter }/${ idServiceLetter }/${ serviceTitle.title }/create` } element={ <CreateService /> } />
          );
        } ) }
      </Routes>
    </>
  );
}


