import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import rehypeSanitize from 'rehype-sanitize'

export function MarkdownEditor({
	defaultValue,
	name,
}: {
	defaultValue?: string
	name: string
}) {
	const [value, setValue] = useState('')
	return (
		<MDEditor
			className="max-h-full overflow-y-auto bg-red-500"
			value={value}
			onChange={setValue}
			previewOptions={{
				rehypePlugins: [[rehypeSanitize]],
			}}
			textareaProps={{
				name: name,
			}}
		/>
	)
}
