import { useState } from 'react'
import { useAsyncValue, useNavigate, useSearchParams } from 'react-router'

import { Card } from '@/Components/Card/Card'
import { Cards } from '@/Components/Cards/Cards'
import { SearchBar } from '@/Components/SearchBar/SearchBar'

import styles from './Categories.module.scss'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'

const paramKey = 'search'

export function Categories() {
  const { categories = [] } = useAsyncValue()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState(
    searchParams.get(paramKey) || '',
  )

  function handleSearchChange(value) {
    const formattedValue = value.trim()
    setSearchParams({ [paramKey]: formattedValue })
    setSearchValue(formattedValue)
  }

  function goToCategory({ title }) {
    navigate(`Category/${title}`)
  }

  const searchedCategories = categories.filter(({ strCategory: title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <div className={styles.categories}>
      <SearchBar value={searchValue} onChange={handleSearchChange} />
      {searchedCategories.length === 0 && categories.length && (
        <EmptyMessage message='No results for your search' />
      )}
      <Cards>
        {searchedCategories.map((category) => {
          const {
            idCategory: id,
            strCategory: title,
            strCategoryThumb: image,
            strCategoryDescription: desc,
          } = category

          return (
            <Card
              key={id}
              id={id}
              title={title}
              image={image}
              desc={desc}
              buttonText='category'
              onClick={goToCategory}
            />
          )
        })}
      </Cards>
    </div>
  )
}
