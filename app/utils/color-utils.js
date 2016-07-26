import langColors from './lang-color'

/**
 * Returns a color that contrasts well with a provided one
 *
 * @link: https://24ways.org/2010/calculating-color-contrast/
 *
 * @param {String}  hex color to evaluate contrast
 * @returns {String}  contrasting color
 */
export const getColorContrast = (hexcolor) => {
	const r = parseInt(hexcolor.substr(0,2),16);
	const g = parseInt(hexcolor.substr(2,2),16);
	const b = parseInt(hexcolor.substr(4,2),16);
	const yiq = ((r*299)+(g*587)+(b*114))/1000;
	return (yiq >= 128) ? '222' : 'eee';
}

/**
 * Get lang hex color
 *
 * @param {String}  kebab cased lang name
 * @returns {string}  hex color
 */
export const langColor = (lang) => langColors[lang]
