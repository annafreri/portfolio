import { useEffect, useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import ProjectPreview from './components/ProjectPreview'
import ProjectData from './data/project_data.json'
import About from './components/About'
import Drawer from './components/Drawer'

function App() {

  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [navItem, setNavItem] = useState<'work' | 'about' | 'contact' | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentProject, setCurrentProject] = useState<number | null>(null)

  const getCurrentProject = () => {
    return ProjectData.find((project) => project.id === currentProject);
  }

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
    <>
      {/* <Cursor isOpen={isOpen} /> */}

      {isOpen && (
        <div className='z-50'>
          <Drawer
            project={getCurrentProject()}
          />
        </div>
      )}
      <div className='m-6'>
        <Nav
          navItem={navItem}
          setNavItem={setNavItem}
        />
        <section>
          <Header />
        </section>

        <section className='w-full md:w-4/5'>
          <h2 className='text-gray-400'>
            Hello! I'm Anna Freri (🧑🏻‍🦲) a multidisciplinary designer & coding enthusiast. With a ten year experience (🍒) in various disciplines and a focus on digital design, I approach each project with curiosity, playfulness (🧒🏻) and a holistic view (👀) on interaction. This is an archive of work.
          </h2>
        </section>

        <h1 ref={workRef}>Selected Work</h1>
        <div className='flex flex-row'>
          <div className='w-2/5 '>
            <div className='sticky top-4'>

              <h3>Filter Projects</h3>

              <h3>Show All</h3>
              <h3>&#x21AA; Development</h3>
              <h3>Concept</h3>
              <h3>Design</h3>

            </div>

          </div>

          <div
            className='w-full flex flex-col gap-4'
          >

            {ProjectData && ProjectData.map((project) => {
              return (
                <div
                  onClick={() => { setIsOpen(!isOpen); setCurrentProject(project.id) }}
                >
                  <ProjectPreview
                    title={project.title}
                    subtitle={project.subtitle}
                    tags={project.tags}
                    categories={project.categories}
                    image={project.mainimage ?? ''}
                    video={project.mainvideo ?? ''}
                    key={project.id}
                  />
                </div>

              )
            })}
          </div>
        </div>

        <h1 ref={aboutRef}>Curriculum Vitae</h1>
        <About />

        <h1 ref={contactRef}>Don't be a stranger</h1>
        <Footer />

      </div>
    </>
  )
}

export default App
