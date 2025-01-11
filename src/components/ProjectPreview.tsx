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
    <div className="flex flex-col-reverse md:flex-row gap-6">

      <div className="w-full md:w-2/6">
        <h3 className="text-zinc-400">{title}</h3>
        <h3 className="text-zinc-600 pb-2 md:pb-6">{subtitle}</h3>
        <div className="flex flex-row md:flex-col flex-wrap gap-2 text-zinc-500">
          {tags && tags.map((tag) => {
            return (
              <div className="px-2 py-0.5 rounded-xl border border-zinc-800 w-fit ">
                <p className="text-sm">{tag}</p>
              </div>
            )
          })
          }
        </div>
      </div>

      <button
        className="w-full md:w-4/6 mt-6 md:mt-0"
        onClick={() => { setIsOpen(!isOpen); setCurrentProject(id) }}
      >
        {image !== '' ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="rounded-md"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-md"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </button>

    </div>
  )
}