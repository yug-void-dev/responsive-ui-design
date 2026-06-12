import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { CloseIcon, PhoneIcon, navIconMap } from "../ui/Icons";
import { navLinks } from "../../constants";
import "./MobileDrawer.css";

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
          <Logo dark />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="text-white"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links with icons */}
        <nav className="flex flex-col gap-5 mb-8">
          {navLinks.map((link) => {
            const Icon = navIconMap[link.icon];
            const isActive = link.name === "Home";
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-3 text-[18px] font-medium transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Contact Us button pinned at bottom */}
        <Button
          variant="primary"
          icon={<PhoneIcon className="w-4 h-4" />}
          className="w-full mt-auto"
        >
          Contact Us
        </Button>
      </aside>
    </>
  );
}
