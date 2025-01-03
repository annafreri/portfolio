interface Props {
  title?: string
  children: React.ReactNode
}

export default function AboutSection(props: Props) {
  const { title, children } = props
  return (
    < div className="mt-20 flex flex-row gap-6" >
      <div className="w-1/2">
        {title &&
          <h2 className="text-zinc-400 mb-11 sticky top-4 border-t border-zinc-700">
            {title}
          </h2>
        }
      </div>
      {children}
    </div >
  )
}