import React from 'react';
import { ThemeProvider } from 'styled-components'
import formInstructions from '../data/form_instructions.json';
import { Form } from './Form/Form';
import { GlobalStyle } from './GlobalStyle';

function App() {
  const { theme: themeJson, sections } = formInstructions as ReactTest.Job;

  const theme = {
    ...themeJson,
    buttons: {
      primary: {
        color: themeJson.text_color,
        bg: themeJson.primary_color,
      },
      secondary: {
        color: themeJson.text_color,
        bg: themeJson.secondary_color,
      },
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Form sections={sections} />
    </ThemeProvider>
  );
}

export default App;
