import { ReactNode } from 'react'
import Header from '../../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
