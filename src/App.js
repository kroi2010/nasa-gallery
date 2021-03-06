import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Gallery from './components/Gallery';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    background: #21262d;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    color: #ffffff;
    margin: 0;
  }

  #root{
    padding: 5vh 8vw;
    box-sizing: border-box;
  }

  body, 
  html,
  #root{
    height: 100%;
  }
`

class App extends React.Component{

    render(){
        return(<div>
          <GlobalStyle/>
          <Gallery/>
        </div>
        )
    }
}

export default App;