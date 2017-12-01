import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HelpFileRender from '../container/HelpFileRender'


class HelpFile extends Component {
	render() {
		return (
			<div>
				<HelpFileRender name={this.props.name} />
			</div>
		)
	}
}


HelpFile.propTypes = {
	name: PropTypes.string
}

HelpFile.defaultProps = {
	name: ''
}

export default HelpFile;