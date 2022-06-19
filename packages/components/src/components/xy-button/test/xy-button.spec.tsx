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
})
