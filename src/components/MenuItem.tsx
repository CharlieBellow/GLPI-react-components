import { ElementType } from "react";

import { usePathname } from "next/navigation";

import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "phosphor-react";

import { ActiveLink } from "@/components/ActiveLink";

import { cn } from "@/Utils/cn";

type MenuItemProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  label: string;
  href: string;
  icon?: ElementType;
  subItems?: Array<Omit<MenuItemProps, "icon" | "isOpen" | "setIsOpen">>;
};

export function MenuItem({
  label,
  href,
  icon: Icon,
  subItems,
  isOpen,
  setIsOpen,
}: MenuItemProps) {
  const pathname = usePathname();
  const getFullHrefItem = (
    item: Omit<MenuItemProps, "icon" | "isOpen" | "setIsOpen">
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
    <div>
      {!subItems && (
        <ActiveLink
          href={href}
          title={label}
          className={({ isActive }) =>
            cn(
              "flex w-full items-center gap-3 rounded-lg py-2 text-white-100 transition-colors hover:bg-blue-final-gradient",
              {
                "px-2 justify-center": !isOpen,
                "px-4": isOpen,
                "bg-primary-blue/70 pointer-events-none": isActive,
              }
            )
          }
        >
          {Icon && <Icon size={28} className="shrink-0" />}
          <span
            className={cn(
              "font-medium text-base/3",
              isOpen ? "inline" : "hidden"
            )}
          >
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
                "bg-primary-blue/70": hasActiveLinkInSubItems,
                "data-[state=open]:bg-blue-final-gradient": isOpen,
              }
            )}
            onClick={onClick}
          >
            <span className="flex items-center gap-3">
              {Icon && <Icon size={28} className="shrink-0" />}
              <span
                className={cn(
                  "font-medium text-base/3",
                  isOpen ? "inline" : "hidden"
                )}
              >
                {label}
              </span>
            </span>
            <CaretDown
              className={cn(
                "h-5 w-5 shrink-0 group-data-[state=open]:rotate-180 transition-transform",
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
            <div className="flex flex-col gap-3 rounded-b-md bg-blue-ufal/70 p-1">
              {subItems.map((child) => (
                <ActiveLink
                  key={child.href}
                  href={getFullHrefItem(child)}
                  className={({ isActive }) =>
                    cn(
                      "inline-block px-4 py-2 font-medium hover:text-white-strong-ice hover:underline",
                      {
                        "text-white-100": !isActive,
                        "text-white-100/70 pointer-events-none": isActive,
                      }
                    )
                  }
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
