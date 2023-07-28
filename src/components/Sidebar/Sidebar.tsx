"use client";

import * as Icon from "phosphor-react";
import SidebarItem from "./SidebarItem";
import Image from "next/image";
import { useMenuStore } from "@/hooks/useMenuStore";

function Sidebar({ children }: { children: React.ReactNode }) {
  const { isOpen } = useMenuStore();

  const Menus = [
    {
      title: "Dashboard",
      path: "/Dashboard/",
      icon: <Icon.SquaresFour size={32} />,
    },
    {
      title: "Perfil",
      icon: <Icon.User size={32} />,
      children: [
        {
          title: "Alterar Perfil",
          dir: "/user/update",
        },
        {
          title: "Visualizar Perfil",
          dir: "/user/info/",
        },
      ],
    },
    {
      title: "Carta de Serviço",
      icon: <Icon.Signpost size={32} />,
      children: [
        {
          title: "Catregorias",
          dir: "/servicebook/",
        },
        {
          title: "Lista de Categorias (Admin)",
          dir: "/servicebook/group/creategroup/",
        },
      ],
    },
    {
      title: "RU",
      icon: <Icon.CookingPot size={32} />,
      path: "/",
    },
    {
      title: "Configurações",
      icon: <Icon.SlidersHorizontal size={32} />,
      path: "/",
      // TODO aqui tem que abrir o modal de configurações
    },
  ];
  return (
    <div className="m-auto flex  w-full justify-center ">
      <div
        data-testid="test"
        className={`${
          open ? "w-[20rem] shadow-2xl lg:w-48 lg:shadow-none" : "w-0 lg:w-16"
        } fixed z-40 h-auto h-screen overflow-x-hidden bg-blue-final-gradient duration-300 ease-in-out before:-z-10 before:bg-gradient-to-r lg:static lg:block  lg:overflow-x-visible tv:h-screen`}
      >
        <div className="mb-4 flex w-1/2 flex-row justify-center lg:w-20">
          <Image className="mt-4 max-w-[6rem]" src={ufalLogo} alt="logo" />
        </div>
        <div className="sticky top-0">
          {Menus.map((item, index) => {
            return <SidebarItem item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="w-full bg-gray-medium text-2xl font-semibold">
        {children}
      </div>
    </div>
  );
}
export default Sidebar;
