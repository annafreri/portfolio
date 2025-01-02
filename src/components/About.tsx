import AboutSection from './AboutSection';
import aboutTexts from '../data/about.json'

export const About = () => (
  <div className="">
    <AboutSection title="Work">

      {aboutTexts.work.map((workplace, index) => (
        <div
          key={index}
          className='grid grid-cols-1 border-t border-zinc-700'
        >

          <h3 className=''>{workplace.title}</h3>

          <div className=''>
            {workplace.texts.map((text, textIndex) => {
              return (
                <div className='grid grid-cols-2 pb-6 '>
                  <p key={textIndex}>{text.subtitle}</p>
                  <p key={textIndex}>{text.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      ))}
    </AboutSection>

    <AboutSection title="Education">

      {aboutTexts.education.map((institution, index) => (
        <div
          key={index}
          className='grid grid-cols-2 border-t border-zinc-700 bg'
        >

          <h3>{institution.title}</h3>

          <div>
            {institution.texts.map((text, textIndex) => {
              return (
                <div className='grid grid-cols-2 pb-6 '>
                  <p key={textIndex}>{text.subtitle}</p>
                  <p key={textIndex}>{text.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      ))}
    </AboutSection>

  </div>
);