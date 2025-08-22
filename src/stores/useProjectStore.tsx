
import { create } from "zustand";
import { ProjectStore } from "@/types/ProjectType";

const useProjectStore = create<ProjectStore>((set) => ({
    activeProject: null,
    setActiveProject: (project) => set({ activeProject: project }),
}));

export default useProjectStore;