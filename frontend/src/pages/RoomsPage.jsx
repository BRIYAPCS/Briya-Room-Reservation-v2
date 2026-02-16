/* ======================================================
   ROOMS PAGE
   ------------------------------------------------------
   Route: /rooms/:siteId

   Responsibilities:
   - Extract siteId from URL
   - Find matching site from sites.js
   - Display rooms for selected site
   - Navigate to reservation page
   - Uses centralized Layout component
   ====================================================== */

import { useParams, useNavigate } from "react-router-dom";
import { sites } from "../data/sites";
import Cards from "../components/Cards";
import Layout from "../layout/Layout";
import "../css/roomspage.css";

function RoomsPage() {
  /* ======================================================
     1. Extract siteId from route
     Example: /rooms/FT
     ====================================================== */
  const { siteId } = useParams();

  /* ======================================================
     2. Navigation handler
     ====================================================== */
  const navigate = useNavigate();

  /* ======================================================
     3. Locate selected site in data
     ====================================================== */
  const selectedSite = sites.find((site) => site.id === siteId);

  /* ======================================================
     4. Safety fallback
     Prevents crash if invalid route entered
     ====================================================== */
  if (!selectedSite) {
    return (
      <Layout title="Error" subtitle="Invalid Site">
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Site not found.</h2>
        </div>
      </Layout>
    );
  }

  /* ======================================================
     5. Render Rooms
     ====================================================== */
  return (
    <Layout
      title="Briya Room Reservations"
      subtitle={`${selectedSite.name} - Choose a Room to Book`}
    >
      {/* Rooms Grid Section */}
      <section className="rooms-grid">
        {selectedSite.rooms.map((room) => (
          <Cards
            key={room.id}
            image={room.image}
            label={room.name}
            capacity={room.capacity} // Capacity shown like "(25)"
            variant="rooms"
            onClick={() => navigate(`/reservation/${siteId}/${room.id}`)}
          />
        ))}
      </section>
    </Layout>
  );
}

export default RoomsPage;