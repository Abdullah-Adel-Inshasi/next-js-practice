import axios from "axios";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import IEvent from "../../src/interfaces/event";
import { useRouter } from "next/router";
const Events: NextPage<EventsProps> = ({ events }) => {
  const router = useRouter();
  const [eventList, setEventList] = useState<IEvent[]>(events);
  const filterSportEvents = async (category: string) => {
    await axios
      .get<IEvent[]>("http://localhost:4200/events?category=sports")
      .then((events) => setEventList(events.data))
      .then(() => {
        router.push(`/events?category=${category}`, undefined, {
          shallow: true,
        });
      });
  };
  return (
    <>
      <h1>Events List</h1>
      <button onClick={() => filterSportEvents("sports")}>
        show sport events
      </button>
      {eventList.map((event) => (
        <div key={event.id}>
          <h1>
            {event.id}- {event.title} - {event.date} | {event.category}
          </h1>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Events;

export const getServerSideProps: GetServerSideProps<
  EventsProps,
  { category: string }
> = async ({ query }) => {
  const { category } = query;
  const queryString = category && `category=${category}`;
  const events = await axios
    .get<IEvent[]>(`http://localhost:4200/events?${queryString}`)
    .then((events) => events.data)
    .catch(() => {});

  if (!events) {
    return { notFound: true };
  }
  return { props: { events } };
};

interface EventsProps {
  events: IEvent[];
}
