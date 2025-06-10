"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Card, CardContent } from "@/components/ui/card"; // Adjust if your path differs

import tajmahal from "../../../../public/assets/tajmahal.jpg";
import asirgarh from "../../../../public/assets/asirgarh.jpg";

interface Attraction {
  title: string;
  description: string;
  img: string;
  alt: string;
}

const attractions: Attraction[] = [
  {
    title: "Taj Mahal of Burhanpur",
    description: "A lesser-known masterpiece radiating Mughal elegance and romance.",
    img: tajmahal,
    alt: "View of Taj Mahal of Burhanpur",
  },
  {
    title: "Shahi Qila",
    description: "An imposing royal fortress echoing tales of valor and history.",
    img: "https://www.trawell.in/admin/images/upload/166078311Shahi_Qila.jpg",
    alt: "Shahi Qila, historic fort",
  },
  {
    title: "Jama Masjid",
    description: "A grand mosque representing Burhanpur's Islamic heritage and architectural grandeur.",
    img: "https://www.trawell.in/admin/images/upload/166078200Burhanpur_Jama_Masjid_Main.jpg",
    alt: "Jama Masjid, mosque",
  },
  {
    title: "Dargah-e-Hakimi",
    description: "A serene and spiritual pilgrimage site for Dawoodi Bohras from around the world.",
    img: "https://www.trawell.in/admin/images/upload/166078934Burhanpur_Dargah-E-Hakimi_Main.jpg",
    alt: "Dargah-e-Hakimi shrine in Burhanpur",
  },
  {
    title: "Asirgarh Fort",
    description: "Majestic hilltop fort offering panoramic views and historical military significance.",
    img: asirgarh,
    alt: "Asirgarh Fort landscape view",
  },
  {
    title: "Raja Ki Chhatri",
    description: "An architectural gem on the banks of the Tapti River, famous for its symmetry and peace.",
    img: "https://www.trawell.in/admin/images/upload/166078838Burhanpur_Raja_Jai_Singh_ki_Chhatri_Main.jpg",
    alt: "Raja Ki Chhatri memorial site",
  },
  {
    title: "Gurudwara",
    description: "This Gurdwara holds historical significance as it was visited by Guru Nanak Dev Ji",
    img: "https://www.trawell.in/admin/images/upload/166078279Burhanpur_Gurudwara_Bari_Sangat_Patshahi_Main.jpg",
    alt: "Spiritual and historical site",
  },
];

const TopAttractions: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-100 via-amber-50 to-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold font-serif text-amber-800 mb-12">
          Top Attractions
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {attractions.map((place, index) => (
            <SwiperSlide key={index}>
              <Card className="overflow-hidden shadow-lg rounded-2xl">
                <img
                  src={typeof place.img === "string" ? place.img : (place.img as any).src}
                  alt={place.alt}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 text-left">
                  <h3 className="text-xl font-semibold text-amber-800">{place.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{place.description}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopAttractions;
