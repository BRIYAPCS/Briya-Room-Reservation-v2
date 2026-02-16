/* =========================
   SITE IMAGES
   ========================= */
import FT from "../assets/Sites/FT.jpg";
import SH from "../assets/Sites/SH.png";
import ON from "../assets/Sites/ON.png";
import GA from "../assets/Sites/GA.jpeg";
import GA_ANNEX from "../assets/Sites/GA-ANNEX.png";

/* =========================
   PLACEHOLDER ROOM IMAGE
   (replace per room later)
   ========================= */
import ROOM_PLACEHOLDER from "../assets/placeholder.jpg";

export const sites = [
  /* ======================================================
     FORT TOTTEN
     ====================================================== */
  {
    id: "FT",
    name: "Fort Totten",
    image: FT,
    rooms: [
      { id: "100", name: "Academic NEST", capacity: 1, image: ROOM_PLACEHOLDER },
      { id: "101", name: "Staff Kitchen NEST", capacity: 1, image: ROOM_PLACEHOLDER },
      { id: "102", name: "Mama Nook 136 Blue", capacity: 1, image: ROOM_PLACEHOLDER },
      { id: "103", name: "Adika Nook 156 Yellow", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "104", name: "Stella Nook 162 Yellow", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "105", name: "Kondi Nook 163 Yellow", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "106", name: "Milo Nook 155 Yellow", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "107", name: "Garden Room 144 Blue", capacity: 6, image: ROOM_PLACEHOLDER },
      { id: "108", name: "Classroom 141 Blue", capacity: 25, image: ROOM_PLACEHOLDER },
      { id: "109", name: "Classroom 143 Blue", capacity: 25, image: ROOM_PLACEHOLDER },
      { id: "110", name: "Classroom 139 Blue", capacity: 25, image: ROOM_PLACEHOLDER },
      { id: "111", name: "CASAS / Conference Room 134 Blue", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "112", name: "Classroom 153 Yellow", capacity: 25, image: ROOM_PLACEHOLDER },
      { id: "113", name: "Classroom 159 Yellow", capacity: 21, image: ROOM_PLACEHOLDER },
      { id: "114", name: "Lobby Room 146", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "115", name: "Registration Room 131B Lobby", capacity: 5, image: ROOM_PLACEHOLDER },
    ],
  },

  /* ======================================================
     SHEPHERD
     ====================================================== */
  {
    id: "SH",
    name: "Shepherd",
    image: SH,
    rooms: [
      { id: "400", name: "AE Classroom 207", capacity: 30, image: ROOM_PLACEHOLDER },
      { id: "401", name: "CASAS Room 209", capacity: 6, image: ROOM_PLACEHOLDER },
      { id: "402", name: "AE Classroom 211", capacity: 30, image: ROOM_PLACEHOLDER },
      { id: "403", name: "AE Classroom 218", capacity: 30, image: ROOM_PLACEHOLDER },
      { id: "404", name: "NEDP / CARES Room 219", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "405", name: "West Conference Room 224", capacity: 6, image: ROOM_PLACEHOLDER },
      { id: "406", name: "East Conference Room 226", capacity: 8, image: ROOM_PLACEHOLDER },
      { id: "407", name: "Zoom Room 1 (242)", capacity: 1, image: ROOM_PLACEHOLDER },
      { id: "408", name: "Zoom Room 2 (243)", capacity: 1, image: ROOM_PLACEHOLDER },
      { id: "409", name: "218A VI Teaching", capacity: 1, image: ROOM_PLACEHOLDER },
    ],
  },

  /* ======================================================
     ONTARIO
     ====================================================== */
  {
    id: "ONT",
    name: "Ontario",
    image: ON,
    rooms: [
      { id: "500", name: "Bletzinger Classroom", capacity: 25, image: ROOM_PLACEHOLDER },
      { id: "501", name: "Green Classroom", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "502", name: "IT / Testing Room", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "503", name: "Zoom Conference 2nd Floor", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "504", name: "Zoom Spot (Inside Testing Room)", capacity: 1, image: ROOM_PLACEHOLDER },
    ],
  },

  /* ======================================================
     GEORGIA
     ====================================================== */
  {
    id: "GA",
    name: "Georgia",
    image: GA,
    rooms: [
      { id: "200", name: "GA Classroom 79", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "201", name: "GA Classroom 85", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "202", name: "GA Large Counseling Room", capacity: null, image: ROOM_PLACEHOLDER },
      { id: "203", name: "GA Small Counseling Room", capacity: null, image: ROOM_PLACEHOLDER },
    ],
  },

  /* ======================================================
     GEORGIA ANNEX
     ====================================================== */
  {
    id: "GA-ANNEX",
    name: "Georgia Annex",
    image: GA_ANNEX,
    rooms: [
      { id: "300", name: "1st Floor", capacity: "1–20", image: ROOM_PLACEHOLDER },
      { id: "301", name: "2nd Floor Office", capacity: 4, image: ROOM_PLACEHOLDER },
      { id: "302", name: "Basement", capacity: 1, image: ROOM_PLACEHOLDER },
    ],
  },
];