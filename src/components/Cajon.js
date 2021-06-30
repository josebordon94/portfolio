import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import Lista from './Lista'

const drawerWidth = 240
const estilos = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#eff1fa',
  },
  toolbar: theme.mixins.toolbar,
}))

const Cajon = (props) => {
  const classes = estilos()
  return (
    <div>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null}
      >
        <div className={classes.toolbar}></div>
        <Divider />
        <Lista />
      </Drawer>
    </div>
  )
}

export default Cajon
