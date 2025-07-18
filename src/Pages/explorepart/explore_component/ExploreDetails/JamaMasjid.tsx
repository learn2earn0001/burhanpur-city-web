"use client";

import { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const JamaMasjid = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">🕌 Jama Masjid, Burhanpur</h1>
            <p className="text-lg text-gray-500 mt-2">A Symbol of Mughal Architecture and Devotion</p>
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
              Jama Masjid in Burhanpur is an iconic example of Islamic architecture in Central India.
              Built during the reign of the Faruqi dynasty and later expanded by the Mughals, it is known
              for its grand arches, towering minarets, and spacious prayer halls.
            </p>
            <p>
              The mosque holds a deep historical and religious significance for the local Muslim community
              and reflects the grandeur of Mughal aesthetics blended with local craftsmanship.
            </p>
            <p>
              It remains an active place of worship and a major attraction for tourists and historians alike.
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
              Jama Masjid, Gandhi Chowk, Burhanpur, Madhya Pradesh 450331, India
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
              <li><strong>Built in:</strong> 16th century during Faruqi dynasty rule.</li>
              <li><strong>Expanded by:</strong> Mughal emperors including Shah Jahan.</li>
              <li><strong>Architecture:</strong> Classic Indo-Islamic design with a large central dome.</li>
              <li><strong>Purpose:</strong> A central mosque for Friday congregational prayers (Jumma).</li>
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
              <li><strong>Shahi Qila:</strong> Mughal palace complex along the Tapti River.</li>
              <li><strong>Dargah-e-Hakimi:</strong> A revered spiritual center for Dawoodi Bohras.</li>
              <li><strong>Raja Ki Chhatri:</strong> Architectural gem beside the riverbank.</li>
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
              title="Jama Masjid Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.568356428298!2d76.2252632755288!3d21.582035280171417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd83548f2b7d09f%3A0x2f02f3a5476be1c6!2sJama%20Masjid%2C%20Burhanpur!5e0!3m2!1sen!2sin!4v1689951025490!5m2!1sen!2sin"
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

export default JamaMasjid;
