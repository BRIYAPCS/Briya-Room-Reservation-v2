/* ======================================================
   RESERVATIONS PAGE
   ------------------------------------------------------
   Route: /reservation/:siteId/:roomId

   Responsibilities:
   - Logo-only header
   - Structured calendar container
   - Custom toolbar (New Booking / Room badge / Refresh)
   - View switch (Calendar / List)
   - React Big Calendar integration
   - Business rules:
       • Mon–Fri only (default work_week)
       • 08:00–22:00 visible hours
       • Block invalid selections
   ====================================================== */

import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { sites } from "../data/sites";
import "../css/reservationspage.css";

// React Big Calendar
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function ReservationsPage() {
  /* ======================================================
     1️⃣ Extract Route Parameters
     ====================================================== */
  const { siteId, roomId } = useParams();

  /* ======================================================
     2️⃣ Locate Selected Site & Room
     ====================================================== */
  const selectedSite = sites.find((site) => site.id === siteId);
  const selectedRoom = selectedSite?.rooms.find(
    (room) => room.id === roomId
  );

  /* ======================================================
     3️⃣ Safety Fallback
     Prevents crash if invalid route entered
     ====================================================== */
  if (!selectedSite || !selectedRoom) {
    return (
      <Layout headerLogoOnly={true} showFooter={false}>
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Room not found.</h2>
        </div>
      </Layout>
    );
  }

  /* ======================================================
     4️⃣ Placeholder Events (Temporary)
     Replace later with API data
     ====================================================== */
  const events = [];

  /* ======================================================
     5️⃣ Calendar State (Controlled Mode)
     Keeps toolbar + custom controls synchronized
     ====================================================== */
  const [view, setView] = useState(Views.WORK_WEEK);
  const [date, setDate] = useState(new Date());

  /* ======================================================
     6️⃣ Business Rules
     - Visible hours: 08:00–22:00
     - Block weekends
     ====================================================== */
  const minTime = useMemo(
    () => new Date(1970, 0, 1, 8, 0, 0),
    []
  );

  const maxTime = useMemo(
    () => new Date(1970, 0, 1, 22, 0, 0),
    []
  );

  const isWeekend = (d) => {
    const day = d.getDay();
    return day === 0 || day === 6;
  };

  const isWithinBusinessHours = (start, end) => {
    if (isWeekend(start) || isWeekend(end)) return false;

    const startHour = start.getHours();
    const endHour = end.getHours();

    return startHour >= 8 && endHour <= 22;
  };

  /* ======================================================
     7️⃣ Toolbar Handlers (Wire later)
     ====================================================== */
  const handleNewBookingClick = () => {
    console.log("Open booking modal");
  };

  const handleRefreshClick = () => {
    console.log("Refresh events for:", selectedRoom.id);
  };

  return (
    <Layout showHeader={true} headerLogoOnly={true} showFooter={false}>
      <div className="reservation-page">

        {/* ==================================================
           EDGE VIEW SWITCH (Calendar / List)
           ================================================== */}
        <div className="view-switch-edge">
          <button
            className={`ui-btn ui-btn--secondary ${
              view !== Views.AGENDA ? "ui-btn--active" : ""
            }`}
            onClick={() => setView(Views.WORK_WEEK)}
          >
            Calendar
          </button>

          <button
            className={`ui-btn ui-btn--secondary ${
              view === Views.AGENDA ? "ui-btn--active" : ""
            }`}
            onClick={() => setView(Views.AGENDA)}
          >
            List
          </button>
        </div>

        {/* ==================================================
           MAIN WHITE CARD
           ================================================== */}
        <div className="calendar-card">

          {/* ==================================================
             CUSTOM TOOLBAR ROW
             ================================================== */}
          <div className="calendar-toolbar">

            {/* LEFT: New Booking */}
            <div className="toolbar-left">
              <button
                className="ui-btn ui-btn--primary"
                onClick={handleNewBookingClick}
              >
                + New Booking
              </button>
            </div>

            {/* CENTER: Human-readable badge */}
            <div className="toolbar-center">
              <div className="room-badge">
                {selectedSite.name} ► {selectedRoom.name}
              </div>
            </div>

            {/* RIGHT: Refresh */}
            <div className="toolbar-right">
              <button
                className="ui-btn ui-btn--primary"
                onClick={handleRefreshClick}
              >
                Refresh
              </button>
            </div>
          </div>

          {/* ==================================================
             CALENDAR
             ================================================== */}
          <div className="calendar-container">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"

              /* Views */
              views={{
                month: true,
                week: true,
                work_week: true,
                day: true,
                agenda: true,
              }}
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              defaultView={Views.WORK_WEEK}

              /* Business Hours */
              min={minTime}
              max={maxTime}
              step={30}
              timeslots={2}
              selectable
              onSelecting={({ start, end }) =>
                isWithinBusinessHours(start, end)
              }
              onSelectSlot={({ start, end }) => {
                if (!isWithinBusinessHours(start, end)) return;
                console.log("Create booking:", start, end);
              }}

              /* Disable Weekends */
              dayPropGetter={(d) => {
                if (isWeekend(d)) {
                  return { className: "rbc-day--disabled" };
                }
                return {};
              }}

              style={{ height: "75vh" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ReservationsPage;