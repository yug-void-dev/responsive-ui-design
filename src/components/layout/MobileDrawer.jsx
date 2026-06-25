import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { CloseIcon } from "../ui/Icons";
import { navLinks } from "../../constants";
import "./MobileDrawer.css";

const navIconMap = {
  home: "/assets/icons/Home.png",
  about: "/assets/icons/AboutUs.png",
  services: "/assets/icons/Our Services.png",
  pricing: "/assets/icons/Pricing.png",
  faq: "/assets/icons/FAQ.png",
  contact: "/assets/icons/Contact.png",
};

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "drawer-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`drawer-panel ${isOpen ? "drawer-panel--open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="drawer-close-btn"
          >
            <CloseIcon className="drawer-close-icon" />
          </button>
        </div>

        <nav className="drawer-nav">
          {navLinks.map((link) => {
            const iconSrc = navIconMap[link.icon];
            const isActive = link.name === "Home";
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`drawer-link ${isActive ? "drawer-link--active" : ""}`}
              >
                {iconSrc && (
                  <img
                    src={iconSrc}
                    alt=""
                    className="drawer-link-icon"
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="drawer-footer">
          <Button
            variant="primary"
            icon={
              <img
                src="/assets/icons/Contact-icon.png"
                alt=""
                className="drawer-contact-icon"
              />
            }
            className="drawer-contact-btn"
          >
            Contact Us
          </Button>
        </div>
      </aside>
    </>
  );
}
