
import ProjectsCard from "./ProjectsCard.js";

// Main Component
const Projects = () => {
    const caseStudies = [
        {
            imgSrc: "/assets/img/portfolio-1.png",
            title: "Travleazy",
            description: "E-Commerce Website",
        },
        {
            imgSrc: "/assets/img/apcom.jpg",
            title: "Air Pollution COntrol and Monitoring system",
            description: "New Innovative Product",
        },
        {
            imgSrc: "/assets/img/apcomapp.jpg",
            title: "React Application for APCOM",
            description: "Web App Development",
        },
        {
            imgSrc: "/assets/img/publi.png",
            title: "Public Speaking / Resource Person",
            description: "Public Speaking and Guest Lectures",
        }
    ];

    return (
        <div className="max-w-screen-xl mx-auto py-12 md:py-36" id="Projects">
            {/* Heading */}
            <div className="flex flex-wrap gap-3 items-center mb-16">
                <p className="text-white font-bold text-xl">01</p>
                <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">
                    Projects
                </h2>
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {caseStudies.map((study, index) => (
                    <ProjectsCard
                        key={index}
                        imgSrc={study.imgSrc}
                        title={study.title}
                        description={study.description}
                    />
                ))}
            </div>

           
        </div>
    );
};

export default Projects;