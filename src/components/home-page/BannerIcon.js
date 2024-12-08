import Image from "next/image";
import React from "react";

const BannerIcon = () => {
    const icons = [
        "/assets/img/1.png",
        "/assets/img/2.png",
        "/assets/img/3.png",
        "/assets/img/4.png",
        "/assets/img/5.png",
        "/assets/img/6.png",
        "/assets/img/7.png",
        "/assets/img/8.png",
        "/assets/img/9.png",
        "/assets/img/10.png",
        "/assets/img/11.png",
        "/assets/img/12.png",
        "/assets/img/13.png",
        "/assets/img/14.png",
        "/assets/img/15.png",
        
    ];

    return (
        <div className="overflow-hidden w-full framer-animation">
            <div className="flex items-center space-x-16 animate-marquee">
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className="group flex-shrink-0 transform transition-all duration-300 hover:scale-120"
                    >
                        <Image
                        width={600}
                        height={600}
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            className="w-16 h-16 mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerIcon;