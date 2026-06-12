import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  icon = null,
  className = "",
  ...rest
}) {
  const base =
    "btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[18px] font-medium transition-colors duration-200";

  const variants = {
    primary: "btn-primary bg-primary text-white border border-primary",
    outline: "btn-outline bg-white text-primary border border-primary",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
