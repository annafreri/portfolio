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
  project: Project | undefined;
}

export default function Drawer(props: Props) {

  const { project } = props

  return (
    <div className="w-1/2 fixed right-0 top-0 h-full bg-gray-900 p-6 overflow-y-scroll">
      <div className="pb-6">
        <h3>{project?.title}</h3>
        <h3 className="text-gray-500">{project?.subtitle}</h3>
      </div>
      <div
        className="flex flex-col gap-4"
      >
        {
          project?.texts && project.texts.map((text) => {
            const smallTitle = text[0]
            const description = text[1]
            return (
              <div>
                <p className="text-gray-500">{smallTitle}</p>
                <p>{description}</p>
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
    </div>
  )
}