
import AboutMeMain from './components/aboutMeSection/aboutMeMain'
import ContactMeMain from './components/contactMeSection/contactMeMain'
import HeroGradient from './components/heroSection/heroGradient'
import HeroMain from './components/heroSection/heroMain'
import Navbar from './components/navbar/navbar'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import SkillsMain from './components/skills/skillsMain'
import SubSkills from './components/skills/subskills'
import SubHeroMain from './components/subHeroSection/subHeroMain'

function App() {

  return (
    <main className='font-body text-white relative overflow-hidden bg-darkBrown'>
      <Navbar/>
      <HeroMain/>
      <HeroGradient/>
      {/* <SubHeroMain/> */}
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ProjectsMain/>
      <ContactMeMain/>
    </main>
  )
}

export default App
