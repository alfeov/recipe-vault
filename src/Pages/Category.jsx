import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'

import { Loader } from '@/components/Loader/Loader'
import { Category as CategoryComponent } from '@/Components/Category/Category'

export function Category() {
  const { category } = useLoaderData()

  return (
    <>
      <Suspense fallback={<Loader margin='5rem auto' />}>
        <Await resolve={category}>
          <CategoryComponent />
        </Await>
      </Suspense>
    </>
  )
}
