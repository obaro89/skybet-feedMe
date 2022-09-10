import api from "../api";

export const getEvents = async () => {
  try {
    const events = await api.get("api/events");
    return events.data.events;
  } catch (error) {
    console.log("Unable to fetch events" + error);
  }
};

export const getEventById = async (eventId) => {
  try {
    const event = await api.get(`api/event/${eventId}`);
    return event.data.event;
  } catch (error) {
    console.log("Unable to fetch events" + error);
  }
};
export const getEventByCategory = async (category) => {
  try {
    const events = await api.get(`api/category/${category}`);
    return events.data.events;
  } catch (error) {
    console.log("Unable to fetch events" + error);
  }
};
