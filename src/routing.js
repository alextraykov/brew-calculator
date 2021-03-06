import React, { useMemo, useState, createContext } from "react";

export const pagesMapping = {
  home: "home",
  about: "about",
};

export const RoutingContext = createContext({ page: pagesMapping.home });

export default function FancyAFRouter({ children }) {
  const [page, setPage] = useState(pagesMapping.home);

  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
