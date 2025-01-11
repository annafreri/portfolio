import { Dispatch, SetStateAction } from "react"

interface Props {
  setNavItem: Dispatch<SetStateAction<'work' | 'about' | 'contact' | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

export default function Nav(props: Props) {
  const { setNavItem, isOpen } = props;
  const buttonClassName = "rounded-full text-black px-5 py-3 hover:bg-gray-100";
  const containerClassName = "fixed bottom-8 left-1/2 transform -translate-x-1/2 px-1 py-1 bg-gray-300/70 rounded-full flex items-center justify-center gap-1 shadow-lg backdrop-blur z-[999]";

  if (isOpen) return null;

  return (
    <div className={containerClassName}>
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
    </div>
  );
}