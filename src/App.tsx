import { useEffect, useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import ProjectPreview from './components/ProjectPreview'
import ProjectData from './data/project_data.json'
import Drawer from './components/Drawer'
import { About } from './components/About'
import { cn } from './lib/utils'
import Filters from './components/Filters'
import { Filter } from './types'
import AnimatedCursor from 'react-animated-cursor'
import { motion } from "framer-motion";
import SectionTitle from './components/SectionTitle'


function App() {

  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const [navItem, setNavItem] = useState<'work' | 'about' | 'contact' | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentProject, setCurrentProject] = useState<number | null>(null)
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.all)

  const onDownload = () => {
    const pdfUrl = "Anna_freri_CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Anna_freri_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getCurrentProject = () => {
    return ProjectData.find((project) => project.id === currentProject);
  }

  const filteredProjects = currentFilter === Filter.all ? ProjectData : ProjectData.filter(project => project.categories.includes(currentFilter))

  const containerClassName = cn({
    'p-6 transition-all ease-in-out duration-300': true,
    '-translate-x-32 pointer-events-none blur ': isOpen,
  })

  useEffect(() => {
    switch (navItem) {
      case "work":
        workRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        break
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" })
        break
    }
  }, [navItem]);

  const [shouldShowCursor, setShouldShowCursor] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setShouldShowCursor(window.innerWidth >= 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <div className='bg-zinc-900 text-zinc-400 min-h-screen'>

      {
        shouldShowCursor && (
          <AnimatedCursor
            innerSize={4}
            outerSize={48}
            innerStyle={{
              mixBlendMode: 'difference',
              backgroundColor: isOpen ? 'transparent' : 'rgb(211, 211, 211)',
              zIndex: 9999
            }}
            outerStyle={{
              border: '1px solid gray',
              mixBlendMode: 'difference',
              zIndex: 9999

            }}
            color='211, 211, 211'
            outerAlpha={0.1}
            innerScale={1.0}
            outerScale={1.4}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
            ]}
          />
        )}

      {isOpen && (
        <div
          className='z-50 fixed inset-y-0 right-0 w-[50vw]'
        >
          <Drawer
            project={getCurrentProject()}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      )}

      <Nav
        setNavItem={setNavItem}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      <div className={containerClassName}>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1, }}
        >
          <section className='mb-16 hidden md:block'>
            <Header onDownload={onDownload} />
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1, }}
        >
          <section className='w-full md:w-4/5'>
            <h2 className='text-zinc-400'>
              Hello! I'm Anna Freri (🧑🏻‍🦲) a multidisciplinary designer & frontend developer. With a ten year experience in various disciplines and a focus on digital design, I approach each project with curiosity, playfulness and a holistic view on interaction. This is an archive of work.
            </h2>
          </section>
        </motion.div>

        <div ref={workRef}>
          <SectionTitle title='Selected Work' />
        </div>

        <div className='flex flex-row' ref={filterRef}>
          <div className='w-2/5 hidden md:block'>
            <div className='sticky top-0 pt-4'>
              <h3>Filter Projects</h3>
              <Filters
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                filterRef={filterRef}
              />
            </div>
          </div>

          <div
            className='w-full flex flex-col gap-4 pt-4'
          >
            {filteredProjects && filteredProjects.map((project) => {
              return (
                <div>
                  <ProjectPreview
                    id={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    tags={project.tags}
                    categories={project.categories}
                    image={project.mainimage ?? ''}
                    video={project.mainvideo ?? ''}
                    key={project.id}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setCurrentProject={setCurrentProject}
                    currentProject={currentProject}
                  />
                </div>
              )
            })}
          </div>
        </div>

        <div ref={aboutRef}>
          <SectionTitle title='Curriculum Vitae' />
        </div>

        <About />

        <div ref={contactRef}>
          <SectionTitle title="Don't be a stranger" />
        </div>

        <div className='mb-40'>
          <Footer onDownload={onDownload} />
        </div>

      </div>
    </div>
  )
}

export default App
