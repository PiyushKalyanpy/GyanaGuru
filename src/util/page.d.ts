import type {NextPage} from 'next'
import type {ReactElement, ReactNode, ComponentType} from 'react'

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
	getLayout?: (_page: ReactElement) => ReactNode
	layout?: ComponentType
}
