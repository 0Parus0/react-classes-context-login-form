import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    }
  }

  toggleTheme = () => {
    this.setState((prevState, prevProps) => ({
      isDarkMode: !prevState.isDarkMode
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider;