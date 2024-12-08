
import Link from "next/link";
import BannerIcon from './BannerIcon'
const Banner = () => {
  return (
<div className='max-w-screen-xl mx-auto framer-animation' >
            <div className=" text-white min-h-screen  flex flex-col justify-center items-start py-16 md:py-36">
                {/* Introductory Text */}
                <p className="text-[#C8C8CF]  font-semibold mb-2 text-xl pt-28">Hey I&apos;m Shamim Salaudin.</p>

                {/* Main Title */}
                <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5] ">
                    A Full Stack Developer & Entrepreneur Currently <br/>
                    <span className="text-gray-400 ">Based on Tamil Nadu</span>
                </h1>

                {/* Visit Link Button */}
                <div className="mt-12 mb-28">
                    <Link
                        href="#"
                        className="inline-block bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Visit Link
                    </Link>
                </div>
                {/* logo animation */}
                <BannerIcon></BannerIcon>

            </div>
        </div>
  );
};

export default Banner;
