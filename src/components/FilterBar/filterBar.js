import FilterTab from "./filterTab"

export default function filterBar({filters, removeFilter, clearFilter}) {
  return (
    <header>
        {filters.length > 0 && <div className="filterBar">
          <div>
            {filters.map(filter => {
              return <FilterTab key={filter} removeFilter={removeFilter} filter={filter} />
            })}
          </div>
          
          <p role="button" onClick={clearFilter}>Clear</p>
        </div>}
    </header>
  )
}
