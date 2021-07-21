import { Theme, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type BreakpointOrNull = Breakpoint | null

export const useWidth = (): string => {
	const theme: Theme = useTheme()
	const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse()
	return (
		keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key))
			return !output && matches ? key : output
		}, null) || 'xs'
	)
}

// Render the size depends on the variant and sizeQuery
export const handleSize = (
	size: number | undefined,
	sizeQuery: string,
	percentScreen: number[],
): number => {
	if (size !== undefined) {
		switch (sizeQuery) {
			case 'xs':
				return size * percentScreen[0]
			case 'sm':
				return size * percentScreen[1]
			case 'md':
				return size * percentScreen[2]
			case 'lg':
				return size
			default:
				return size
		}
	}
	return 0
}

// Render the percent of size depends on the variant and sizeQuery
// The size percentage must be a numerical example if the percentage = 60% the sizepercent must be 60
export const handleSizeWithPercent = (
	sizepercent: number,
	sizeQuery: string,
	percentScreen: number[],
): string => {
	if (sizepercent !== undefined) {
		switch (sizeQuery) {
			case 'xs':
				return `${sizepercent * percentScreen[0]}%`
			case 'sm':
				return `${sizepercent * percentScreen[1]}%`
			case 'md':
				return `${sizepercent * percentScreen[2]}%`
			case 'lg':
				return `${sizepercent}%`
			default:
				return `${sizepercent}%`
		}
	}
	return `${0}%`
}
