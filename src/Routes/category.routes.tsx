//excluir


import React from 'react';
//import { Route, Routes, useParams } from 'react-router-dom';
//import PageSubcategory from '../pages/Subcategory';
import { categoryModel, subcategoryModel, serviceLetterModel, serviceModel } from '../Utils/ServiceModels';
import ServiceByCategory from '../components/ServicesComponent/ServiceByCategory';
import ServicesByCategory from '../pages/privateroutes/ServicesByCategory';
import CreateService from '../pages/privateroutes/CreateService';
import { ServiceLetter } from '../pages/privateroutes/ServiceLetter';

import Link from "next/link"
export function CategoryRoutes () {


  return (
    <>
      {/*<Routes>*/}
        { categoryModel.map( category => {
          return (
            <Link href={ `/servicebook/${ category.titleCategory }` }  />

          );
        }
        ) }
      {/*</Routes>*/}
    </>
  );
}

export function SubcategoryRoutes () {

  const { titleCategory } = useParams();
  return (
    <>
      {/*<Routes>*/}
        { subcategoryModel.map( subcategory => {
          return (
            <Link href={ `/servicebook/${ titleCategory }/${ subcategory.titleSubcategory }` }  />
          );
        } ) }
      {/*</Routes>*/}
    </>
  );
}

export function ServiceByCategoryRoutes () {
  const { titleCategory, titleSubcategory } = useParams();

  return (
    <>
      {/*<Routes>*/}

        { serviceLetterModel.map( serviceLetter => {
          return (
            <Link href={ `/servicebook/${ titleCategory }/:${ titleSubcategory }/${ serviceLetter.title }/${ serviceLetter.id }` } />
          );
        } )

        }

      {/*</Routes>*/}
    </>
  );
}


export function ServiceLetterRoutes () {
  const { titleCategory, titleSubcategory, serviceLetter, idServiceLetter, serviceTitle } = useParams();
  return (
    <>
      {/*<Routes>*/}
        { serviceLetterModel.map( serviceTitle => {
          return (
            <Link href={ `/servicebook/${ titleCategory }/:${ titleSubcategory }/${ serviceLetter }/${ idServiceLetter }/${ serviceTitle.title }/create` } />
          );
        } ) }
      {/*</Routes>*/}
    </>
  );
}


