import HeroSection from "@/components/AboutUs/Sections/AboutHeader/AboutHeroSection";
import TeamSection from "@/components/AboutUs/Sections/Team/TeamSection";
import WaveBanner from "@/components/AboutUs/Sections/WaveBanner/WaveBannerSection";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";

export default function AboutUsPage() {
    return (    
        <div className="w-full h-full ">
            <Navbar />
            <HeroSection />
            <TeamSection />
            <WaveBanner />
           <div className="bg-[#030013]">
             <Footer />
           </div>
        </div>
    )
}