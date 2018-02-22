import React, {Component} from 'react'
import {ExtensionPoint} from 'render'

export default class Dynamic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userType: 0,
    }
  }

  getSectionsForUserType(userType) {
    switch (userType) {
      case 0: return ['banner', 'description', 'benefits', 'price']
      case 1: return ['banner', 'benefits', 'description', 'price']
      case 2: return ['price', 'banner', 'benefits', 'description']
      case 3: return ['benefits', 'price', 'banner', 'description']
    }
  }

  updateUserType = () => {
    this.setState({
      userType: Math.floor(Math.random()*4),
    })
  }

  render() {
    const {userType} = this.state

    return (
      <article className="bg-serious-black">
        <header className="bg-heavy-rebel-pink sans-serif white">
          <div className="mw8 center pa6 pv6-ns ph7-1">
            <h3 className="f3 fw1 georgia">
              An example showing how to reorder multiple extension points that have a fixed component and/or props.
            </h3>
            <p>User type: {userType}</p>
            <button onClick={this.updateUserType}>Change user type</button>
          </div>
        </header>
        {
          this.getSectionsForUserType(userType).map(s => <ExtensionPoint key={s} id={s}/>)
        }
      </article>
    )
  }
}
