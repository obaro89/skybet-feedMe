import { createContext, useReducer } from "react";
import { LOAD_EVENTS, LOAD_EVENT } from "../actionTypes";
import { eventReducer } from "../reducers/reducers";

export const EventContext = createContext({
  events: {},
  event: [],
  setEvent: () => null,
  setEvents: () => null,
});

const initialState = {
  events: {},
  event: [],
};

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const setEvent = (payload) => {
    dispatch({
      type: LOAD_EVENT,
      payload,
    });
  };
  const setEvents = (payload) => {
    dispatch({
      type: LOAD_EVENTS,
      payload,
    });
  };

  const value = { state, setEvent, setEvents, dispatch };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
};
