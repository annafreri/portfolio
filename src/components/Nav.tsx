import { Dispatch, SetStateAction } from "react"

interface Props {
  setNavItem: Dispatch<SetStateAction<'work' | 'about' | 'contact' | null>>;
}

export default function Nav({ setNavItem }: Props) {
  const buttonClassName = "rounded-full text-black px-5 py-3 hover:bg-gray-100"
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 px-1 py-1 bg-gray-300/70 rounded-full flex items-center justify-center gap-1 shadow-lg backdrop-blur z-40 transition-all duration-300 ease-in-out">
      <button
        onClick={() => setNavItem("work")}
        className={buttonClassName}
      >
        Work
      </button>
      <button
        onClick={() => setNavItem("about")}
        className={buttonClassName}
      >
        About
      </button>
      <button
        onClick={() => setNavItem("contact")}
        className={buttonClassName}
      >
        Contact
      </button>
    </nav>
  );
}