import React, {useState, useEffect} from 'react';
import {NavLink as RouterLink, useLocation, NavLinkProps} from 'react-router-dom';
// @mui
import {alpha, styled} from '@mui/material/styles';
import {
  Box,
  List,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemButtonProps, IconButton,
} from '@mui/material';
// utils
import {NAVBAR} from '../config';
// components
import Logo from '../components/Logo';
import Iconify from '../components/Iconify';
//
import {MenuProps, MenuItemProps} from './type';

// ----------------------------------------------------------------------

interface RouterLinkProps extends ListItemButtonProps {
  component?: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;
  to?: string;
  end?: boolean;
}

const ListItemStyle = styled(ListItemButton)<RouterLinkProps>(({theme}) => ({
  ...theme.typography.body2,
  textTransform: 'capitalize',
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function MenuMobile({isOffset, navConfig}: MenuProps) {
  const {pathname} = useLocation();

  const [open, setOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Box
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          ...(isOffset && {color: 'text.primary'}),
        }}
      >
        <IconButton size={'medium'}>
          <Iconify icon={'eva:menu-2-fill'} sx={{width: '52px'}}/>
        </IconButton>
      </Box>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        ModalProps={{keepMounted: true}}
        PaperProps={{sx: {pb: 5, width: 260}}}
      >
        <Logo sx={{mx: 2.5, my: 3}}/>

        <List disablePadding>
          {navConfig.map((link) => (
            <MenuMobileItem key={link.title} item={link} isOpen={open} onOpen={handleOpen}/>
          ))}
        </List>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  onOpen: VoidFunction;
};

function MenuMobileItem({item}: MenuMobileItemProps) {
  const {title, path, icon} = item;

  return (
    <ListItemStyle
      to={path}
      component={RouterLink}
      end={path === '/'}
      sx={{
        '&.active': {
          color: 'primary.main',
          fontWeight: 'fontWeightMedium',
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText disableTypography primary={title}/>
    </ListItemStyle>
  );
}
