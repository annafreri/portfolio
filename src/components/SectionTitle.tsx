import { motion } from "framer-motion";

interface Props {
  title: string
}

export default function SectionTitle(props: Props) {
  const { title } = props
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50, rotate: 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: "circOut" }}
      viewport={{ once: true, amount: 0.3, }}
    >
      {title}
    </motion.h1>
  )
}