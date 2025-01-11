import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"
import { motion } from "framer-motion";


interface Project {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  categories: string[];
  mainimage?: string;
  mainvideo?: string;
  texts: string[][]
  images: string[]
}

interface Props {
  project: Project | undefined
  isOpen: boolean
  setIsOpen: (x: boolean) => void
}

export default function Drawer(props: Props) {
  const { project, isOpen, setIsOpen } = props
  const buttonClassName = "rounded-full text-black px-5 py-3 hover:bg-gray-100"

  return (
    <div>
      <Sheet
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
        modal={true}
      >
        <SheetContent
          onEscapeKeyDown={() => setIsOpen(false)}
          onPointerDownOutside={() => setIsOpen(false)}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed inset-y-0 right-0 h-full w-full md:w-1/2"
        >
          <div className="flex flex-col gap-5">
            <div className="text-zinc-400">
              <h3>{project?.title}</h3>
            </div>
            {
              project?.texts && project.texts.map((text, index) => {
                const smallTitle = text[0]
                const description = text[1]
                return (
                  <div key={index}>
                    <p className="text-zinc-600">{smallTitle}</p>
                    <p className="text-zinc-400">{description}</p>
                  </div>
                )
              })
            }
          </div>

          <div className="mt-6">
            {
              project?.images && project.images.map((path, index) => {
                return (
                  <img
                    key={index}
                    src={path}
                    alt={`Project image ${index + 1}`}
                    className="pb-2"
                  />
                )
              })
            }
          </div>

          <motion.div
            className="fixed bottom-8 left-0 right-0 mx-auto w-fit px-1 py-1 bg-gray-300/70 rounded-full flex items-center justify-center gap-1 shadow-lg backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1,
              ease: "easeOut"
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className={buttonClassName}
            >
              Close
            </button>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  )
}