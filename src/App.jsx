
import AboutMeMain from './components/aboutMeSection/aboutMeMain'
import HeroGradient from './components/heroSection/heroGradient'
import HeroMain from './components/heroSection/heroMain'
import Navbar from './components/navbar/navbar'
import SkillsMain from './components/skills/skillsMain'
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
    </main>
  )
}

export default App
