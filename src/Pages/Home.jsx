import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'

import { Loader } from '@/components/Loader/Loader'
import { Categories } from '@/Components/Categories/Categories'

export function Home() {
  const { categories } = useLoaderData()

  return (
    <Suspense fallback={<Loader margin='5rem auto' />}>
      <Await resolve={categories}>
        <Categories />
      </Await>
    </Suspense>
  )
}
