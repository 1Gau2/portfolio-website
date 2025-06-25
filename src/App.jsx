import Aboutmemain from "./component/Aboutme/Aboutmemain";
import ContactMeMain from "./component/Contactmesection/ContactMeMain";
import ExperienceMain from "./component/experiencesection/ExperienceMain";
import FooterMain from "./component/footersection/FooterMain";
import Herogradient from "./component/Herosection/Herogradient";
import Heromain from "./component/Herosection/Heromain";
import Subsection from "./component/Herosection/Subsection";
import Navbarmain from "./component/Navbar/Navbarmain";
import ProjectMain from "./component/Projectsection/ProjectMain";
import MainSkill from "./component/Skillscomp/MainSkill";
import SubSkill from "./component/Skillscomp/SubSkill";

export default function App(){
  return(
    <main className="font-body">
      <Navbarmain/>
      <Heromain/>
      <Herogradient/>
      <Subsection/>
      <Aboutmemain/>
      <MainSkill/>
      <SubSkill/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMeMain/>
      <FooterMain/>
      
      
      
    </main>
  )
}