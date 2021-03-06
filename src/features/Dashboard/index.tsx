import AppBar from '../../components/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '../../components/Drawer'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, withStyles } from '@material-ui/core/styles'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import Toolbar from '../../components/Toolbar'
import Typography from '@material-ui/core/Typography'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'
import * as React from 'react'
import { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import map from 'lodash/map'

const drawerWidth = 240

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      zIndex: theme.zIndex.drawer + 1,
    },
    appBarShift: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['width', 'margin'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: `calc(100% - ${drawerWidth}px)`,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      whiteSpace: 'nowrap',
      width: drawerWidth,
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing.length * 7,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.length * 9,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing.length * 3,
    },
    chartContainer: {
      marginLeft: -22,
    },
    tableContainer: {
      height: 320,
    },
    h5: {
      marginBottom: theme.spacing.length * 2,
    },
  })

interface Props {
  classes: {
    root: string
    appBar: string
    appBarShift: string
    toolbar: string
    menuButton: string
    menuButtonHidden: string
    title: string
    drawerPaper: string
    drawerPaperClose: string
    toolbarIcon: string
    content: string
  }
}

const features = [
  {
    value: 'weapons',
    label: 'Weapons',
  },
  {
    value: 'armours',
    label: 'Armours',
  },
  {
    value: 'rings',
    label: 'Rings',
  },
]

function Dashboard(props: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  function handleDrawerOpen(): void {
    setOpen(true)
  }

  function handleDrawerClose(): void {
    setOpen(false)
  }

  const { classes } = props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classNames(classes.appBar, open && classes.appBarShift)}>
        <Toolbar disableGutters={!open} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Poe Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        PaperProps={{
          className: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List component="ul">
          {map(
            features,
            (value, index): JSX.Element => (
              <ListItem component="li" button key={index}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={value.label} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main className={classes.content} />
    </div>
  )
}

export default withStyles(styles)(Dashboard)
