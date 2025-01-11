import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet"


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
        >
          <div
            className="flex flex-col gap-5"
          >
            <div className="text-zinc-400">
              <h3>{project?.title}</h3>
            </div>
            {
              project?.texts && project.texts.map((text) => {
                const smallTitle = text[0]
                const description = text[1]
                return (
                  <div>
                    <p className="text-zinc-600">{smallTitle}</p>
                    <p className="text-zinc-400">{description}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="my-6">
            {
              project?.images && project.images.map((path) => {
                return (
                  <img
                    src={path}
                    className="pb-2"
                  >
                  </img>
                )
              })
            }
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}