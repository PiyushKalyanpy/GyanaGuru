import {PdfCard} from '../components'

const PdfContainer = () => {
	return (
		<div className="flex flex-col space-y-2">
			<h3>Pdf</h3>
			<div className="flex flex-col space-y-2 w-full">
				<PdfCard />
			</div>
		</div>
	)
}
export default PdfContainer
