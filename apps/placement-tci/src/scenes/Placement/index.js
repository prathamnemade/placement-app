import { Layout } from 'antd';
import React from 'react';
import { FileList, FileListTitles, FileListTitleSearch, Filter } from '../../components/Placement';
import './index.scss';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export const PlacementPage = (props) => {
	const [files, setFiles] = React.useState()

	React.useState(() => {
		setFiles(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'])
	}, [])

	console.log("aa")
	if (!files) return 'loading...';

	return (
		<Layout className="placement-layout">
			{/* remove this once we will merge with tapan header  */}
			<Layout.Header
				style={{
					position: 'fixed',
					zIndex: "1",
					width: "100%",
					height: "70px",
					background: '#333'
				}}
			/>
			<Layout>
				<Filter />
				<Layout
					className="placement-content-wrapper"
					style={{ marginLeft: 236, marginTop: 70 }}
				>
					<Layout.Content className="placement-content">
						<FileListTitleSearch />
						<FileListTitles />
						<FileList files={files} />
					</Layout.Content>
				</Layout>
			</Layout>
		</Layout>

	)
}