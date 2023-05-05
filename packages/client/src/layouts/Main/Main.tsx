import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '../../components/ErrorBoudary/ErrorBoundary'

export const Main = () => {
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </>
  )
}
