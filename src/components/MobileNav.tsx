"use client";

import { CSSProperties, useState } from "react";

import Image from "next/image";

import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";

import { List, X } from "@/components/icons";
import { MenuItem } from "@/components/MenuItem";

import { cn } from "@/Utils/cn";
import { routes } from "@/Utils/routes";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const styles = { "--position-bg": "45deg" } as CSSProperties;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="md:hidden">
        <List size={32} />
      </Dialog.Trigger>
      <Dialog.DialogPortal>
        <Dialog.DialogOverlay className="fixed inset-0 z-50 bg-[#000]/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.DialogContent asChild>
          <aside
            className={cn(
              "fixed inset-y-0 z-50 duration-200 bg-gradient px-4 py-6 w-full sm:max-w-xs data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left"
            )}
            style={styles}
          >
            <nav className="flex h-full flex-col gap-8 overflow-y-auto">
              <div className="flex items-center justify-between">
                <div className="relative h-28 w-28">
                  <Image
                    src="/images/ufal-sigla-branca-fundo-transparente-40por-cento.png"
                    alt="brasão UFAL"
                    fill
                    className="-ml-4 block"
                  />
                </div>
                <Dialog.DialogClose
                  type="button"
                  className="h-8 w-8 shrink-0 rounded-md p-1 text-white-100"
                  aria-label="fechar menu"
                >
                  <X className="h-6 w-6" />
                </Dialog.DialogClose>
              </div>

              <ul className="flex-1 overflow-y-auto">
                <Accordion.Root
                  type="single"
                  collapsible
                  className="flex flex-col gap-4"
                >
                  {routes.map((route) => (
                    <MenuItem
                      key={route.href}
                      {...route}
                      isOpen={open}
                      setIsOpen={setOpen}
                    />
                  ))}
                </Accordion.Root>
              </ul>
            </nav>
          </aside>
        </Dialog.DialogContent>
      </Dialog.DialogPortal>
    </Dialog.Root>
  );
}
