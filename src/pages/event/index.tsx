import { useEventContext } from "store";
import birthdayCake from "assets/birthday-cake.png";
import { Redirect } from "react-router-dom";
import { ReactNode } from "react"
import  "./styles.css"

function EventInfoItem({ title, value }: {
    title: string;
    value: ReactNode
}) {
  return (
    <div className="event-info-item">
      <div
        className="event-info-item_icon"
      ></div>
      <div className="event-info-item_content">
        <div>18 August 6:00PM</div>
        <div>{value}</div>
      </div>
      <div>chevron right</div>
    </div>
  );
}

export function EventDetails() {
  const [event] = useEventContext();
  console.log({ event });
  if (!event) {
    return <Redirect to="/create" />;
  }

  return (
    <div>
      <figure className="mb-5">
        <img src={birthdayCake} alt="birthday cake" />
      </figure>

      <div className="mb-4">
        <h3>{event.name}</h3>
        <p>Hosted by {event.hostname}</p>
      </div>

      <div className="event-info-items grid gap-4">
        <EventInfoItem
          title="18 August 6:00PM"
          value={
            <p>
              to <span>19 August 1:00PM</span> UTC +10
            </p>
          }
        />
        <EventInfoItem title="Street name" value={"Suburb, State, Postcode"} />
      </div>
    </div>
  );
}
