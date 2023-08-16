import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext();

const ModalContainer = ({ children }) => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isTrackOrderModalOpen, setIsTrackOrderModalOpen] = useState(false);
  

  const openSupportModal = () => {
    setIsSupportModalOpen(true);
  };

  const closeSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };
  const openTrackOrderModal = () => {
    setIsTrackOrderModalOpen(true);
  };

  const closeTrackOrderModal = () => {
    setIsTrackOrderModalOpen(false);
  };
  

  

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
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalContainer");
  }
  return context;
};

export { ModalContainer, useModalContext };