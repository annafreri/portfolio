import AboutSection from './AboutSection';
import aboutTexts from '../data/about.json'

export const About = () => (
  <div className="">
    <AboutSection title="Work">
      <div className='flex flex-col w-full md:w-1/2'>
        {aboutTexts.work.map((workplace, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 mb-8'
          >
            <div className='pb-4'>
              <h3 className=''>{workplace.company}</h3>
              {workplace.roles && workplace.roles.map((role) => {
                const position = role[0]
                const year = role[1]
                return (
                  <h3 className='text-purple-400'>
                    {position}
                    <sup className='text-xs pl-2'>
                      {year}
                    </sup>
                  </h3>
                )
              }
              )}
            </div>

            <div className='flex flex-col'>
              {workplace.texts.map((text, textIndex) => {
                return (
                  <div className='pb-4 '>
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
      <div className='flex flex-col w-full md:w-1/2'>

        {aboutTexts.education.map((institution, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 pb-4'
          >

            <h3 className=''>{institution.school}</h3>
            <h3 className='text-purple-400'>
              {institution.title}
              <sup className='text-xs pl-2'>
                {institution.year}
              </sup>
            </h3>


          </div>
        ))}
      </div>
    </AboutSection>

    <AboutSection title="About me">
      <div className='flex flex-col w-full md:w-1/2'>

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
      <div className='flex flex-col w-full md:w-1/2'>

        {aboutTexts.languages.map((language, index) => (
          <div
            key={index}
            className='border-t border-zinc-700 '
          >

            <h3>{language.title}</h3>

            <div>
              {language.texts.map((text, textIndex) => {
                return (
                  <div className='pb-4 flex flex-col'>
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