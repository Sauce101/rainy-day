import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import FactoryIcon from '@mui/icons-material/Factory'
import ListItemButton from '@mui/material/ListItemButton'

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const BREWERY = [
    {
      href: 'https://www.tgbrews.com/',
      primary: 'T G Brews',
    },
    {
      href: 'https://www.3floyds.com/',
      primary: '3 Floyds',
    },
    {
      href: 'http://perennialbeer.com/',
      primary: 'Perennial',
    },
    {
      href: 'https://www.cigarcitybrewing.com/',
      primary: 'Cigar City',
    },
    {
      href: 'https://alchemistbeer.com/',
      primary: 'Alchemist',
    },
    {
      href: 'https://anchoragebrewing.company/',
      primary: 'Anchorage',
    },
    {
      href: 'https://treehousebrew.com/',
      primary: 'Tree House',
    },
    {
      href: 'https://www.russianriverbrewing.com/pliny-the-elder/',
      primary: 'Russian River',
    },
    {
      href: 'https://www.greenflashbrew.com/',
      primary: 'Green Flash',
    },
    {
      href: 'https://northcoastbrewing.com/',
      primary: 'North Coast',
    },
  ]

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'right' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: 'white' }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon sx={{ color: 'white' }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List>
        {BREWERY.map((beer, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={beer.href}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <FactoryIcon />
              </ListItemIcon>
              <ListItemText primary={beer.primary} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <div>
      {['right'].map(anchor => (
        <React.Fragment key={anchor}>
          <Button
            aria-label="Menu"
            sx={{ color: 'white' }}
            onClick={toggleDrawer(anchor, true)}
          >
            {/* {anchor} */}
            <MenuIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                // width: 100,
                color: 'white',
                backgroundColor: '#305b52',
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
