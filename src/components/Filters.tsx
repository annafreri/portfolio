import { cn } from "@/lib/utils";
import { Filter } from "@/types";
import { Dispatch, SetStateAction } from "react";


interface Props {
  currentFilter: Filter,
  setCurrentFilter: Dispatch<SetStateAction<Filter>>
  workRef: React.RefObject<HTMLDivElement>
}

export default function Filters(props: Props) {
  const { currentFilter, setCurrentFilter, workRef } = props;

  const filters: Filter[] = [Filter.all, Filter.development, Filter.concept, Filter.design]

  const onClick = (filter: Filter) => {
    setCurrentFilter(filter)
    workRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // console.log(currentFilter, Filter.all)

  return (
    <>
      {
        filters && filters.map((filter: Filter) => {

          const className = cn({
            '': true,
            'text-zinc-100': filter === currentFilter
          })

          return (
            <h3
              className={className}
              onClick={() => onClick(filter)}
            >
              {filter}
            </h3 >
          )
        })
      }
    </>
  )
}