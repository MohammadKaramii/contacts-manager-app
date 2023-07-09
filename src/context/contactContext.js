import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => {},
  contact: {},
  setContacts: () => {},
  setFilteredContacts: () => {},
  filteredContacts: [],
  groups: [],
  // errors: [],
  deleteContact: () => {},
  createContact: () => {},
  contactSearch: () => {},
});
