import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { event as Tevent } from "./types";

type looseEventType = Tevent | null;
type contextType = [looseEventType, Dispatch<SetStateAction<looseEventType>>];

export const EventContext = createContext<contextType>([null, () => {}]);

export function EventContextProvider({ children }: { children: ReactNode }) {
  const [event, setEvent] = useState<looseEventType>(null);

  return (
    <EventContext.Provider value={[event, setEvent]}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventContext() {
  const value = useContext(EventContext);
  return value;
}
