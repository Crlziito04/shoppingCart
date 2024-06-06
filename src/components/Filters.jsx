import { useId } from "react"
import "./Filter.css"
import { useFilters } from "../hooks/useFilter"

export function Filters() {
  const { setFilters, filters } = useFilters()

  const minPriceFilterId = useId()
  const categoryId = useId()


  const handleChangePrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value,
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" id={minPriceFilterId} min='0'
          max='2000' onChange={
            handleChangePrice
          } />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>
          Categoria
        </label>

        <select id={categoryId} onChange={handleChangeCategory}>
          <option value="all">Todas
          </option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">
            Celulares
          </option>
        </select>
      </div>

    </section>
  )
}