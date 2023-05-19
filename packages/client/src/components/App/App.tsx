import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider as Router } from 'react-router-dom'
import { useAppDispatch } from '../../store/hooks'
import { fetchUser } from '../../store/userSlice'
import { Main } from '../../layouts/Main'
import { Landing } from '../../pages/Landing'
import { Forum } from '../../pages/Forum'
import { Leaderboard } from '../../pages/Leaderboard'
import { Game } from '../../pages/Game'
import { NotFound } from '../../pages/NotFound'
import { ServerError } from '../../pages/ServerError'
import { Login } from '../../pages/Login'
import { Register } from '../../pages/Register'
import { Profile } from '../../pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        path: '/',
        element: <Landing />,
      },
      {
        path: '/forum',
        element: <Forum />,
      },
      {
        path: '/leaderboard',
        element: <Leaderboard />,
      },
      {
        path: '/game',
        element: <Game />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/500',
    element: <ServerError />,
  },
])

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  return <Router router={router} />
}
