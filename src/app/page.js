import Banner from "@/components/home-page/Banner";
import Image from "next/image";
import Projects from "@/components/home-page/Projects";
import WorkExperience from "@/components/home-page/WorkExperience";
import Collaborate from "@/components/home-page/Collaborate";

export default function Home() {
  return (
<div className="bg-[#060608] px-5 max-w-screen-xl max-auto">
 <Banner/>
 <Projects/>
 <WorkExperience/>
 <Collaborate/>
</div>
  );
}
