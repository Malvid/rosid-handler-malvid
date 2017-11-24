'use strict'

const isPlainObj = require('is-plain-obj')
const malvid = require('malvid')

/**
 * Return the HTML of the UI that can be viewed in the browser.
 * @public
 * @param {String} filePath - Absolute path to file.
 * @param {?Object} opts - Options.
 * @returns {Promise<String>} HTML of the UI or the state as a serialized JSON.
 */
module.exports = async function(filePath, opts = {}) {

	if (typeof filePath!=='string') throw new Error(`'filePath' must be a string`)
	if (isPlainObj(opts)===false && opts!=null) throw new Error(`'opts' must be an object, null or undefined`)

	const result = await malvid(opts)
	const jsonRequest = filePath.substr(-5)==='.json'

	// Return the state when client requests JSON
	if (jsonRequest===true) return JSON.stringify(await result.json)

	// Render the page
	return result.html

}