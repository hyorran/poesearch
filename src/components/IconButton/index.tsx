import * as React from 'react'
import { createStyles, withStyles } from '@material-ui/core/styles'
import { IconButton as MuiIconButton } from '@material-ui/core'

interface Props {
  classes: object
}

const styles = createStyles({})

function IconButton(props: Props): JSX.Element {
  return <MuiIconButton {...props} />
}

export default withStyles(styles)(IconButton)
