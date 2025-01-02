interface Props {
  title?: string
  children: React.ReactNode
}

export default function AboutSection(props: Props) {
  const { title, children } = props
  return (
    < div className="border-t-4 border-zinc-500 mt-20" >
      {title &&
        <h2 className="text-zinc-400 mb-11">
          {title}
        </h2>
      }
      {children}
    </div >
  )
}