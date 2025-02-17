/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <h3
    {...props}
    sx={{
      mt: props.mt,
      textAlign: 'center',
      display: 'inline-block',
      outline: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: '300',
      borderRadius: '8px',
      padding: '15px 70px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s',
      background: '#ec5d25',
      color: '#fff',
    }}
  />
