import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero-section'
import FeaturedNews from '@/components/sections/featured-news'
import TeamsSection from '@/components/sections/teams-section'
import UpcomingMatches from '@/components/sections/upcoming-matches'
import FeaturedProducts from '@/components/sections/featured-products'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured News */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <FeaturedNews />
          </div>
        </section>
        
        {/* Upcoming Matches */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <UpcomingMatches />
          </div>
        </section>
        
        {/* Teams Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <TeamsSection />
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <FeaturedProducts />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
