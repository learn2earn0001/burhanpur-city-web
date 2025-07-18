"use client";

import { useEffect, useState } from 'react';
import { Atom } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const TajMahalBurhanpur = () => {
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
            <h1 className="text-4xl font-bold text-gray-800">🏛️ Taj Mahal of Burhanpur</h1>
            <p className="text-lg text-gray-500 mt-2">The First Resting Place of Mumtaz Mahal</p>
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
              The Taj Mahal of Burhanpur is a lesser-known but deeply significant historical site. It was the original burial site of Mumtaz Mahal before her remains were shifted to Agra. The site holds emotional and architectural value as it reflects the beginning of Shah Jahan's grand tribute to his beloved queen.
            </p>
            <p>
              Though the iconic Taj Mahal was eventually built in Agra, Burhanpur holds the story of where the emperor first mourned her. The tomb remains a symbolic part of Mughal history.
            </p>
            <p>
              The structure is located in the Ahukhana complex, surrounded by tranquil gardens and riverbanks, offering a peaceful retreat for history enthusiasts.
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
              Ahukhana, Burhanpur, Madhya Pradesh 450331, India
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
              <li><strong>Original resting place:</strong> Mumtaz Mahal was buried here temporarily after her death in 1631.</li>
              <li><strong>Architectural plan:</strong> Shah Jahan initially planned to build the Taj Mahal in Burhanpur.</li>
              <li><strong>Why moved:</strong> Due to logistic challenges and water issues, construction was shifted to Agra.</li>
              <li><strong>Legacy:</strong> The site still holds historical gravitas and is visited by Mughal history admirers.</li>
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
              <li><strong>Shahi Qila:</strong> Royal Mughal palace with intricate architecture.</li>
              <li><strong>Dargah-e-Hakimi:</strong> Important spiritual site for Dawoodi Bohras.</li>
              <li><strong>Raja Ki Chhatri:</strong> Beautiful riverside cenotaph nearby.</li>
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
              title="Taj Mahal of Burhanpur Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14716.488014114215!2d76.20380567404994!3d21.312884717140985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd841dc1c95cfa5%3A0x3c55c0cf5cc2c992!2sTaj%20Mahal%20(Original%20Burial%20Site%20of%20Mumtaz%20Mahal)!5e0!3m2!1sen!2sin!4v1689964099323!5m2!1sen!2sin"
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

export default TajMahalBurhanpur;
