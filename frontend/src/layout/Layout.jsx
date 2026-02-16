/* ======================================================
   Layout.jsx
   ------------------------------------------------------
   Centralized page layout wrapper.

   Responsibilities:
   - Render Header (optional)
   - Render main content area
   - Render Footer (optional)

   Why this exists:
   - Keeps every page consistent
   - Prevents duplicate Header/Footer code
   - Allows per-page control (logo-only header, hide footer, etc.)
   ====================================================== */

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({
  // Header text
  title,
  subtitle,

  // Layout switches
  showHeader = true,
  showFooter = true,

  // Header mode switches
  headerLogoOnly = false, // When true: show only logo (no H1/H2)

  // Page content
  children,
}) {
  return (
    <div className="app-layout">
      {/* ==================================================
         HEADER (Optional)
         - headerLogoOnly hides title/subtitle without leaving empty gaps
         ================================================== */}
      {showHeader && (
        <Header
          // “logo only” mode:
          logoOnly={headerLogoOnly}
          // Only pass title/subtitle if NOT in logo-only mode
          title={headerLogoOnly ? undefined : title}
          subtitle={headerLogoOnly ? undefined : subtitle}
        />
      )}

      {/* ==================================================
         MAIN CONTENT
         - flex: 1 keeps footer pushed down on short pages
         ================================================== */}
      <main className="app-content">{children}</main>

      {/* ==================================================
         FOOTER (Optional)
         ================================================== */}
      {showFooter && <Footer />}
    </div>
  );
}

export default Layout;