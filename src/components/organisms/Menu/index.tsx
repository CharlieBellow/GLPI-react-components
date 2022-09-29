import React from 'react';
import { FaUser, FaChevronDown, FaTools, FaListUl, FaExclamationCircle } from 'react-icons/fa'
import { GrConfigure } from 'react-icons/gr'
import { FiGrid, FiSettings, FiAlertCircle } from "react-icons/fi";

//import '../../Styles/base.css';
//import '../../Styles/menu.css';
import logoUfal from '../../../assets/brasao-ufal.png'



function Menu() {
  return (
    <>
      <div className="menu h-screen bg-azulFinalGradiente w-[13.375rem] m-0 z-10 fixed">

        <img src={logoUfal} alt="logo da ufal" className="menu__logo w-[3.438rem] h-24 m-[1.625rem] bg-brasaoUfal" /> 

          <div className="menu__geral">
            <h4 className="menu__titleSection">Geral</h4>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FiGrid size={20} className="menu__icon"/>
                Dashboard
              </p>
              <FaChevronDown 
              className="menu__icon-chevron"/>
            </div>
          
            <div className="menu__itemOption">
              <p className="menu__item">
                <FaUser size={20} className="menu__icon"/>
                Perfil
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FaTools size={20} className="menu__icon"/>
                Administração de setores
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

            <div className="menu__itemOption">
              <p className="menu__item">
                <GrConfigure size={20} className="menu__icon"/>
                Configuração
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FaListUl size={20} className="menu__icon"/>
                Listas
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

          </div>


          <div className="menu__help">
            <h4 className="menu__titleSection">Ajuda</h4>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FiSettings size={20} className="menu__icon"/>
                Configurações
              </p>
              <FaChevronDown 
              className="menu__icon-chevron"/>
            </div>
          
            <div className="menu__itemOption">
              <p className="menu__item">
                <FaUser size={20} className="menu__icon"/>
                Perfil
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FaExclamationCircle size={20} className="menu__icon"/>
                Sobre
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

            <div className="menu__itemOption">
              <p className="menu__item">
                <FiAlertCircle size={20} className="menu__icon"/>
                Ajuda
              </p>
              <FaChevronDown className="menu__icon-chevron"/>
            </div>

          </div>

      </div>
    </>
  )
}

export default Menu;