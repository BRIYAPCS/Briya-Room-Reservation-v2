// CSS
import "../css/cards.css";

/*
  Reusable Card Component
  ----------------------------------------------------
  Used across:
  - HomePage (Sites)
  - RoomsPage (Rooms)
  - Future pages

  Props:
  - image (string)      : image URL/path
  - label (string)      : main label text
  - capacity (number|string|null) : optional capacity shown like "(25)"
  - onClick (function)  : click handler
  - variant (string)    : "home" | "rooms" (controls sizing)
*/

function Cards({ image, label, capacity, onClick, variant = "home" }) {
  // ------------------------------------------------------
  // Build label text:
  // - If capacity is defined (including 0), display it.
  // - If capacity is null/undefined, display only label.
  // ------------------------------------------------------
  const showCapacity = capacity !== undefined && capacity !== null && capacity !== "";
  const labelText = showCapacity ? `${label} (${capacity})` : label;

  // ------------------------------------------------------
  // Keyboard accessibility:
  // - Enter/Space triggers click
  // - tabIndex makes the card focusable
  // ------------------------------------------------------
  const handleKeyDown = (e) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`card card--${variant}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={labelText}
    >
      <img src={image} alt={label} className="card__image" />
      <div className="card__label">{labelText}</div>
    </div>
  );
}

export default Cards;