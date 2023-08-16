import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaPhone,
  FaShippingFast,
  FaFileAlt,
  FaShoppingCart,
} from "react-icons/fa";
import Modal from "react-modal";
import { useModalContext } from "../../hooks/ModalCotext";
import { useCartContext } from "../../cart/cartContext";
import Support from "../models/Support";
import SignIn from "../models/SignIn";
import TrackOrder from "../models/TrackOrder";
import Cart from "../../cart/Cart";

const Topbar = () => {
  const {
    isSupportModalOpen,
    openSupportModal,
    closeSupportModal,
    isSignInModalOpen,
    openSignInModal,
    closeSignInModal,
    isTrackOrderModalOpen,
    openTrackOrderModal,
    closeTrackOrderModal,
  } = useModalContext();
  const { cartItems } = useCartContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  return (
    <>
      <div className="top-bar bg-white text-sky-900 px-7 py-3 flex items-center justify-between shadow-md">
        {isMobileMenuOpen ? (
          <></>
        ) : (
          <div className="lg:hidden">
            <button
              className="text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              ☰
            </button>
          </div>
        )}

        <div
          className={`${
            isMobileMenuOpen ? "hidden" : "block"
          } lg:flex items-center text-center flex-1`}
        >
          <span className="text-xl text-sky-900 mr-2">
            TOLL FREE NUMBER : +91 888-888-888
          </span>
        </div>

        {/* Mobile menu */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden text-center flex-grow`}
        >
          <li>
            <span
              onClick={openSignInModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaUserCircle className="text-2xl" />
              <span className="ml-2">Sign In</span>
            </span>
          </li>
          <li>
            <span
              onClick={openSupportModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaPhone className="text-2xl" />
              <span className="ml-2">Support</span>
            </span>
          </li>
          <li>
            <span
              onClick={openTrackOrderModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaShippingFast className="text-2xl" />
              <span className="ml-2">Track Your Order</span>
            </span>
          </li>
          <li>
            <Link
              to="/getquote"
              onClick={closeMobileMenu}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaFileAlt className="text-2xl" />
              <span className="ml-2">Get a Quote</span>
            </Link>
          </li>
          <li>
            <button
              onClick={openCartModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaShoppingCart className="text-2xl" />
              <span className="ml-2">My Cart</span>
            </button>
          </li>
          <li className="absolute top-0 right-0 mr-4 mt-4">
            <button
              className="text-2xl"
              onClick={closeMobileMenu}
              aria-label="Close Mobile Menu"
            >
              ×
            </button>
          </li>
        </ul>

        {/* Desktop menu */}
        <ul className={`hidden lg:flex lg:space-x-4 lg:items-center`}>
          <li>
            <span
              onClick={openSignInModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaUserCircle className="text-2xl" />
              <span className="ml-2">Sign In</span>
            </span>
          </li>
          <li>
            <span
              onClick={openSupportModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaPhone className="text-2xl" />
              <span className="ml-2">Support</span>
            </span>
          </li>
          <li>
            <span
              onClick={openTrackOrderModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaShippingFast className="text-2xl" />
              <span className="ml-2">Track Your Order</span>
            </span>
          </li>
          <li className="ml-auto"> {/* This class will align the item to the right */}
            <Link to="/getquote" className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200">
              <FaFileAlt className="text-2xl" />
              <span className="ml-2">Get a Quote</span>
            </Link>
          </li>
          <li>
            <button
              onClick={openCartModal}
              className="cursor-pointer flex items-center py-2 px-4 border-l border-gray-200"
            >
              <FaShoppingCart className="text-2xl" />
              <span className="ml-2">My Cart</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isSupportModalOpen}
        onRequestClose={closeSupportModal}
        className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        overlayClassName="overlay"
        contentLabel="Contact Support Modal"
      >
        <Support closeModal={closeSupportModal} />
      </Modal>
      <Modal
        isOpen={isSignInModalOpen}
        onRequestClose={closeSignInModal}
        className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        overlayClassName="overlay"
        contentLabel="Sign-In Modal"
      >
        <SignIn closeModal={closeSignInModal} />
      </Modal>

      {/* Add modal for TrackOrder */}
      <Modal
        isOpen={isTrackOrderModalOpen}
        onRequestClose={closeTrackOrderModal}
        className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        overlayClassName="overlay"
        contentLabel="Track Order Modal"
      >
        <TrackOrder closeModal={closeTrackOrderModal} />
      </Modal>
      <Modal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
        overlayClassName="overlay"
        contentLabel="Cart Modal"
      >
        <Cart closeCart={closeCartModal} />
      </Modal>
      
      {/* Render Cart directly if it's open */}
      {isCartModalOpen && <Cart closeCartModal={closeCartModal} />}
    </>
  );
};

export default Topbar;