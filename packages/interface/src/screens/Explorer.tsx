import { useBridgeQuery } from '@sd/client';
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { FileList } from '../components/file/FileList';
import { Inspector } from '../components/file/Inspector';
import { TopBar } from '../components/layout/TopBar';
import { useExplorerState } from '../hooks/useExplorerState';

export const ExplorerScreen: React.FC<{}> = () => {
	let [searchParams] = useSearchParams();
	let path = searchParams.get('path') || '';

	let { id } = useParams();
	let location_id = Number(id);

	const [limit, setLimit] = React.useState(100);

	const { selectedRowIndex } = useExplorerState();

	// Current Location
	const { data: currentLocation } = useBridgeQuery('SysGetLocation', { id: location_id });

	// Current Directory
	const { data: currentDir } = useBridgeQuery(
		'LibGetExplorerDir',
		{ location_id: location_id!, path, limit },
		{ enabled: !!location_id }
	);

	return (
		<div className="relative flex flex-col w-full !bg-[blue]">
			<TopBar className="!sticky top-0 left-0 right-0" />
			<div className="relative flex flex-row w-full max-h-full bg-[green]">
				<FileList location_id={location_id} path={path} limit={limit} />
				{currentDir?.contents && (
					<Inspector
						className=""
						location={currentLocation}
						selectedFile={currentDir.contents[selectedRowIndex]}
						locationId={location_id}
					/>
				)}
			</div>
		</div>
	);
};
