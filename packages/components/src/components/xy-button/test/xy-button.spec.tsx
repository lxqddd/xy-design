import { h } from '@stencil/core'
import { newSpecPage } from '@stencil/core/testing'
import { XyButton } from '../xy-button'

describe('xy-button', () => {
	it('should render xy-button component', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button></xy-button>
		})
		expect(page.root).toEqualHtml(`
      <xy-button>
        <button class="xy-button primary medium"></button>
      </xy-button>
    `)
	})

	it('should has a "hello world" as innerText', async () => {
		const content = 'hello world'
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button>{content}</xy-button>
		})
		expect(page.root).toEqualHtml(`
    <xy-button>
      <button class="xy-button primary medium">hello world</button>
    </xy-button>
    `)
	})

	it('should has different size and type', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button type="success" size="small"></xy-button>
		})

		expect(page.root).toEqualHtml(`
      <xy-button>
        <button class="xy-button success small"></button>
      </xy-button>
    `)
	})

	it('should show as a block element when we set attr block equal true', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button block></xy-button>
		})
		expect(page.root).toEqualHtml(`
      <xy-button>
        <button class="xy-button primary medium block"></button>
      </xy-button>
    `)
	})

	it('should show as a round button when we set attr round', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button round></xy-button>
		})

		expect(page.root).toEqualHtml(`
      <xy-button >
        <button class="xy-button primary medium round"></button>
      </xy-button>
    `)
	})

	it('should has a class of disabled', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			template: () => <xy-button disabled></xy-button>
		})
		expect(page.root).toEqualHtml(`
      <xy-button>
        <button class="xy-button primary medium disabled"></button>
      </xy-button>
    `)
	})

	// it('click event should not be called when we set disabled attr', async () => {
	// 	const page = await newSpecPage({
	// 		components: [XyButton],
	// 		template: () => <xy-button disabled></xy-button>
	//   })

	//   page.
	// })
})
