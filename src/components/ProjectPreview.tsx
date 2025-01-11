import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface Props {
  id: number,
  title: string,
  subtitle: string,
  categories: string[],
  tags: string[],
  image: string,
  video: string,
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  currentProject: number | null,
  setCurrentProject: Dispatch<SetStateAction<number | null>>
}

export default function ProjectPreview(props: Props) {

  const {
    id,
    title,
    subtitle,
    tags,
    image,
    video,
    isOpen,
    setIsOpen,
    setCurrentProject
  } = props;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">

      <div className="w-full md:w-1/4">
        <h3 className="text-zinc-400">{title}</h3>
        <h3 className="text-zinc-600 pb-2 md:pb-6">{subtitle}</h3>
        <div className="flex flex-row md:flex-col gap-2 text-zinc-500">
          {tags && tags.map((tag) => {
            return (
              <div className="px-1 py-0.5 rounded-md border border-zinc-800 w-fit uppercase ">
                <p className="text-xs">{tag}</p>
              </div>
            )
          })
          }
        </div>
      </div>

      <button
        className="w-full md:w-3/4 mt-6 md:mt-0"
        onClick={() => { setIsOpen(!isOpen); setCurrentProject(id) }}
      >
        {image !== '' ? (
          <img
            src={image}
            alt={title}
            onClick={() => console.log('clicked on project')}
            loading="lazy"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onClick={() => console.log('clicked on project')}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </button>

    </div>
  )
}