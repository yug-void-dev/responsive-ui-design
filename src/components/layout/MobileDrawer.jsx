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
      {/* Dark overlay behind the drawer */}
      <div
        className={`drawer-overlay ${isOpen ? "drawer-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`drawer-panel ${isOpen ? "drawer-panel--open" : ""}`}
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
      >
        {/* Header: Logo + Close button */}
        <div className="flex items-center justify-between mb-8">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-[#1a1a2e] hover:text-primary transition-colors cursor-pointer"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links with icons */}
        <nav className="flex flex-col gap-5 mb-8">
          {navLinks.map((link) => {
            const iconSrc = navIconMap[link.icon];
            const isActive = link.name === "Home";
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 text-[18px] font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-[#1a1a2e] hover:text-primary"
                }`}
              >
                <img
                  src={iconSrc}
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact Us button pinned at bottom */}
        <Button
          variant="primary"
          icon={
            <img
              src="/assets/icons/Contact-icon.png"
              alt=""
              className="w-4 h-4 object-contain brightness-0 invert"
            />
          }
          className="w-full mt-auto"
        >
          Contact Us
        </Button>
      </aside>
    </>
  );
}
