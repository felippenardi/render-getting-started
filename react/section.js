import React from 'react'
import {FormattedMessage} from 'react-intl'
import PropTypes from 'prop-types'

const Section = ({title, text}) => (
  <div className="w-100 ma4 pa4 bg-near-white">
    <h2 className="">
      {title}
    </h2>
    <p className="">
      {text}
    </p>
  </div>
)

Section.PropTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Section
