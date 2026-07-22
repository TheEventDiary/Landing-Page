import { createContext, useContext, useState, useCallback } from "react";

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState(null);

  const openContact = useCallback((ctx = null) => {
    setContext(ctx);
    setOpen(true);
  }, []);

  return (
    <ContactContext.Provider value={{ open, setOpen, openContact, context }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactProvider");
  return ctx;
}
