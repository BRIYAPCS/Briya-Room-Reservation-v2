// ======================================================
// APP ROUTER CONFIGURATION
// ------------------------------------------------------
// Responsible for:
// - Defining application routes
// - Connecting URLs to pages
// ======================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ReservationsPage from "./pages/ReservationsPage";

/*
  App Component
  -------------------------------------------------
  - Keep this file focused on routes only.
  - Layout/header/footer are handled inside each page via <Layout>.
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ==================================================
           Home Page
           Route: /
           ================================================== */}
        <Route path="/" element={<HomePage />} />

        {/* ==================================================
           Rooms Page
           Route: /rooms/:siteId
           ================================================== */}
        <Route path="/rooms/:siteId" element={<RoomsPage />} />

        {/* ==================================================
           Reservation Page
           Route: /reservation/:siteId/:roomId
           ================================================== */}
        <Route
          path="/reservation/:siteId/:roomId"
          element={<ReservationsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;