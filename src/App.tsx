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

function App() {

  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [navItem, setNavItem] = useState<'work' | 'about' | 'contact' | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentProject, setCurrentProject] = useState<number | null>(null)
  const [currentFilter, setCurrentFilter] = useState<Filter>(Filter.all)

  const getCurrentProject = () => {
    return ProjectData.find((project) => project.id === currentProject);
  }
  const filteredProjects = currentFilter === Filter.all ? ProjectData : ProjectData.filter(project => project.categories.includes(currentFilter))

  const containerClassName = cn({
    'p-6 transition-all': true,
    'translate-x-[-10%] pointer-events-none': isOpen, //TODO Check this
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

  return (
    <div className='bg-zinc-900 text-zinc-400 min-h-screen'>

      {isOpen && (
        <div className='z-50'>
          <Drawer
            project={getCurrentProject()}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
      <div className={containerClassName}>
        <Nav
          navItem={navItem}
          setNavItem={setNavItem}
        />

        <section className='mb-16'>
          <Header />
        </section>

        <section className='w-full md:w-4/5'>
          <h2 className='text-zinc-400'>
            Hello! I'm Anna Freri (🧑🏻‍🦲) a multidisciplinary designer & coding enthusiast. With a ten year experience (🍒) in various disciplines and a focus on digital design, I approach each project with curiosity, playfulness (🧒🏻) and a holistic view (👀) on interaction. This is an archive of work.
          </h2>
        </section>

        <h1 ref={workRef}>Selected Work</h1>
        <div className='flex flex-row'>
          <div className='w-2/5'>

            <div className='sticky top-4'>
              <h3>Filter Projects</h3>
              <Filters
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                workRef={workRef}
              />
            </div>

          </div>

          <div
            className='w-full flex flex-col gap-4'
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

        <h1 ref={aboutRef}>
          Curriculum Vitae
        </h1>
        <About />

        <h1 ref={contactRef}>
          Don't be a stranger
        </h1>
        <Footer />

      </div>
    </div>
  )
}

export default App
