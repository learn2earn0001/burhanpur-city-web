import React from 'react';
import railway from '../../../../public/assets/railway.jpg';
import Sahikila from '../../../../public/assets/shahiqila.jpg';
import dargah from '../../../../public/assets/Dargah.jpg';
import Asirgarh from '../../../../public/assets/asirgarh.jpg';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import CityMap from './CityMap';
import UploadButton from '@/components/ui/upload-button';

interface Place {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  button: React.ReactNode;
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ExplorePhoneview: React.FC = () => {
  const places: Place[] = [
    {
      id: 1,
      title: 'Asirgarh Fort',
      subtitle: 'The Gateway to the Deccan',
      description:
        "Asirgarh Fort, standing tall on the Satpura hills, has been a strategic military stronghold since medieval times. Dubbed as the 'Gateway to the South', it played a key role during the Mughal and British rule. The fort complex includes temples, a mosque, and natural springs.",
      image: Asirgarh,
      button: (
        <Link to="/AsirgarhFort" key="btn1" aria-label="Visit AsirgarhFort">
          <UploadButton />
        </Link>
      ),
    },
    {
      id: 2,
      title: 'Shahi Qila',
      subtitle: 'Royal Fort of Burhanpur',
      description:
        'Built on the banks of the Tapti River, Shahi Qila showcases stunning Mughal architecture and once served as a royal residence.',
      image: Sahikila,
      button: (
        <Link to="/ShahiQila" key="btn2" aria-label="Visit Shahi Qila page">
          <UploadButton />
        </Link>
      ),
    },
    {
      id: 3,
      title: 'Dargah-e-Hakimi',
      subtitle: 'A Spiritual Haven',
      description:
        'A revered pilgrimage site for the Dawoodi Bohra community, known for its peaceful surroundings and elegant white marble structures.',
      image: dargah,
      button: (
        <Link to="/DargahHakimi" key="btn3" aria-label="Visit Dargah-e-Hakimi page">
          <UploadButton />
        </Link>
      ),
    },
    {
      id: 4,
      title: 'Burhanpur Railway Station',
      subtitle: 'A Historic Gateway',
      description:
        "Connecting Burhanpur to major cities, the station reflects colonial-era architecture and plays a vital role in the city's cultural and historical significance.",
      image: railway,
      button: (
        <Link to="/railway-station" key="btn4" aria-label="Visit Burhanpur Railway Station page">
          <UploadButton />
        </Link>
      ),
    },
    {
      id: 5,
      title: 'Raja Ki Chhatri',
      subtitle: 'A Royal Remembrance',
      description:
        'Raja Ki Chhatri is a stunning cenotaph located on the banks of the Tapti River in Burhanpur. This monument is known for its symmetrical architecture, intricate carvings, and serene surroundings. Built in memory of Raja Jai Singh, this chhatri is a beautiful example of Rajput-Mughal architecture.',
      image: "https://www.trawell.in/admin/images/upload/166078838Burhanpur_Raja_Jai_Singh_ki_Chhatri_Main.jpg",
      button: (
        <Link to="/RajaKiChhatri" key="btn5" aria-label="Visit Raja Ki Chhatri">
          <UploadButton />
        </Link>
      ),
    },
    {
      id: 6,
      title: 'Jama Masjid',
      subtitle: 'A Legacy of Mughal Architecture',
      description:
        'Commissioned by Adil Shah IV (Faruqi dynasty) between 1588–90; distinctive for its bilingual Sanskrit–Arabic inscriptions and black‑stone pillars. Jama Masjid in Burhanpur is an iconic example of Islamic architecture in Central India. It is known for its grand arches, towering minarets, and spacious prayer halls.',
      image: "https://www.trawell.in/admin/images/upload/166078200Burhanpur_Jama_Masjid_Main.jpg",
      button: (
        <Link to="/JamaMasjid" key="btn6" aria-label="Visit JamaMasjid">
          <UploadButton />
        </Link>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 space-y-14">
      {/* City Map */}
      <motion.div
        className="rounded-2xl overflow-hidden shadow-lg border"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <CityMap />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, i) => (
          <motion.div
            key={place.id}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-2xl shadow-md transition duration-300 overflow-hidden flex flex-col"
          >
            <img src={place.image} alt={place.title} className="w-full h-56 object-cover" />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{place.title}</h2>
                <h3 className="text-sm text-gray-500 mb-2">{place.subtitle}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{place.description}</p>
              </div>
              <div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                  {place.button}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePhoneview;
