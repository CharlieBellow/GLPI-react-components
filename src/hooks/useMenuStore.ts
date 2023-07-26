import { create } from "zustand";

type MenuStore = {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
  toggleMenu: () => void;
};

export const useMenuStore = create<MenuStore>((set, get) => ({
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  toggleMenu: () => set({ isOpen: !get().isOpen }),
}));
