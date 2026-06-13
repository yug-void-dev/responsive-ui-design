import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileDrawer from "./MobileDrawer";
import "./Navbar.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        {isDesktop && (
          <nav className="navbar__links">
            {navLinks.map((link) => {
              const isActive = link.name === "Home";
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`navbar__link ${
                    isActive ? "navbar__link--active" : ""
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}

        {/* Right side: Contact Us (desktop) or Hamburger (tablet/mobile) */}
        {isDesktop ? (
          <Button
            variant="primary"
            icon={
              <img
                src="/assets/icons/Contact-icon.png"
                alt=""
                className="w-4 h-4 object-contain brightness-0 invert"
              />
            }
          >
            Contact Us
          </Button>
        ) : (
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            className="text-[#1A1A2E] cursor-pointer"
          >
            <img
              src="/assets/icons/Menu.png"
              alt="Menu"
              className="w-6 h-6 object-contain"
            />
          </button>
        )}
      </div>

      {/* Slide-out drawer for tablet/mobile */}
      {!isDesktop && (
        <MobileDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </header>
  );
}
