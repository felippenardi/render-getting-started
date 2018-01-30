import React, {Component} from 'react'
import {ExtensionPoint} from 'render'
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl'

class GettingStartedIndex extends Component {
  render () {
    return (
      <article className="bg-serious-black">
        <header className="bg-heavy-rebel-pink sans-serif white">
          <div className="mw8 center pa6 pv6-ns ph7-1">
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
        <div className="pa4 ph7-l georgia mw8 center near-white f4">
          {__RUNTIME__.hints.mobile && <FormattedMessage id="getting-started.mobile"/>}
          <ExtensionPoint id="first-step">
          </ExtensionPoint>
          <ExtensionPoint id="second-step">
          </ExtensionPoint>
        </div>
        {this.props.children}
      </article>
    )
  }
}

export default GettingStartedIndex
