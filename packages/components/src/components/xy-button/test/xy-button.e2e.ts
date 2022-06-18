import { newE2EPage } from '@stencil/core/testing'

describe('xy-button', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<xy-button></xy-button>')

		const element = await page.find('xy-button')
		expect(element).toHaveClass('hydrated')
	})
})
