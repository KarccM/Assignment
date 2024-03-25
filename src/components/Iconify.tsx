import { Icon } from '@iconify/react'
import { Box, SxProps } from '@mui/material'

// eslint-disable-next-line react-refresh/only-export-components
export default ({ icon, sx }: { icon: string, sx?: SxProps }) => <Box component={Icon} icon={icon} sx={{ ...sx }} />
