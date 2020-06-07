import { themes } from './index'

export const mapTheme = variables => {
	return {
		'--color-primary': variables.primary || '',
		'--color-secondary': variables.secondary || '',
		'--color-positive': variables.positive || '',
		'--color-negative': variables.negative || '',
		'--color-text-primary': variables.textPrimary || '',
		'--background-primary': variables.backgroundPrimary || '',
		'--background-sec': variables.backgroundSecondary || '',
	}
}

export const applyTheme = theme => {
	const themeObject = mapTheme(themes[theme])
	if (!themeObject) return

	const root = document.documentElement

	Object.keys(themeObject).forEach(property => {
		if (property === 'name') {
			return
		}

		root.style.setProperty(property, themeObject[property])
	})
}

export const extend = (extending, newTheme) => {
	return { ...extending, ...newTheme }
}
