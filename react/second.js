import React from 'react'
import {FormattedMessage} from 'react-intl'

const SecondStep = ({showMenu}) => (
  <h2 className='dn'>
    <FormattedMessage id="getting-started.congrats"/>
    {showMenu}
  </h2>
)

export default SecondStep
