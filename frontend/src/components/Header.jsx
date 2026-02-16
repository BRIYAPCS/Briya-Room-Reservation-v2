// =============================================================================
// Header.jsx — GLOBAL BRAND HEADER (Flexible + Logo-Only Mode)
// =============================================================================

/*
  PURPOSE
  ---------------------------------------------------------------------------
  Central header used across the Briya Room Reservation system.

  Supports:
  - Logo visibility control
  - Main title (H1)
  - Dynamic subtitle (H2)
  - Logo-only mode (for Reservations page)
  - Conditional rendering (no empty spacing when elements hidden)

  PROPS
  ---------------------------------------------------------------------------
  logoOnly      : boolean (default false)
  showLogo      : boolean (default true)
  showTitle     : boolean (default true)
  showSubtitle  : boolean (default true)
  title         : string (optional)
  subtitle      : string (optional)

  RULES
  ---------------------------------------------------------------------------
  - If logoOnly = true, we force-hide Title + Subtitle.
  - If subtitle is empty/undefined, we do not render it (no gap).
*/

import "../css/header.css";

function Header({
  logoOnly = false,

  showLogo = true,
  showTitle = true,
  showSubtitle = true,

  title,
  subtitle,
}) {
  // ------------------------------------------------------
  // Enforce “logo only” mode without relying on CSS hacks.
  // ------------------------------------------------------
  const shouldShowTitle = !logoOnly && showTitle;
  const shouldShowSubtitle = !logoOnly && showSubtitle && Boolean(subtitle);

  return (
    <header className={`app-header ${logoOnly ? "app-header--logoOnly" : ""}`}>
      {/* ======================================================
         LOGO
         ====================================================== */}
      {showLogo && (
        <img
          src="https://www.briyaroomreservations.org/static/media/briya_logo.0ee3029e3291962a76b6.png"
          alt="Briya Public Charter School"
          className="app-header__logo"
        />
      )}

      {/* ======================================================
         TITLE (H1)
         - Render only if enabled
         - Default title provided for safety
         ====================================================== */}
      {shouldShowTitle && (
        <h1 className="app-header__title">
          {title || "Briya Room Reservations"}
        </h1>
      )}

      {/* ======================================================
         SUBTITLE (H2)
         - Render only if subtitle has actual text
         - Prevents blank vertical spacing
         ====================================================== */}
      {shouldShowSubtitle && (
        <h2 className="app-header__subtitle">{subtitle}</h2>
      )}
    </header>
  );
}

export default Header;