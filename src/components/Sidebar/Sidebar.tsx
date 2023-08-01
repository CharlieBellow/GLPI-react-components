"use client";

import { CSSProperties, useState } from "react";

import Image from "next/image";

import * as Accordion from "@radix-ui/react-accordion";
import * as Icon from "phosphor-react";

import { useMenuStore } from "@/hooks/useMenuStore";

import { cn } from "@/Utils/cn";

import { SidebarItem } from "./SidebarItem";

export default function Sidebar() {
  const [accordionValue, setAccordionValue] = useState("");
  const { isOpen, setIsOpen } = useMenuStore();
  const styles = { "--position-bg": "to bottom" } as CSSProperties;

  return (
    <aside
      className={cn(
        "w-full bg-gradient transition-all hidden md:block duration-300",
        isOpen ? "max-w-[280px]" : "max-w-[80px]"
      )}
      style={styles}
    >
      <div className="flex h-full flex-col">
        <div
          className={cn(
            "overflow-hidden py-4 h-[10rem] flex justify-center items-center",
            isOpen ? "w-full" : "w-[80px]"
          )}
        >
          <div
            className={cn("relative overflow-hidden", {
              "w-full h-24": !isOpen,
              "w-28 h-28": isOpen,
            })}
          >
            <Image
              className="max-w-full object-cover"
              src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
              alt="logo"
              fill
            />
          </div>
        </div>
        <div className="flex-1">
          <Accordion.Root
            type="single"
            collapsible
            value={isOpen ? accordionValue : undefined}
            onValueChange={setAccordionValue}
            className="flex flex-col gap-4"
          >
            <SidebarItem
              href="/"
              label="Home"
              icon={Icon.House}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              href="/"
              label="Dashboard"
              icon={Icon.SquaresFour}
              subItems={[
                {
                  href: "/Dashboard",
                  label: "Create Group",
                },
              ]}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              href="/servicebook"
              label="Carta de Serviço"
              icon={Icon.Signpost}
              subItems={[
                {
                  href: "/group/create",
                  label: "Criar grupo",
                },
              ]}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </Accordion.Root>
        </div>
      </div>
    </aside>
  );
}
