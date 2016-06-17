import React from 'react'
import kebab from 'lodash/kebabCase'

import {langColor, getColorContrast} from '../../utils/color-utils'

class Language extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false
    }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  render() {
    return (
      <a
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        style={this.styles()}
        className="lang"
        href={`https://github.com/trending/${this.props.lang}`}
        target="_blank"
        >{this.props.lang}</a>
    )
  }

  styles(){
    const baseStyle = {
      padding: 2,
      borderRadius: 2,
      textDecoration: 'none'
    }
    const bg = langColor(kebab(this.props.lang.toLowerCase()))
    const color = getColorContrast(bg)
    return this.state.hover ?
      {
        ...baseStyle,
        backgroundColor: `#${color}`,
        color: `#${bg}`
      } :
      {
        ...baseStyle,
        backgroundColor: `#${bg}`,
        color: `#${color}`
      }
  }

  onMouseEnter() {
    this.setState({hover: true})
  }
  onMouseLeave() {
    this.setState({hover: false})
  }
}

export default Language
