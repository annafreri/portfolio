import AboutSection from './AboutSection';
import aboutTexts from '../data/about.json'

export const About = () => (
  <div className="">
    <AboutSection title="Work">
      <div className='flex flex-col w-1/2'>
        {aboutTexts.work.map((workplace, index) => (
          <div
            key={index}
            className='border-t border-zinc-700'
          >

            <h3 className=''>{workplace.title}</h3>

            <div className='flex flex-col'>
              {workplace.texts.map((text, textIndex) => {
                return (
                  <div className='pb-6 '>
                    <p key={textIndex}>{text.subtitle}</p>
                    <p key={textIndex}>{text.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </AboutSection>

    <AboutSection title="Education">
      <div className='flex flex-col w-1/2'>

        {aboutTexts.education.map((institution, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 '
          >

            <h3>{institution.title}</h3>

            <div>
              {institution.texts.map((text, textIndex) => {
                return (
                  <div className='pb-6 flex flex-col'>
                    <p key={textIndex}>{text.subtitle}</p>
                    <p key={textIndex}>{text.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </AboutSection>

    <AboutSection title="About me">
      <div className='flex flex-col w-1/2'>

        {aboutTexts.aboutme.map((paragraph, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 '
          >

            <h3>{paragraph.title}</h3>

            <div>
              {paragraph.texts.map((text, textIndex) => {
                return (
                  <div className='pb-6 flex flex-col'>
                    <p key={textIndex}>{text.subtitle}</p>
                    <p key={textIndex}>{text.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </AboutSection>

    <AboutSection title="Languages">
      <div className='flex flex-col w-1/2'>

        {aboutTexts.languages.map((language, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 '
          >

            <h3>{language.title}</h3>

            <div>
              {language.texts.map((text, textIndex) => {
                return (
                  <div className='pb-6 flex flex-col'>
                    <p key={textIndex}>{text.subtitle}</p>
                    <p key={textIndex}>{text.desc}</p>
                  </div>
                )
              })}
            </div>

          </div>
        ))}
      </div>
    </AboutSection>

  </div>
);