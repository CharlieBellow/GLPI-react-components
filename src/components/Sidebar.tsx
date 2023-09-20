"use client";

import { CSSProperties, useState } from "react";

import Image from "next/image";

import * as Accordion from "@radix-ui/react-accordion";

import { MenuItem } from "@/components/MenuItem";

import { useMenuStore } from "@/hooks/useMenuStore";

import { cn } from "@/Utils/cn";
import { routes } from "@/Utils/routes";

export function Sidebar() {
  const [accordionValue, setAccordionValue] = useState("");
  const { isOpen, setIsOpen } = useMenuStore();
  const styles = { "--position-bg": "to bottom" } as CSSProperties;

  return (
    <aside
      className={cn(
        "w-full bg-gradient-sidebar transition-all hidden md:block duration-300 shrink-0",
        isOpen ? "max-w-[280px]" : "max-w-[80px]"
      )}
      style={styles}
    >
      <nav className="flex h-full flex-col">
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
            className="flex flex-col gap-4 px-4"
          >
            {routes.map((route) => (
              <MenuItem
                key={route.href}
                {...route}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ))}
          </Accordion.Root>
        </div>
      </nav>
    </aside>
  );
}
