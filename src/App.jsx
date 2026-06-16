import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import { Layout } from '@/Components/Layout/Layout'
import { Home } from '@/Pages/Home'
import { Notfound } from '@/Pages/Notfound'
import { Category } from '@/Pages/Category'
import { Meal } from '@/Pages/Meal'

import { ErrorBoundary } from '@/Components/ErrorBoundary/ErrorBoundary'
import { ErrorBoundaryOutlet } from '@/Pages/ErrorBoundaryOutlet'

import { categoriesLoader } from '@/loaders/categoriesLoader'
import { categoryLoader } from '@/loaders/categoryLoader'
import { mealLoader } from '@/loaders/mealLoader'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        // Rout that wrap all routes in ErrorBoundary handler
        Component: ErrorBoundaryOutlet,
        ErrorBoundary: ErrorBoundary,
        children: [
          {
            index: true,
            loader: categoriesLoader,
            Component: Home,
          },
          {
            path: 'Category/:category',
            loader: categoryLoader,
            Component: Category,
          },
          {
            path: 'Meal/:mealId',
            loader: mealLoader,
            Component: Meal,
          },
          {
            path: '*',
            Component: Notfound,
          },
        ],
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
