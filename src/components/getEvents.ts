import { EventElementType } from "./types";

export function getEvents(): EventElementType[] {
  const events = window.localStorage.getItem("events");

  return events
    ? JSON.parse(events)
    : [
        {
          time: "string",
          periodicity: "string",
          text: "string",
        },
      ];
}
