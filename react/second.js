import React from 'react'
import {FormattedMessage} from 'react-intl'

const SecondStep = ({largeText}) => (
  <h2 className={`dn ${largeText && 'f1'}`}>
    <FormattedMessage id="getting-started.congrats"/>
  </h2>
)

export default SecondStep
