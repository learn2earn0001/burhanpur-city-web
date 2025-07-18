"use client";

import { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const Gurudwara = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <Atom color="#fa0606" size="medium" text="" textColor="#f40c0c" />
        </div>
      ) : (
        <motion.div
          className="max-w-6xl mx-auto px-4 py-10 space-y-12 font-sans"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          custom={0}
        >
          {/* Title */}
          <motion.div
            className="text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h1 className="text-4xl font-bold text-gray-800">🕌 Gurudwara Bari Sangat Patshahi, Burhanpur</h1>
            <p className="text-lg text-gray-500 mt-2">A Place Touched by the Divine Presence of Guru Nanak Dev Ji</p>
          </motion.div>

          {/* Overview */}
          <motion.section
            className="space-y-5 text-gray-700 leading-relaxed text-lg"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h2 className="text-2xl font-semibold text-gray-800">📝 Overview</h2>
            <p>
              Gurudwara Bari Sangat Patshahi is a revered Sikh shrine in Burhanpur, historically significant as it was graced by the visit of Guru Nanak Dev Ji during his travels (Udasis).
            </p>
            <p>
              This sacred site offers a peaceful atmosphere and reflects the deep spiritual roots of Sikhism in the region. The architecture is simple yet serene, offering a place for reflection and devotion.
            </p>
            <p>
              It continues to serve as a pilgrimage destination for Sikhs and spiritual seekers visiting from around the world.
            </p>
          </motion.section>

          {/* Address */}
          <motion.section
            className="bg-gray-50 p-6 rounded-xl shadow-sm"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.5}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">📍 Address</h2>
            <p className="text-gray-700 text-base">
              Gurudwara Bari Sangat Patshahi, Near Shahi Qila, Burhanpur, Madhya Pradesh 450331, India
            </p>
          </motion.section>

          {/* Historical Significance */}
          <motion.section
            className="space-y-3"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h2 className="text-2xl font-semibold text-gray-800">📜 Historical Significance</h2>
            <ul className="list-disc pl-5 text-gray-700 text-base">
              <li><strong>Visited by:</strong> Guru Nanak Dev Ji during his first Udasi.</li>
              <li><strong>Spiritual Hub:</strong> A major spiritual center for Sikhs in central India.</li>
              <li><strong>Community Role:</strong> Hosts langar (community kitchen) and daily prayers.</li>
              <li><strong>Historic Value:</strong> Part of Sikh religious heritage in India.</li>
            </ul>
          </motion.section>

          {/* Nearby Attractions */}
          <motion.section
            className="space-y-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2.5}
          >
            <h2 className="text-2xl font-semibold text-gray-800">🏞️ Nearby Attractions</h2>
            <ul className="list-disc pl-5 text-gray-700 text-base">
              <li><strong>Shahi Qila:</strong> A beautiful palace and historic site by the Tapti River.</li>
              <li><strong>Raja Ki Chhatri:</strong> A peaceful riverside monument of architectural elegance.</li>
              <li><strong>Dargah-e-Hakimi:</strong> A famous Bohra shrine nearby.</li>
            </ul>
          </motion.section>

          {/* Map */}
          <motion.section
            className="rounded-xl overflow-hidden shadow-md"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🗺️ Location Map</h2>
            <iframe
              title="Gurudwara Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7357.914530255773!2d76.22539076304008!3d21.30147713495719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8374e4bb8eec3%3A0x6a31496a7a956685!2sGurudwara%20Bari%20Sangat%20Patshahi!5e0!3m2!1sen!2sin!4v1689860075611!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.section>
        </motion.div>
      )}
    </div>
  );
};

export default Gurudwara;
