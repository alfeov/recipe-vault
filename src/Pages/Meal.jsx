import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'

import { Loader } from '@/Components/Loader/Loader'
import { Meal as MealComponent } from '@/Components/Meal/Meal'

export function Meal() {
  const { meal } = useLoaderData()
  return (
    <Suspense fallback={<Loader margin='5rem auto' />}>
      <Await resolve={meal}>
        <MealComponent />
      </Await>
    </Suspense>
  )
}
