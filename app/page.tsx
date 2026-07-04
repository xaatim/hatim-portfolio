import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Featured } from '@/components/featured'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
