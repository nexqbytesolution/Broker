import Head from "next/head";
import PropertyCard from "../../component/PropertyCard";

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      title: "Cozy Studio Apartment",
      location: "Downtown",
      size: "450 sq ft",
      price: "$1,200/month",
      image: "/images/room1.jpg",
    },
    {
      id: 2,
      title: "2-Bedroom Family Room",
      location: "Suburb Heights",
      size: "850 sq ft",
      price: "$1,800/month",
      image: "/images/room2.jpg",
    },
    // Add more rooms as needed
  ];

  return (
    <>
      <Head>
        <title>Rooms for Rent - PrimeBroker</title>
        <meta
          name="description"
          content="Find the perfect room for rent with PrimeBroker. Browse our selection of quality rooms in prime locations."
        />
      </Head>

      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Rooms for Rent</h1>
          <p className="text-xl">Find your perfect room in prime locations</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <PropertyCard key={room.id} property={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
