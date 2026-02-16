/* ======================================================
   HOME PAGE
   ------------------------------------------------------
   Route: /

   Responsibilities:
   - Fetch sites from backend API
   - Display site selection cards
   - Navigate to RoomsPage
   - Uses centralized Layout component
   - Handles loading and error states
   ====================================================== */

import Layout from "../layout/Layout";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/homepage.css";

function HomePage() {
  // ------------------------------------------------------
  // Navigation hook (React Router)
  // ------------------------------------------------------
  const navigate = useNavigate();

  // ------------------------------------------------------
  // Component State
  // ------------------------------------------------------
  const [sites, setSites] = useState([]);     // Stores API site data
  const [loading, setLoading] = useState(true); // Controls loading state
  const [error, setError] = useState(null);     // Stores fetch errors

  // ------------------------------------------------------
  // Fetch Sites from Backend on Component Mount
  // ------------------------------------------------------
  useEffect(() => {
    async function fetchSites() {
      try {
        // Call backend API
        const response = await fetch("http://192.168.0.33:5050/api/sites");

        // If response is not 200-299, throw error
        if (!response.ok) {
          throw new Error("Failed to fetch sites");
        }

        // Parse JSON response
        const data = await response.json();

        // Update state with API data
        setSites(data);

      } catch (err) {
        console.error("Error fetching sites:", err);
        setError("Unable to load sites.");
      } finally {
        // Stop loading spinner
        setLoading(false);
      }
    }

    fetchSites();
  }, []);

  // ------------------------------------------------------
  // Render Component
  // ------------------------------------------------------
  return (
    <Layout title="Briya Room Reservations" subtitle="Choose a Site">
      
      {/* ===============================
          Loading State
         =============================== */}
      {loading && <p>Loading sites...</p>}

      {/* ===============================
          Error State
         =============================== */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ===============================
          Site Cards Section
         =============================== */}
      {!loading && !error && (
        <section className="site-cards">
          {sites.map((site) => (
            <Cards
              key={site.id}                 // Numeric DB ID
              image={null}                  // Site image can be added later
              label={site.name}             // Display name from DB
              variant="home"
              onClick={() => navigate(`/rooms/${site.code}`)}
              /*
                IMPORTANT:
                We now navigate using site.code (FT, SH, ONT, etc.)
                instead of dummy JS IDs.
                This matches the database structure.
              */
            />
          ))}
        </section>
      )}
    </Layout>
  );
}

export default HomePage;