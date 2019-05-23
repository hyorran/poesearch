import { AppBar as MuiAppBar, withStyles } from '@material-ui/core'
import * as React from 'react'
import createStyles from '@material-ui/core/styles/createStyles'

interface Props {
  classes: object
  className: string
  children?: React.ReactNode
  color?: 'inherit' | 'primary' | 'secondary' | 'default'
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
}

const styles = createStyles({})

function AppBar(props: Props): JSX.Element {
  return <MuiAppBar {...props} />
}

export default withStyles(styles)(AppBar)
