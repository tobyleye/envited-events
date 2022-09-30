import { useEventContext } from "store";
import birthdayCake from "assets/birthday-cake.png";
import { Redirect } from "react-router-dom";
import { ReactNode } from "react";
import { useFilePreview } from "hooks/useFilePreview";
import dayjs from "dayjs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import "./styles.css";

function EventInfoItem({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: ReactNode;
}) {
  return (
    <div className="event-info-item">
      <div className="event-info-item_icon text-purple-base text-xl">
        {icon}
      </div>
      <div className="event-info-item_content">
        <div className="font-bold mb-1 text-purple-dark">{title}</div>
        <div className="text-gray-6 text-sm ">{value}</div>
      </div>
      <div className="text-gray-4 text-xl">
        <FiChevronRight />
      </div>
    </div>
  );
}

export function EventDetails() {
  const [event] = useEventContext();

  const previewURL = useFilePreview(event?.photo);

  if (!event) {
    return <Redirect to="/create" />;
  }

  const location = event.location;

  return (
    <div className="min-h-screen bg-gray-1  mx-auto md:py-16 lg:py-24 lg:flex gap-20 flex-row-reverse">
      <figure className="mb-6 h-60 md:h-[35rem] w-full">
        <img
          className="h-full w-full object-cover"
          src={previewURL ?? birthdayCake}
          alt="birthday cake"
        />
      </figure>

      <div className="px-4 lg:px-0 w-full">
        <div className="mb-8 lg:mb-12">
          <h3 className="text-[28px] mb-1 font-bold lg:text-[48px] capitalize">
            {" "}
            {event.name}
          </h3>
          <p className="text-gray-5 text-sm">
            Hosted by <span className="font-bold">{event.hostname}</span>
          </p>
        </div>

        <div className="event-info-items grid gap-8 lg:gap-10">
          <EventInfoItem
            icon={<BsCalendarDate />}
            title={dayjs(event.startDate).format("DD MMMM hh:mmA")}
            value={
              <p>
                to{" "}
                <span className="font-bold">
                  {dayjs(event.endDate).format("DD MMMM hh:mmA")}
                </span>{" "}
                UTC {dayjs(event.startDate).format("Z")}
              </p>
            }
          />
          <EventInfoItem
            icon={<HiOutlineLocationMarker />}
            title={event.location.street}
            value={[location.suburb, location.state, location.postcode].join(
              ", "
            )}
          />
        </div>
      </div>
    </div>
  );
}
