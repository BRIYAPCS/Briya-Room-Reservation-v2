export const policies = {
  allowDoubleBooking:
    String(process.env.ALLOW_DOUBLE_BOOKING).toLowerCase() === "true",

  allowWeekends:
    String(process.env.ALLOW_WEEKENDS).toLowerCase() === "true",

  allowRecurring:
    String(process.env.ALLOW_RECURRING).toLowerCase() === "true",

  bookingStartHour: Number(process.env.BOOKING_START_HOUR || 8),
  bookingEndHour: Number(process.env.BOOKING_END_HOUR || 22),

  maxDurationMinutes: Number(process.env.MAX_DURATION_MINUTES || 240),
  maxBookingDaysAhead: Number(process.env.MAX_BOOKING_DAYS_AHEAD || 90),

  timezone: process.env.APP_TZ || "America/New_York"
};