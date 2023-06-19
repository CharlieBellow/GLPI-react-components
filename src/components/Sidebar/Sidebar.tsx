import * as Icon from "phosphor-react"
import ufalLogo from "../../../public/images/ufal-sigla-branca-fundo-transparente.png"
import { useContext } from "react";
import SidebarContext from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
function Sidebar({children} :any){

    // TODO adicionar as demais opções no menu

    const { open } = useContext(SidebarContext);

    const Menus = [
        {
            title: 'Dashboard',
            path: '/Dashboard/',
            icon: <Icon.SquaresFour size={32}/>,
        },
        {
            title: 'Perfil',
            icon: <Icon.User size={32}/>,
            children: [
                {
                    title: "Alterar Perfil",
                    dir: "/user/update",
                },
                {
                    title: "Visualizar Perfil",
                    dir: "/user/info/",
                }
            ]
        },
        {
            title: 'Carta de Serviço',
            icon: <Icon.Signpost size={32}/>,
            children: [
                {
                    title: "Catregorias",
                    dir: "/servicebook/",
                },
                {
                    title: "Lista de Categorias (Admin)",
                    dir: "/servicebook/group/creategroup/",
                }
            ]
        },
        {
            title: 'RU',
            icon: <Icon.CookingPot size={32}/>,
            path: "/"
        },
        {
            title: 'Configurações',
            icon: <Icon.SlidersHorizontal size={32}/>,
            path: "/"
            // TODO aqui tem que abrir o modal de configurações 
        },
    ];
    return(
        <div className="flex w-full  justify-center m-auto ">
            <div data-testid="test" className={`${open ? "w-[20rem] shadow-2xl lg:w-48 lg:shadow-none" : "w-0 lg:w-16"} z-40 fixed overflow-x-hidden bg-blue-final-gradient ease-in-out duration-300 before:bg-gradient-to-r before:-z-10 lg:static lg:block lg:overflow-x-visible h-screen  h-auto tv:h-screen`}>
                <div className="flex flex-row w-1/2 lg:w-20 justify-center mb-4">
                    <Image className="mt-4 max-w-[6rem]" src={ufalLogo} alt="logo"/>
                </div>   
                <div className="sticky top-0">
                {Menus.map((item, index) => {
                    return <SidebarItem item={item} key={index}/>
                })} 
                </div>

            </div>       
            <div className="text-2xl font-semibold w-full bg-gray-medium">
                {children}
            </div>
        </div>
    )
}
export default Sidebar;