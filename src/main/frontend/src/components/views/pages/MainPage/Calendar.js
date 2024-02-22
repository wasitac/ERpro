import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// https://fullcalendar.io/docs/google-calendar
export default function Calendar() {
  const apiKey = "AIzaSyDejEhCs_Y0_cDawOQ5dR2gZ1DloeB0I38";

  return (
    <div className="cal-container" style={{ margin: 20 }}>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        googleCalendarApiKey={apiKey}
        events={{
          googleCalendarId: "firstgitman@gmail.com",
        }}
        eventDisplay={"block"}
        eventTextColor={"#FFF"}
        eventColor={"#448832"}
        height={"660px"}
        Toolbar
      />
    </div>
  );
}
