/* eslint-disable @next/next/no-img-element */

import { FeatureCard } from "@/components/feature/FeatureCard";
import { FeatureTitle } from "@/components/feature/FeatureTitle";

const features = [
  {
    title: "Use your calendar as a todo list",
    id: "todo-list",

    image:
      "https://images.unsplash.com/photo-1692739843142-877be399d229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Color your calendar to organize",
    id: "colors",

    image:
      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Instantly know if someone is available",
    id: "availability",

    image:
      "https://images.unsplash.com/photo-1692656570096-8894c62d0733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    title: "Track what you listened to when",
    id: "music",

    image:
      "https://images.unsplash.com/photo-1692663664447-64d7e9a843f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links",

    image:
      "https://images.unsplash.com/photo-1672435923857-fc5b7fe97350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    title: "Always know what your team is up to",
    id: "team",

    image:
      "https://images.unsplash.com/photo-1688511460213-b0b3d4e2f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  },
  {
    title: "Use your calendar as a todo list",
    id: "todo-list1",

    image:
      "https://images.unsplash.com/photo-1692739843142-877be399d229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Color your calendar to organize",
    id: "colors1",

    image:
      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Instantly know if someone is available",
    id: "availability1",

    image:
      "https://images.unsplash.com/photo-1692656570096-8894c62d0733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    title: "Track what you listened to when",
    id: "music1",

    image:
      "https://images.unsplash.com/photo-1692663664447-64d7e9a843f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
  },
  {
    title: "Send scheduling links guests love",
    id: "scheduling-links1",

    image:
      "https://images.unsplash.com/photo-1672435923857-fc5b7fe97350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    title: "Always know what your team is up to",
    id: "team1",

    image:
      "https://images.unsplash.com/photo-1688511460213-b0b3d4e2f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
  },
];
const Services = () => {
  return (
    <section className="mx-auto max-w-6xl mt-[-40vh] z-[30] bg-black px-4">
      {/* Top section */}
      <div className="flex flex-col justify-center pb-20">
        <h1 className="mb-12 font-serif text-7xl">
          The joyful productivity app.
          <br />
          <span className="text-gray-500 text-6xl">
            Schedule time for todos, events, and contacts.
          </span>
        </h1>
      </div>
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen items-center w-full">
          <div className="relative aspect-square text-black w-full rounded-2xl">
            {features.map((feature) => (
              <FeatureCard id={feature.id} key={feature.id}>
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={feature.image}
                  alt={`Feature ${feature.id}`}
                />
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
