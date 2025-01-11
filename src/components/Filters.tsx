import { cn } from "@/lib/utils";
import { Filter } from "@/types";
import { Dispatch, SetStateAction } from "react";


interface Props {
  currentFilter: Filter,
  setCurrentFilter: Dispatch<SetStateAction<Filter>>
  filterRef: React.RefObject<HTMLDivElement>
}

export default function Filters(props: Props) {
  const { currentFilter, setCurrentFilter, filterRef } = props;

  const filters: Filter[] = [Filter.all, Filter.development, Filter.concept, Filter.design]

  const onClick = (filter: Filter) => {
    setCurrentFilter(filter)
    filterRef.current?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <div>
      {
        filters && filters.map((filter: Filter) => {

          const className = cn({
            'transition-all ease-in-out': true,
            'text-purple-400 pl-2': filter === currentFilter
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
    </div>
  )
}