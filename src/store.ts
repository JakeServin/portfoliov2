import { MutableRefObject } from "react";
import { create } from "zustand";

type Store = {
	homeRef: MutableRefObject<HTMLElement | null> | null;
	aboutRef: MutableRefObject<HTMLElement | null> | null;
	skillsRef: MutableRefObject<HTMLElement | null> | null;
	projectsRef: MutableRefObject<HTMLElement | null> | null;
	contactRef: MutableRefObject<HTMLElement | null> | null;
	setRef: (
		refName: string,
		ref: MutableRefObject<HTMLElement | null>
	) => void;
};
 
export const useStore = create<Store>()((set) => ({
  homeRef: null,
  aboutRef: null,
  skillsRef: null,
  projectsRef: null,
  contactRef: null,
  setRef: (refName, ref) => set((state) => ({[refName]: ref})),
}));


