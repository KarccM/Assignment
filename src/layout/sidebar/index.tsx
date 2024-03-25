import sidebarItems from './items';
import { Badge, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import Iconify from '../../components/Iconify';

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  return (
    <Stack sx={{ paddingX: 1, flex: 1, minHeight: '100%' }} gap={3}>
      <Typography variant="h6">
        NanoVoltz
      </Typography>
      <Button variant="contained" sx={{ width: 'fit-content' }}>
        <Iconify icon="ic:baseline-plus" sx={{ width: 36, height: 36 }} />
      </Button>
      <Stack sx={{ flex: 1, minHeight: '100%', justifyContent: 'center' }} rowGap={1}>
        {sidebarItems.map(item => {
          return (
            <Tooltip title={item.title} sx={{ width: 'fit-content' }} arrow placement="right">
              <IconButton key={item.id} color={item.isActive ? 'primary' : 'default'}>
                <Badge badgeContent={item.badgeNumber} color='primary' showZero invisible={!item.hasBadge} variant={item.isActive ? 'dot' : 'standard'}>
                  <Iconify icon={item.icon} />
                </Badge>
              </IconButton>
            </Tooltip>
          )
        })}
      </Stack>
    </Stack>
  )
}