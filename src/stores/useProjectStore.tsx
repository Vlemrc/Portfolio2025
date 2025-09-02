import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProjectStore } from "@/types/ProjectType";

const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      activeProject: null,
      setActiveProject: (project) => set({ activeProject: project }),
    }),
    {
      name: "project-storage", 
      storage: {
        getItem: (name) => {
          const value = sessionStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    }
  )
);

export default useProjectStore;
