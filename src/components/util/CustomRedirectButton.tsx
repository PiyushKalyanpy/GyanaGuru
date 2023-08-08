export default function CustomRedirectButton({title, src, blank}: any) {
	return (
		<div>
			<button
				className="flex p-4 m-auto text-white rounded-full shadow-xl shadow-violet-200 bg-violet-500 hover:bg-violet-600"
				onClick={() => {
					window.open(`${src}`, `${blank ? '_blank' : '_self'}`)
				}}>
				{title}
			</button>
		</div>
	)
}
