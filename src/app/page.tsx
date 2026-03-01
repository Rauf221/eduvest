import Navbar from '@/components/Navigation/Navbar'
import HeroSection from '@/components/Home/Sections/HomeHero/HomeHeroSection'
import WhyInvestmentSection from '@/components/Home/Sections/WhyInvestment/WhyInvestmentSection'
import HowItWorksSection from '@/components/Home/Sections/HowItWorks/HowItWorksSection'
import MythsSection from '@/components/Home/Sections/Myths/MythsSection'
import Footer from '@/components/Navigation/Footer'

export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection />
      <WhyInvestmentSection />
      <HowItWorksSection />
      <MythsSection />
      <div className='bg-[#000DFF]'>
        <Footer />
      </div>
      
    </main>
  )
}
