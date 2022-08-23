import type {SxProps} from '@mui/system'
import type {Theme} from '@mui/material/styles'

export const ButtonSx: SxProps<Theme> = {
    "&.active": {
        backgroundColor: 'primary.dark',
    },
}

