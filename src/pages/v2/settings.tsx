import React from 'react'
import {PrimaryLayoutWithSidebar} from '@/components/layouts/exporter'
import {NextPageWithLayout} from '../../util/page'

const Settings: NextPageWithLayout = () => {
	return <section>this is the settings page</section>
}

export default Settings

Settings.getLayout = (page) => {
	return <PrimaryLayoutWithSidebar>{page}</PrimaryLayoutWithSidebar>
}
