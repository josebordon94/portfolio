import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import WorkIcon from '@material-ui/icons/Work'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SchoolIcon from '@material-ui/icons/School'
import { FormattedMessage } from 'react-intl'
import { useLocation } from 'react-router-dom'

const Lista = () => {
  const location = useLocation()
  return (
    <div>
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          replace
          selected={location.pathname === '/'}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText>
            <FormattedMessage id="nav.main" defaultMessage="Sobre mí" />
          </ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/cv"
          replace
          selected={location.pathname === '/cv'}
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText>
            <FormattedMessage id="nav.formation" defaultMessage="Formación" />
          </ListItemText>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/projects"
          replace
          selected={location.pathname === '/projects'}
        >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText>
            <FormattedMessage id="nav.projects" defaultMessage="Proyectos" />
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  )
}

export default Lista
