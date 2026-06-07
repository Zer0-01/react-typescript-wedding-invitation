"use client";

import { createContext, useContext } from "react";

type OpeningOverlayContextValue = {
  isInvitationRevealed: boolean;
};

const OpeningOverlayContext = createContext<OpeningOverlayContextValue>({
  isInvitationRevealed: false,
});

export function OpeningOverlayProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: OpeningOverlayContextValue;
}) {
  return (
    <OpeningOverlayContext.Provider value={value}>
      {children}
    </OpeningOverlayContext.Provider>
  );
}

export function useOpeningOverlay() {
  return useContext(OpeningOverlayContext);
}
