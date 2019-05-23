import * as React from 'react'
import { Drawer as MuiDrawer } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/core/styles'

interface Props {
  children: React.ReactNode
  anchor?: 'left' | 'top' | 'right' | 'bottom'
  ModalProps?: object
  elevation?: number
  open?: boolean
  PaperProps?: object
  SlideProps?: object
  transitionDuration?: number | { enter?: number; exit?: number }
  classes?: object
  variant?: 'permanent' | 'persistent' | 'temporary'
}

const styles = createStyles({})

function Drawer(props: Props): React.ReactElement {
  return <MuiDrawer {...props} />
}

export default withStyles(styles)(Drawer)
