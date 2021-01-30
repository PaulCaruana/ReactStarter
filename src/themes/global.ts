import { createGlobalStyle } from 'styled-components';
import { Theme } from '@material-ui/core';
import { TypographyProps } from '@material-ui/core/Typography';

export type themeProps = {
  theme: Theme;
};
export default createGlobalStyle`
${({ theme }: themeProps) => `
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: '0.35em';
  }
  body {
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
  }

  a {
    color: ${theme.palette.text.primary};
  }
  ${buildTypographyElements(theme)}
  .viewport-unit {
    font-size: calc(14px + ((100vw - 320px) / ((18 - 14) * 100)));
  }
  @media (max-width: 320px) {
    .viewport-unit {
      font-size: 14px;
    }
  }
  @media (min-width: 1920px) {
    .viewport-unit {
      font-size: 18px;
    }
  }
  `}
`;

function buildTypographyElements(theme: Theme) {
  const selectors = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'body1',
    '.compact': 'body2',
    caption: 'caption',
    '.subtitle': 'subtitle1',
    small: 'subtitle2',
    button: 'button',
  };
  const styles = {
    fontSize: 'font-size',
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  };
  let css = '';
  for (const selectorName of Object.keys(selectors)) {
    let selectorProps = '';
    const variant = selectors[selectorName];
    for (const style of Object.keys(styles)) {
      const attr = `${styles[style]}`;
      const value = `${theme.typography[variant][style]}`;
      const cssProp = `\t${attr}: ${value};\n\r`;
      selectorProps += cssProp;
    }
    const cssSelector = `${selectorName} {\n\r${selectorProps}}\n\r`;
    css += cssSelector;
  }
  console.log(css);
  return css;
}
