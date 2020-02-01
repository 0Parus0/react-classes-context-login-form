import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'spanish'
    };
  }

  changeLanguage = (event) => {
    this.setState({language: event.target.value});
  }

  render() {
    return (
      <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}


export default LanguageProvider;

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {contextValue => <Component LanguageContext={contextValue} {...props} />}
  </LanguageContext.Consumer>
);
