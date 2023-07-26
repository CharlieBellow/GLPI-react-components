import { Gear, Question, User, WarningCircle } from "@/components/icons";
//import { Link } from "react-router-dom";

export function AccordionMenuHelp() {
  return (
    <>
      <div className=" flex w-full content-between items-center">
        <div className=" mx-0 my-2 flex w-full flex-row content-start items-center text-sm font-semibold text-white-100 hover:text-blue-dark-final-gradient  lg:my-3">
          <Gear size={20} className=" stroke-white-100" />
          {/*<Link to="/Teste">*/}
          <p className="text-hidden ml-2">Configurações</p>
          {/*</Link>*/}
        </div>
      </div>

      <div className="flex w-full content-between items-center">
        {/*<Link to="/SignUp">*/}
        <div className="mx-0 my-2 mr-2 flex w-full flex-row content-start items-center text-sm font-semibold text-white-100 hover:text-blue-dark-final-gradient lg:my-3">
          <User size={20} className="mr-2 stroke-white-100" />
          <p className="text-hidden">Perfil</p>
        </div>
        {/*</Link>*/}
      </div>

      <div className="flex w-full content-between items-center">
        {/*<Link to="/PageCategoriaHome">*/}
        <div className="mx-0 my-2 mr-2 flex w-full flex-row content-start items-center text-sm font-semibold text-white-100 hover:text-blue-dark-final-gradient lg:my-3">
          <Question size={20} className="mr-2" />
          <p className="text-hidden">Sobre</p>
        </div>
        {/*</Link>*/}
      </div>

      <div className="flex w-full content-between items-center">
        {/*<Link to="/Pages">*/}
        <div className="mx-0 my-2 mr-2 flex w-full flex-row content-start items-center text-sm font-semibold text-white-100 hover:text-blue-dark-final-gradient lg:my-3">
          <WarningCircle size={20} className="mr-2 stroke-white-100" />
          <p className="text-hidden">Ajuda</p>
        </div>
        {/*</Link>*/}
      </div>
    </>
  );
}
