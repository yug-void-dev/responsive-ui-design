import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  icon = null,
  className = "",
  ...rest
}) {
  const variantClass = variant === "outline" ? "btn-outline" : "btn-primary";

  return (
    <button className={`btn ${variantClass} ${className}`} {...rest}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
