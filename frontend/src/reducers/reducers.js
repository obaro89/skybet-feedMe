import { LOAD_EVENTS, LOAD_EVENT } from "../actionTypes";

export const eventReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_EVENTS:
      return {
        ...state,
        events: payload,
      };
    case LOAD_EVENT:
      return {
        ...state,
        event: payload,
      };

    default:
      throw new Error(`Encountered an unhandled type ${type}`);
  }
};
