import React from 'react';

import { SettingsContainer } from '../../../components/settings/SettingsContainer';
import { SettingsHeader } from '../../../components/settings/SettingsHeader';

export default function GeneralSettings() {
	// const { data: volumes } = useBridgeQuery('SysGetVolumes');

	return (
		<SettingsContainer>
			<SettingsHeader
				title="General Settings"
				description="General settings related to this client."
			/>
			{/* <InputContainer title="Volumes" description="A list of volumes running on this device.">
				<div className="flex flex-row space-x-2">
					<div className="flex flex-grow">
						<Listbox
							options={
								volumes?.map((volume) => {
									const name = volume.name && volume.name.length ? volume.name : volume.mount_point;
									return {
										key: name,
										option: name,
										description: volume.mount_point
									};
								}) ?? []
							}
						/>
					</div>
				</div>
			</InputContainer> */}
		</SettingsContainer>
	);
}