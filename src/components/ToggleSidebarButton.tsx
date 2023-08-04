"use client";

import { List, X } from "@/components/icons";

import { useMenuStore } from "@/hooks/useMenuStore";

export default function ToggleSidebarButton() {
  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <button
      type="button"
      className="hidden md:inline-block"
      onClick={toggleMenu}
    >
      {isOpen ? <X size={32} /> : <List size={32} />}
    </button>
  );
}
