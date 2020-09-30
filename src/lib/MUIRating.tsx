import React from 'react';
import { IconContainerProps, Rating, RatingProps } from '@material-ui/lab'
import { Box, Typography } from '@material-ui/core';
import { attachField } from 'react-forms'

export interface IMUIRating extends RatingProps {
	icons?: JSX.Element[]
	labels?: string[]
	description?: string
	onRate?: (rating: number | null) => any
}

export const MUIRating: React.FC<IMUIRating> = (props: IMUIRating) => {
	const { icons, defaultValue, labels, description = '', onRate } = props
	const getIconContainer = (IconProps: IconContainerProps) => {
		const { value, ...others } = IconProps
		if (icons && value < icons.length)
			return <span {...others} >{icons[value]}</span>
		if (icons && icons.length)
			return <span {...others} >{icons[0]}</span>
		return <span></span>
	}
	// @ts-ignore
	const handleChange = (event: React.ChangeEvent<{}>, value: number | null) => {
		onRate?.(value)
	}
	const getLabelText = (value: number) => {
		if (labels && value < labels.length)
			return labels[value]
		if (labels && labels.length)
			return labels[0]
		return ""
	}

	const config = {
		IconContainerComponent: icons ? getIconContainer : undefined,
		defaultValue,
		getLabelText: labels ? getLabelText : undefined,
		onChange: handleChange,
		...props
	}
	return <><Box component="fieldset" mb={3} borderColor="transparent">
		<Typography component="legend">{description}</Typography>
		<Rating {...config} />
	</Box> </>
}

attachField('rating', <MUIRating />)