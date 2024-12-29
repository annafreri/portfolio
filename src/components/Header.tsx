export default function Header() {

  const date = new Date(Date.now());
  const selectedDate = (date.toLocaleString('en-GB', { timeZone: 'Europe/Amsterdam' }))
  const time = selectedDate.split(',')
  const displayTime = time[1]

  return (
    <div className="grid grid-cols-4 gap-4 border-t-1 border-gray-500 text-gray-600">
      <div>Work Archive 2024</div>
      <div>Eindhoven, NL</div>
      <div>{displayTime}</div>
      <div>Download CV</div>
    </div>
  )
}