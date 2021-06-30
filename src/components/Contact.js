import React from 'react'
import copy from 'copy-to-clipboard'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
//Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { FormattedMessage } from 'react-intl'

const Contact = () => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }
  //Copy email code
  const copyText = 'josebordon1994@gmail.com'
  //Code for show successfull copy message
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  })
  const copyToClipboard = () => {
    copy(copyText)
    setState({ open: true, vertical: 'top', horizontal: 'center' })
  }

  const { open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Copiado al portapapeles!
        </Alert>
      </Snackbar>
      <List>
        <Divider />
        <ListItem
          button
          component="a"
          href="https://api.whatsapp.com/send?phone=5493794316029"
        >
          <ListItemIcon>
            <WhatsAppIcon />
          </ListItemIcon>
          <ListItemText>+5493794316029</ListItemText>
        </ListItem>
        <ListItem button component="a" href="https://github.com/josebordon94">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText>github.com/josebordon94</ListItemText>
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://www.linkedin.com/in/josebordon94/"
        >
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText>linkedin.com/in/josebordon94</ListItemText>
        </ListItem>
        <ListItem button onClick={copyToClipboard}>
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText>josebordon1994@gmail.com</ListItemText>
        </ListItem>
        <ListItem button component="a" href="documents/CV_Jose_Bordon.pdf">
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText>
            <FormattedMessage
              id="main.pdfCV"
              defaultMessage="Currículum Vitae en PDF"
            />
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Contact
