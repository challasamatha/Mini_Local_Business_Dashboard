import { create } from "zustand";

const useBusinessStore = create((set) => ({
  formInput: { name: "", location: "" },
  businessData: null,
  loading: false,

  setFormInput: (input) => set({ formInput: input }),
  setBusinessData: (data) => set({ businessData: data }),
  setLoading: (value) => set({ loading: value }),
}));

export default useBusinessStore;
