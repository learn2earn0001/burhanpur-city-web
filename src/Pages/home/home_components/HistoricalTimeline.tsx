import React from "react";
import { motion } from "framer-motion";
import AddCrasoule from "@/Pages/Adds/adds/AddCrasoule";
// import Adds from "@/Pages/Adds/adds/Adds";

interface Event {
  year: string;
  description: string;
}

const events: Event[] = [
  { year: "1388", description: "City founded by Nasir Khan." },
  { year: "1600s", description: "Flourished under Mughal Emperor Shah Jahan." },
  { year: "1631", description: "Death of Mumtaz Mahal, first burial in Burhanpur." },
  { year: "1818", description: "City comes under British rule." },
];

const HistoricalTimeline: React.FC = () => {
  return (
    
    <section className="container mx-auto px-4 py-10">
       {/* Ad Section */}
        <div className="pt-4 bg-transparent w-full">
          <AddCrasoule/>
        </div>
      {/* 👇 Animated Heading Only */}
      <motion.h2
        className="text-4xl font-bold text-center mb-10 mt-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Historical Timeline
      </motion.h2>

      {/* 👇 Baaki sab original jaise hi */}
      <div className="relative border-l-4  border-blue-500 pl-6 space-y-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-purple-100 shadow-lg rounded-2xl p-6 border border-gray-200 relative"
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full shadow-md" />
            <h4 className="text-xl font-semibold text-blue-600">{event.year}</h4>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistoricalTimeline;
