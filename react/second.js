import React from 'react'
import {FormattedMessage} from 'react-intl'

const SecondStep = ({showMenu}) => (
  <h2 className='green'>
    <FormattedMessage id="getting-started.congrats"/>
    {showMenu && 'menu'}
  </h2>
)

export default SecondStep
