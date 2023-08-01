import { ElementType } from "react";

import { usePathname } from "next/navigation";

import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "phosphor-react";

import { ActiveLink } from "@/components/ActiveLink";

import { cn } from "@/Utils/cn";

type SidebarItemProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  label: string;
  href: string;
  icon?: ElementType;
  subItems?: Array<Omit<SidebarItemProps, "icon" | "isOpen" | "setIsOpen">>;
};

export function SidebarItem({
  label,
  href,
  icon: Icon,
  subItems,
  isOpen,
  setIsOpen,
}: SidebarItemProps) {
  const pathname = usePathname();
  const getFullHrefItem = (
    item: Omit<SidebarItemProps, "icon" | "isOpen" | "setIsOpen">
  ) => `${href}${item.href}`.replace(/\/\//g, "/");

  const hasActiveLinkInSubItems = subItems?.some(
    (item) => getFullHrefItem(item) === pathname
  );

  const onClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="px-4">
      {!subItems && (
        <ActiveLink
          href={href}
          title={label}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg py-2 text-white-100 transition-colors hover:bg-blue-final-gradient data-[active=true]:bg-blue-ufal/70",
            {
              "px-2 justify-center": !isOpen,
              "px-4": isOpen,
            }
          )}
        >
          {Icon && <Icon size={24} className="shrink-0" />}
          <span className={cn("font-medium", isOpen ? "inline" : "hidden")}>
            {label}
          </span>
        </ActiveLink>
      )}

      {subItems && subItems.length > 0 && (
        <Accordion.Item value={label}>
          <Accordion.Trigger
            title={label}
            className={cn(
              "flex w-full items-center gap-3 rounded-md py-2 text-white-100 transition-colors hover:bg-blue-final-gradient group",
              {
                "px-2 justify-center": !isOpen,
                "px-4 justify-between data-[state=open]:rounded-b-none": isOpen,
                "bg-blue-ufal/70": hasActiveLinkInSubItems,
                "data-[state=open]:bg-blue-final-gradient": isOpen,
              }
            )}
            onClick={onClick}
          >
            <span className="flex space-x-2">
              {Icon && <Icon size={24} className="shrink-0" />}
              <span className={cn("font-medium", isOpen ? "inline" : "hidden")}>
                {label}
              </span>
            </span>
            <CaretDown
              className={cn(
                "h-4 w-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform",
                isOpen ? "inline" : "hidden"
              )}
            />
          </Accordion.Trigger>
          <Accordion.Content
            className={cn(
              "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              {
                hidden: !isOpen,
              }
            )}
          >
            <div className="flex flex-col gap-3 rounded-b-md bg-blue-ufal/70">
              {subItems.map((child) => (
                <ActiveLink
                  key={child.href}
                  href={getFullHrefItem(child)}
                  className="inline-block px-4 py-2 font-medium text-white-100 hover:text-white-strong-ice data-[active=true]:text-white-100/70"
                >
                  {child.label}
                </ActiveLink>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      )}
    </div>
  );
}
