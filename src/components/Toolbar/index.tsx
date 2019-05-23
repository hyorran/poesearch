import * as React from 'react'
import { Toolbar as MuiToolbar } from '@material-ui/core'
import { withStyles, createStyles } from '@material-ui/core/styles'

interface Props {
  classes: object
  className: string
  children: React.ReactNode
  component?: React.ElementType<React.HTMLAttributes<HTMLDivElement>>
  disableGutters?: boolean
}

const styles = createStyles({})

function Toolbar(props: Props): JSX.Element {
  return <MuiToolbar {...props} />
}

export default withStyles(styles)(Toolbar)
