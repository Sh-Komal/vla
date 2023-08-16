import React, { useState, useContext } from "react";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const [isSupportModalOpen, setSupportModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isTrackOrderModalOpen, setTrackOrderModalOpen] = useState(false);

  const openSupportModal = () => setSupportModalOpen(true);
  const closeSupportModal = () => setSupportModalOpen(false);

  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  const openTrackOrderModal = () => setTrackOrderModalOpen(true);
  const closeTrackOrderModal = () => setTrackOrderModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isSupportModalOpen,
        openSupportModal,
        closeSupportModal,
        isSignInModalOpen,
        openSignInModal,
        closeSignInModal,
        isTrackOrderModalOpen,
        openTrackOrderModal,
        closeTrackOrderModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
