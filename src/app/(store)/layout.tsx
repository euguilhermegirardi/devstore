import { CartProvider } from '@/context/cart-context'
import { ReactNode } from 'react'
import Header from '../../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto gap-5 p-8 min-h-screen grid w-full max-w-[1600px] grid-rows-app">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
