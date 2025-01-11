import useTime from "@/helpers/useTime"

interface Props {
  onDownload: () => void
}

export default function Header(props: Props) {
  const { onDownload } = props
  const { timeToDisplay } = useTime()
  return (
    <div className="grid grid-cols-4 gap-4 border-t-1 border-gray-500 text-gray-600">
      <div>Work Archive 2024</div>
      <div>Eindhoven, NL</div>
      <div>{timeToDisplay}</div>
      <div
        onClick={onDownload}
        className="cursor-pointer hover:text-gray-50"
      >
        Download CV
      </div>
    </div>
  )
}