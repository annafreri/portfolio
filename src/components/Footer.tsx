export default function Footer() {
  return (
    <div className="pb-24">

      {/* First contact section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 border-t border-zinc-700">
        <div className="flex flex-col space-y-1">
          <h3 className="font-medium">More info</h3>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className=" font-medium mb-2 text-zinc-600">Archives</h3>
          <a
            href="https://www.instagram.com/fish.wish/"
            target="_blank"
            className="hover:text-purple-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://github.com/annafreri"
            target="_blank"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-zinc-600 font-medium">Get in touch</h3>
          <a
            href="https://www.linkedin.com/in/anna-freri/"
            target="_blank"
            className=" hover:text-purple-400 transition-colors"
          >
            Linkedin
          </a>
          <a
            href="mailto:annafreri@yahoo.gr"
            className=" hover:text-purple-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>

      {/* Second contact section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-zinc-700">
        <div className="flex flex-col space-y-1">
          <h3 className="font-medium flex items-center gap-2">
            Eindhoven, NL
          </h3>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-zinc-600 font-medium">Design + Code</h3>
          <a
            href="https://www.linkedin.com/in/anna-freri/"
            target="_blank"
            className=" hover:text-purple-400 transition-colors"
          >
            Anna Freri
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-zinc-600 font-medium">Download CV</h3>
          <a
            onClick={() => console.log('test')}
            target="_blank"
            className=" hover:text-purple-400 transition-colors cursor-pointer"
          >
            annafreri_cv.pdf
          </a>
        </div>
      </div>
    </div>
  )
}