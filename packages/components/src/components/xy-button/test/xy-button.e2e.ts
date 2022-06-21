import { newE2EPage } from '@stencil/core/testing'

describe('should render xy-button', () => {
	it('renders', async () => {
		const page = await newE2EPage()
		await page.setContent('<xy-button></xy-button>')

		const element = await page.find('xy-button')
		expect(element).toHaveClass('hydrated')

		const button = await page.find('button')
		expect(button).toHaveClasses(['xy-button', 'primary', 'medium'])
	})

	it('should not be click when we set disabled attr', async () => {
		const page = await newE2EPage()
		await page.setContent(`
      <xy-button disabled></xy-button>
    `)

		const button = await page.find('button')
		expect(button).toHaveClass('disabled')

		const disabledButtonClickSpy = await page.spyOnEvent('click')
		expect(disabledButtonClickSpy).toHaveReceivedEventTimes(0)
	})
})
