import path from 'path'
import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import cssnano from 'cssnano'

const globalStyle = path.resolve('../themes', 'lib/index.css')

export const config: Config = {
  namespace: 'xy-design-components',
  taskQueue: 'async',
	globalStyle,
	buildEs5: 'prod',
	plugins: [
		sass(),
		postcss({
			plugins: [
				cssnano({
					preset: [
						'default',
						{
							autoprefixer: { browsers: 'last 2 versions', add: true },
							zindex: false
						}
					]
				})
			]
		})
	],
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader'
		},
		{
			type: 'dist-custom-elements'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			serviceWorker: null, // disable service workers
			baseUrl: process.env.NODE_ENV == 'online' ? '/demo' : '',
			copy: [{ src: './html/*', dest: './', warn: true }]
		}
  ],
  testing: {
    browserHeadless: false
  }
}
