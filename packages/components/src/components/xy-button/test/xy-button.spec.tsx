import { newSpecPage } from '@stencil/core/testing'
import { XyButton } from '../xy-button'

describe('xy-button', () => {
	it('renders', async () => {
		const page = await newSpecPage({
			components: [XyButton],
			html: `<xy-button></xy-button>`
		})
		expect(page.root).toEqualHtml(`
      <xy-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xy-button>
    `)
	})
})
