import { Component, h, Prop } from '@stencil/core'
import classnames from 'classnames'
import { Size, Type } from './types'

@Component({
	tag: 'xy-button'
})
export class XyButton {
	/**
	 * 按钮类型
	 */
	@Prop() type: Type = 'primary'

	/**
	 * 按钮尺寸
	 */
	@Prop() size: Size = 'medium'

	/**
	 * 是否将按钮展示为块级元素
	 */
	@Prop() block: boolean = false

	/**
	 * 是否是圆形按钮
	 */
	@Prop() circle: boolean = false

	/**
	 * 按钮颜色
	 */
	@Prop() color: string = ''

	/**
	 * 边框是否是虚线
	 */
	@Prop() dashed: boolean = false

	/**
	 * 按钮是否禁用
	 */
	@Prop() disabled: boolean = false

	/**
	 * 按钮是否可以被聚焦
	 */
	@Prop() focusable: boolean = false

	/**
	 * 按钮是否透明
	 */
	@Prop() ghost: boolean = false

	/**
	 * 按钮中icon的位置
	 */
	@Prop() iconPlacement: 'left' | 'right' = 'left'

	/**
	 * 按钮是否显示加载状态
	 */
	@Prop() loading: boolean = false

	/**
	 * 是否显示为圆角按钮
	 */
	@Prop() round: boolean = false

	/**
	 * 是否显示为文本按钮
	 */
	@Prop() text: boolean = false

	private classNames: string = ''

	componentWillLoad() {
		this.initClassNames()
	}

	initClassNames() {
		this.classNames = classnames('xy-button', {
			[`${this.type}`]: this.type,
			[`${this.size}`]: this.size,
			[`${this.block}`]: this.block,
			[`${this.circle}`]: this.circle,
			[`${this.dashed}`]: this.dashed,
			[`${this.disabled}`]: this.disabled,
			[`${this.focusable}`]: this.focusable,
			[`${this.ghost}`]: this.ghost,
			[`${this.round}`]: this.round
		})
	}
	render() {
		return (
			<button class={this.classNames}>
				<slot />
			</button>
		)
	}
}
