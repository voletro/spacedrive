import { AppPropsContext, useExplorerStore } from '@sd/client';
import { FilePath } from '@sd/core';
import clsx from 'clsx';
import React, { useContext } from 'react';

import icons from '../../assets/icons';
import { Folder } from '../icons/Folder';

export default function FileThumb(props: {
	file: FilePath;
	locationId: number;
	className?: string;
}) {
	const appProps = useContext(AppPropsContext);
	const { newThumbnails } = useExplorerStore();

	const hasNewThumbnail = !!newThumbnails[props.file.file?.cas_id ?? ''];

	if (props.file.is_dir) {
		return <Folder size={100} />;
	}

	if (appProps?.data_path && (props.file.file?.has_thumbnail || hasNewThumbnail)) {
		return (
			<img
				className={clsx('pointer-events-none z-90', props.className)}
				src={appProps?.convertFileSrc(
					`${appProps.data_path}/thumbnails/${props.locationId}/${props.file.file?.cas_id}.webp`
				)}
			/>
		);
	}

	if (icons[props.file.extension as keyof typeof icons]) {
		let Icon = icons[props.file.extension as keyof typeof icons];
		return <Icon className={clsx('max-w-[170px] w-full h-full', props.className)} />;
	}
	return <div></div>;
}
