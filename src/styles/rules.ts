import { cssRule, cssRaw } from 'typestyle';
import { COLOR_TEXT_PRIMARY, BREAKPOINT_LG} from './constants';

cssRaw(`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;0,800;1,400;1,700&display=swap');
    //@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,400;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:bold,wght@1,400;1,700&display=swap');
    `);

cssRule('html, body, #root, .App-WOP', {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '100%',
    color: COLOR_TEXT_PRIMARY,
    overflowX: 'hidden',
    overflowY: 'auto',
    height: '100%',
    minWidth: '320px',
    fontSize: '16px',
    lineHeight: '22px'
});


cssRule('.container', {
  display: "flex",
  flexFlow: "row wrap",
  width: "auto",
  paddingRight: "var(--bs-gutter-x,.75rem)",
  paddingLeft: "var(--bs-gutter-x,.75rem)",
  marginRight: "auto",
  marginLeft: "auto",
  justifyContent: "space-between"
});

cssRule(`@media (min-width:${BREAKPOINT_LG}px)`, {
  $nest: {
      'p': {
          fontSize: '18px',
          lineHeight: '26px',
      },
      'strong': {
          fontSize: '28px',
          lineHeight: '28px'
      },
      'h2': {
          fontSize: '50px',
          lineHeight: '50px'
      },
      'h3': {
          fontSize: '40px',
          lineHeight: '40px'
      }
  }
});
