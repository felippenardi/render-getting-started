import React, {Component} from 'react'
import {ExtensionPoint} from 'render'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl'
import {compose, graphql} from 'react-apollo'

import saveExtesionPointSettings from './mutations/extensionSettings.graphql'

class GettingStartedIndex extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {saveExtesionPointSettings} = this.props
    const extensionName = 'getting-started/nested-a'
    saveExtesionPointSettings({
      variables: {
        extensionName,
        component: 'vtex.render-getting-started@0.6.3/nestedA',
        props: JSON.stringify({"anderson": "moreira"})
      }
    })
    .then((data) => {
      console.log("OK!", data)
    })
    .catch(err => {
      console.log("ERR!", err)
    })
  }

  render () {
    return (
      <article>
        <header className="bg-light-blue sans-serif">
          <div className="mw9 center pa5 pt4-ns pb4-ns ph7-1 grow">
            <h1 className="f2 f1-m f-headline-l lh-title mv0">
              <FormattedMessage id="getting-started.greeting"/>
            </h1>
            <h3 className="f3 fw1 georgia">
              <FormattedMessage id="getting-started.description"/>
            </h3>
            <h4 className="f6 ttu tracked black-80">
              @renderteam
            </h4>
          </div>
        </header>
        <div className="pa4 ph7-l georgia mw9 center">
          {__RUNTIME__.hints.mobile && <FormattedMessage id="getting-started.mobile"/>}
          <ExtensionPoint id="first-step">
          </ExtensionPoint>
          <ExtensionPoint id="second-step">
          </ExtensionPoint>
        </div>
        <div>
          <button onClick={this.handleClick}>
            EDIT
          </button>
        </div>
        {this.props.children}
      </article>
    )
  }
}


GettingStartedIndex.propTypes = {
  saveExtesionPointSettings: PropTypes.func,
}

export default compose(
  graphql(saveExtesionPointSettings, {name: 'saveExtesionPointSettings'}),
)(GettingStartedIndex)
