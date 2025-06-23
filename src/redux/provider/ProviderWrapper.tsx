'use client'


import { Provider as ReduxProvider } from 'react-redux'
import { ReactNode } from 'react'
import { store } from '../store' 

type Props = {
  children: ReactNode
}

const ProviderWrapper = ({ children }: Props) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}

export default ProviderWrapper
