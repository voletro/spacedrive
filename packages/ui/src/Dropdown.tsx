import { ChevronDownIcon } from '@heroicons/react/solid';
import * as DropdownPrim from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import React from 'react';

import { Button } from './Button';

type Section = {
	name: string;
	icon?: React.ReactElement;
	selected?: boolean;
	onPress?: () => any;
}[];

export interface DropdownProps {
	items: Section[];
	buttonText?: string;
	buttonProps?: React.ComponentProps<typeof Button>;
	buttonComponent?: React.ReactNode;
	buttonIcon?: any;
	className?: string;
	itemsClassName?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
	return (
		<DropdownPrim.Root>
			<div className="relative flex w-full text-left mt-2">
				<DropdownPrim.Trigger asChild>
					{props.buttonComponent || (
						<Button size="sm" {...props.buttonProps}>
							{props.buttonIcon}
							{props.buttonText && (
								<>
									<span className="w-32 truncate"> {props.buttonText}</span>
									<div className="flex-grow" />
									{/* <DropdownPrim.Arrow asChild> */}
									<ChevronDownIcon
										className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 "
										aria-hidden="true"
									/>
									{/* </DropdownPrim.Arrow> */}
								</>
							)}
						</Button>
					)}
				</DropdownPrim.Trigger>

				<DropdownPrim.Content
					className={clsx(
						'shadow-2xl min-w-full mt-1 shadow-gray-300 dark:shadow-gray-750 flex flex-col select-none cursor-default bg-gray-50 text-gray-800 border-gray-200 dark:bg-gray-650 dark:text-gray-100 dark:border-gray-550 text-left text-sm rounded gap-1.5 border py-1.5',
						props.itemsClassName
					)}
				>
					{props.items.map((item, index) => (
						<DropdownPrim.Group key={index} className="flex items-stretch flex-col gap-0.5">
							{index !== 0 && (
								<DropdownPrim.DropdownMenuSeparator className="border-0 border-b border-b-gray-300 dark:border-b-gray-550 mx-2" />
							)}

							{item.map((button, index) => (
								<DropdownPrim.Item key={index} asChild>
									<button
										onClick={button.onPress}
										style={{
											font: 'inherit',
											textAlign: 'inherit'
										}}
										className={clsx(
											'focus:outline-none group cursor-default flex-1 px-1.5 py-0 group-first:pt-1.5'
										)}
									>
										<DropdownPrim.ItemIndicator />

										<div className="px-1.5 py-[0.4em] group-focus:bg-gray-150 group-hover:bg-gray-150 dark:group-focus:bg-gray-550 dark:group-hover:bg-gray-550 flex flex-row gap-2.5 items-center rounded-sm">
											{button.icon &&
												React.isValidElement(button.icon) &&
												React.cloneElement<any>(button.icon, {
													size: 18,
													className: clsx({
														// 'dark:text-gray-100': active,
														// 'text-gray-600 dark:text-gray-200': !active
													})
												})}

											<span className="leading-snug text-left flex-grow text-[14px] font-normal">
												{button.name}
											</span>

											<DropdownPrim.ItemIndicator />
										</div>
									</button>
								</DropdownPrim.Item>
							))}
						</DropdownPrim.Group>
					))}
				</DropdownPrim.Content>
			</div>
		</DropdownPrim.Root>
	);
};
