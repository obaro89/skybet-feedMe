import React, { useContext, useEffect, useState } from "react";
import { getEvents } from "./actions";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { EventContext } from "./contexts/event.context";
import { groupBy } from "./utils/utils";

const App = () => {
  const { setEvents } = useContext(EventContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const _events = await getEvents();
      setIsLoading(false);
      setEvents(groupBy(_events));
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
