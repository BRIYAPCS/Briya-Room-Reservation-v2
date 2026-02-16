// ======================================================
// APP ROUTER CONFIGURATION
// ------------------------------------------------------
// Responsible for:
// - Defining application routes
// - Connecting URLs to pages
// - Supporting GitHub Pages base path
// ======================================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ReservationsPage from "./pages/ReservationsPage";

/*
  IMPORTANT:
  Since the app is hosted at:

  https://BRIYAPCS.github.io/Briya-Room-Reservation-v2

  We must define a basename so React Router
  correctly resolves routes.
*/

function App() {
  return (
    <BrowserRouter basename="/Briya-Room-Reservation-v2">
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