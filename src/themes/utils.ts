import { themes } from './index'

export const mapTheme = variables => ({
	'--color-primary': variables.primary || '',
	'--color-secondary': variables.secondary || '',
	'--color-positive': variables.positive || '',
	'--color-negative': variables.negative || '',
	'--color-text-primary': variables.textPrimary || '',
	'--color-text-secondary': variables.textSecondary || '',

	'--background-primary': variables.backgroundPrimary || '',
	'--background-secondary': variables.backgroundSecondary || '',
	'--background-tertiary': variables.backgroundTertiary || '',
})

export const applyTheme = theme => {
	const themeObject = mapTheme(themes[theme])
	if (themeObject) {
		Object.keys(themeObject).forEach(property => {
			if (property !== 'name') {
				document.documentElement.style.setProperty(
					property,
					themeObject[property]
				)
			}
		})
	}
}

export const extend = (extending, newTheme) => ({ ...extending, ...newTheme })
