import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Swiper, SwiperSlide } from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


import tajmahal from "../../../../public/assets/tajmahal.jpg";
import asirgarh from "../../../../public/assets/asirgarh.jpg";
// import { Navigation } from "lucide-react";

// Defining the structure for the attractions
interface Attraction {
  title: string;
  description: string;
  img: string;
  alt: string;
}

const TopAttractions = () => {
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
      description: "A grand mosque representing Burhanpur’s Islamic heritage and architectural grandeur.",
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

  return (
    <section
      id="attractions"
      aria-labelledby="attractions-title"
      className="py-20 bg-gradient-to-b from-yellow-100 via-amber-50 to-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          id="attractions-title"
          className="text-4xl sm:text-5xl font-bold mb-12 font-serif text-amber-800 animate-fade-in-up"
        >
          Top Attractions
        </h2>

    
          {attractions.map((place) => (
            
              <Card className=" shadow-md">
                <CardHeader className="border-b">
                  <CardTitle>{place.title}</CardTitle>
                  <CardDescription>{place.description}</CardDescription>
                  <CardAction>
                    {/* If you want to add action button or something, you can add it here */}
                  </CardAction>
                </CardHeader>

                <CardContent>
                  <img
                    src={place.img}
                    alt={place.alt}
                    className="w-full h-full object-cover object-top"
                  />
                </CardContent>

                <CardFooter className="border-t">
                  {/* You can add footer actions here if needed */}
                </CardFooter>
              </Card>
        
          ))}
        
      </div>
    </section>
  );
};

export default TopAttractions;
