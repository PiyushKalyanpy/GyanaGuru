import React, {useState} from 'react'
import {useContext} from 'react'
import {CourseContext} from '@/context/CourseContext'

const AddDesign = () => {
	const [design, setDesign] = useState({
		id: '',
		iframeUrl: '',
		implementationUrl: '',
		issueUrl: '',
	})

	const {addDesign} = useContext(CourseContext)

	const isFormFilled = Object.values(design).every((x) => x !== '')

	const handleSubmit = (e: any) => {
		e.preventDefault()
		if (isFormFilled) {
			addDesign(design.id, design)
		}
	}

	return (
		<div className="w-full m-5 ">
			<div className="flex justify-center">
				<form className="w-1/2">
					<div className="flex flex-col gap-4">
						<label className="text-lg font-medium ">Design Name</label>
						<input
							type="text"
							value={design.id}
							onChange={(e) => setDesign({...design, id: e.target.value})}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>

						<label className="text-lg font-medium ">Iframe Url</label>
						<input
							type="text"
							value={design.iframeUrl}
							onChange={(e) =>
								setDesign({
									...design,
									iframeUrl: e.target.value,
								})
							}
							className="p-2 border-2 rounded-lg border-zinc-100"
						/>
						<label className="text-lg font-medium ">Implementation Url</label>
						<textarea
							className="p-2 border-2 rounded-lg border-zinc-100"
							rows={4}
							value={design.implementationUrl}
							onChange={(e) =>
								setDesign({
									...design,
									implementationUrl: e.target.value,
								})
							}></textarea>
						<label className="text-lg font-medium ">Issue Url</label>
						<textarea
							className="p-2 border-2 rounded-lg border-zinc-100"
							rows={4}
							value={design.issueUrl}
							onChange={(e) =>
								setDesign({...design, issueUrl: e.target.value})
							}></textarea>
						<button
							type="submit"
							onClick={handleSubmit}
							className="p-2 text-white bg-black rounded-lg">
							Add design
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddDesign
