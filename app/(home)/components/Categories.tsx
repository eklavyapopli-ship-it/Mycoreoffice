import { montserrat } from "@/lib/fontS"
import Image from "next/image";
type Product = {
  id: number;
  name: string;
  image: string;
  link: string;
};
const Products: Product[] = [
  { id: 1, name: "Virtual Offices", image: "/locations/delhi.jpg", link: "delhi" },
  { id: 2, name: "Coworking Space", image: "/locations/noida.jpg", link: "noida" },
  { id: 3, name: "Meeting Rooms", image: "/locations/mumbai.jpg", link: "mumbai" },
];

const Categories = () => {
  return (
    <section className={`relative pb-20 bg-red-950  ${montserrat.className}`} id="browse">
     
      {/* Top Section */}
      <div className=" text-white max-w-7xl flex flex-col mx-auto items-center h-fit justify-center px-6 pt-10 ">
     <h1 className="w-full text-3xl py-5">Browse By Categories</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3  gap-6">
            
          {Products.map((product) => (
                <div
                  key={product.id}
                  className="group relative  overflow-hidden flex flex-col shadow-md bg-black/40 text-white  hover:shadow-2xl transition duration-500"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                     fetchPriority="high"
            loading="lazy"
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
           
                    <button
                     
                      className="hidden md:flex absolute bottom-4 rounded-full left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2.5   transition-opacity opacity-0 group-hover:opacity-100"
                    >
                      Browse
                    </button>
                  </div>
    
          
                  <div className="py-6 px-2 flex flex-col flex-1 justify-between ">
                    <h1 className="text-lg font-semibold mb-2">
                 {product.name}
                    </h1>
                    <p className="text-xs text-gray-300 mb-4">
                      Premium virtual office with excellent connectivity and modern amenities.
                    </p>
    
                  
                    <button
                      
                      className="md:hidden w-full bg-white  text-black py-2.5 rounded-sm transition"
                    >
                      Browse
                    </button>
                  </div>
                </div>
              ))}
        </div>

      </div>



    </section>
  )
}

export default Categories