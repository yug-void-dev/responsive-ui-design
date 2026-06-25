import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import MobileDrawer from "./MobileDrawer";
import "./Navbar.css";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Logo />

        {isDesktop && (
          <nav className="navbar__links">
            {navLinks.map((link) => {
              const isActive = link.name === "Home";
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        )}

        {isDesktop ? (
          <Button
            variant="primary"
            icon={
              <img
                src="/assets/icons/Contact-icon.png"
                alt=""
                className="navbar__contact-icon"
              />
            }
          >
            Contact Us
          </Button>
        ) : (
          <button
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            className="navbar__hamburger"
          >
            <img
              src="/assets/icons/Menu.png"
              alt="Menu"
              className="navbar__hamburger-icon"
            />
          </button>
        )}
      </div>

      {!isDesktop && (
        <MobileDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      )}
    </header>
  );
}
