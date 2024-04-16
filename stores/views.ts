import { defineStore } from "pinia";

export const useViewsStore = defineStore("views", {
  state: () => ({
    isTop: true,
    menuOpened: false,
  }),
});
