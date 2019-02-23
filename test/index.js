'use strict'

const assert = require('chai').assert
const uuid = require('uuid/v4')
const isHTML = require('is-html')
const isJSON = require('is-json')
const index = require('../src/index')

describe('index()', function() {

	it('should return an error when called without a filePath', async function() {

		return index().then(() => {

			throw new Error('Returned without error')

		}, (err) => {

			assert.strictEqual(err.message, `'filePath' must be a string`)

		})

	})

	it('should return an error when called with invalid options', async function() {

		return index(`${ uuid() }.html`, '').then(() => {

			throw new Error('Returned without error')

		}, (err) => {

			assert.strictEqual(err.message, `'opts' must be undefined or an object`)

		})

	})

	it('should render HTML', async function() {

		this.timeout(50000)

		const result = await index(`${ uuid() }.html`)

		assert.isTrue(isHTML(result))

	})

	it('should render JSON', async function() {

		this.timeout(50000)

		const result = await index(`${ uuid() }.html.json`)

		assert.isTrue(isJSON(result))

	})

})