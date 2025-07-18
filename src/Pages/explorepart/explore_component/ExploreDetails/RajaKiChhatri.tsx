"use client";

import { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const RajaKiChhatri = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">🏛️ Raja Ki Chhatri, Burhanpur</h1>
            <p className="text-lg text-gray-500 mt-2">A Riverside Monument of Symmetry and Peace</p>
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
              Raja Ki Chhatri is a stunning cenotaph located on the banks of the Tapti River in Burhanpur.
              This monument is known for its symmetrical architecture, intricate carvings, and serene surroundings.
            </p>
            <p>
              Built in memory of Raja Jai Singh, this chhatri is a beautiful example of Rajput-Mughal architecture.
              Its peaceful location and elegant domes make it a favorite spot for both tourists and locals.
            </p>
            <p>
              The site also offers a picturesque view of the river, especially during sunrise and sunset.
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
              Raja Ki Chhatri, Tapti River Bank, Burhanpur, Madhya Pradesh 450331, India
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
              <li><strong>Built in memory of:</strong> Raja Jai Singh, a Rajput noble.</li>
              <li><strong>Architecture:</strong> Blend of Rajput and Mughal design elements.</li>
              <li><strong>Features:</strong> Ornate domes, elevated platforms, and symmetrical columns.</li>
              <li><strong>Location significance:</strong> Situated beside the holy Tapti River.</li>
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
              <li><strong>Shahi Qila:</strong> Historic Mughal fort near the river.</li>
              <li><strong>Dargah-e-Hakimi:</strong> Revered Dawoodi Bohra pilgrimage site.</li>
              <li><strong>Jama Masjid:</strong> Grand mosque showcasing Indo-Islamic architecture.</li>
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
              title="Raja Ki Chhatri Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1271177414053!2d76.22312597507922!3d21.558291271799675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd8351b02c6ac15%3A0x39c6cf39fa82d185!2sRaja%20Ki%20Chhatri!5e0!3m2!1sen!2sin!4v1689952090217!5m2!1sen!2sin"
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

export default RajaKiChhatri;
