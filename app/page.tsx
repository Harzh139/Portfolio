import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { PMTeardowns } from "@/components/pm-teardowns"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><CaseStudies /></FadeIn>
        <FadeIn><PMTeardowns /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </>
  )
}
