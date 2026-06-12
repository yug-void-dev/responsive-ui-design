import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { HamburgerIcon, PhoneIcon } from "../ui/Icons";
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
          <Button variant="primary" icon={<PhoneIcon className="w-4 h-4" />}>
            Contact Us
          </Button>
        ) : (
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            className="text-[#1A1A2E]"
          >
            <HamburgerIcon className="w-6 h-6" />
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
