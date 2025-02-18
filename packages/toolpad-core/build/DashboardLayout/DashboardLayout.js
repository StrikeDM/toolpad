'use client';

var _MenuOpenIcon, _MenuIcon, _Toolbar;
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { BrandingContext, NavigationContext, WindowContext } from "../shared/context.js";
import { Account } from "../Account/index.js";
import { DashboardSidebarSubNavigation } from "./DashboardSidebarSubNavigation.js";
import { ToolbarActions } from "./ToolbarActions.js";
import { AppTitle } from "./AppTitle.js";
import { getDrawerSxTransitionMixin, getDrawerWidthTransitionMixin } from "./utils.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AppBar = styled(MuiAppBar)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1
}));
/**
 *
 * Demos:
 *
 * - [Dashboard Layout](https://mui.com/toolpad/core/react-dashboard-layout/)
 *
 * API:
 *
 * - [DashboardLayout API](https://mui.com/toolpad/core/api/dashboard-layout)
 */
function DashboardLayout(props) {
  const {
    children,
    branding: brandingProp,
    navigation: navigationProp,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    sidebarExpandedWidth = 320,
    slots,
    slotProps,
    sx
  } = props;
  const theme = useTheme();
  const brandingContext = React.useContext(BrandingContext);
  const navigationContext = React.useContext(NavigationContext);
  const appWindowContext = React.useContext(WindowContext);
  const branding = {
    ...brandingContext,
    ...brandingProp
  };
  const navigation = navigationProp ?? navigationContext;
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React.useState(false);
  const isOverSmViewport = useMediaQuery(theme.breakpoints.up('sm'), appWindowContext && {
    matchMedia: appWindowContext.matchMedia
  });
  const isOverMdViewport = useMediaQuery(theme.breakpoints.up('md'), appWindowContext && {
    matchMedia: appWindowContext.matchMedia
  });
  const isNavigationExpanded = isOverMdViewport ? isDesktopNavigationExpanded : isMobileNavigationExpanded;
  const setIsNavigationExpanded = React.useCallback(newExpanded => {
    if (isOverMdViewport) {
      setIsDesktopNavigationExpanded(newExpanded);
    } else {
      setIsMobileNavigationExpanded(newExpanded);
    }
  }, [isOverMdViewport]);
  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] = React.useState(isNavigationExpanded);
  React.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyExpanded(false);
    return () => {};
  }, [isNavigationExpanded, theme]);
  const selectedItemIdRef = React.useRef('');
  const handleSetNavigationExpanded = React.useCallback(newExpanded => () => {
    setIsNavigationExpanded(newExpanded);
  }, [setIsNavigationExpanded]);
  const toggleNavigationExpanded = React.useCallback(() => {
    setIsNavigationExpanded(!isNavigationExpanded);
  }, [isNavigationExpanded, setIsNavigationExpanded]);
  const handleNavigationLinkClick = React.useCallback(() => {
    selectedItemIdRef.current = '';
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);

  // If useEffect was used, the reset would also happen on the client render after SSR which we don't need
  React.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = '';
    }
  }, [navigation]);
  const isDesktopMini = !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini = !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const getMenuIcon = React.useCallback(isExpanded => {
    const expandMenuActionText = 'Expand';
    const collapseMenuActionText = 'Collapse';
    return /*#__PURE__*/_jsx(Tooltip, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1000,
      children: /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(IconButton, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: toggleNavigationExpanded,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = /*#__PURE__*/_jsx(MenuOpenIcon, {})) : _MenuIcon || (_MenuIcon = /*#__PURE__*/_jsx(MenuIcon, {}))
        })
      })
    });
  }, [toggleNavigationExpanded]);
  const hasDrawerTransitions = isOverSmViewport && (!disableCollapsibleSidebar || isOverMdViewport);
  const ToolbarActionsSlot = slots?.toolbarActions ?? ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? Account;
  const SidebarFooterSlot = slots?.sidebarFooter ?? null;
  const getDrawerContent = React.useCallback((isMini, viewport) => /*#__PURE__*/_jsxs(React.Fragment, {
    children: [_Toolbar || (_Toolbar = /*#__PURE__*/_jsx(Toolbar, {})), /*#__PURE__*/_jsxs(Box, {
      component: "nav",
      "aria-label": `${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`,
      sx: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'auto',
        pt: navigation[0]?.kind === 'header' && !isMini ? 0 : 2,
        ...(hasDrawerTransitions ? getDrawerSxTransitionMixin(isNavigationFullyExpanded, 'padding') : {})
      },
      children: [/*#__PURE__*/_jsx(DashboardSidebarSubNavigation, {
        subNavigation: navigation,
        onLinkClick: handleNavigationLinkClick,
        isMini: isMini,
        isFullyExpanded: isNavigationFullyExpanded,
        hasDrawerTransitions: hasDrawerTransitions,
        selectedItemId: selectedItemIdRef.current
      }), SidebarFooterSlot ? /*#__PURE__*/_jsx(SidebarFooterSlot, {
        mini: isMini,
        ...slotProps?.sidebarFooter
      }) : null]
    })]
  }), [SidebarFooterSlot, handleNavigationLinkClick, hasDrawerTransitions, isNavigationFullyExpanded, navigation, slotProps?.sidebarFooter]);
  const getDrawerSharedSx = React.useCallback((isMini, isTemporary) => {
    const drawerWidth = isMini ? 64 : sidebarExpandedWidth;
    return {
      displayPrint: 'none',
      width: drawerWidth,
      flexShrink: 0,
      ...getDrawerWidthTransitionMixin(isNavigationExpanded),
      ...(isTemporary ? {
        position: 'absolute'
      } : {}),
      [`& .MuiDrawer-paper`]: {
        position: 'absolute',
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundImage: 'none',
        ...getDrawerWidthTransitionMixin(isNavigationExpanded)
      }
    };
  }, [isNavigationExpanded, sidebarExpandedWidth]);
  const layoutRef = React.useRef(null);
  return /*#__PURE__*/_jsxs(Box, {
    ref: layoutRef,
    sx: {
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
      ...sx
    },
    children: [/*#__PURE__*/_jsx(AppBar, {
      color: "inherit",
      position: "absolute",
      sx: {
        displayPrint: 'none'
      },
      children: /*#__PURE__*/_jsx(Toolbar, {
        sx: {
          backgroundColor: 'inherit',
          mx: {
            xs: -0.75,
            sm: -1.5
          }
        },
        children: /*#__PURE__*/_jsxs(Stack, {
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
          sx: {
            flexWrap: 'wrap',
            width: '100%'
          },
          children: [/*#__PURE__*/_jsxs(Stack, {
            direction: "row",
            children: [!hideNavigation ? /*#__PURE__*/_jsxs(React.Fragment, {
              children: [/*#__PURE__*/_jsx(Box, {
                sx: {
                  mr: {
                    sm: disableCollapsibleSidebar ? 0 : 1
                  },
                  display: {
                    md: 'none'
                  }
                },
                children: getMenuIcon(isMobileNavigationExpanded)
              }), /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: {
                    xs: 'none',
                    md: disableCollapsibleSidebar ? 'none' : 'block'
                  },
                  mr: disableCollapsibleSidebar ? 0 : 1
                },
                children: getMenuIcon(isDesktopNavigationExpanded)
              })]
            }) : null, slots?.appTitle ? /*#__PURE__*/_jsx(slots.appTitle, {
              ...slotProps?.appTitle
            }) :
            /*#__PURE__*/
            /* Hierarchy of application of `branding`
             * 1. Branding prop passed in the `slotProps.appTitle`
             * 2. Branding prop passed to the `DashboardLayout`
             * 3. Branding prop passed to the `AppProvider`
             */
            _jsx(AppTitle, {
              branding: branding,
              ...slotProps?.appTitle
            })]
          }), /*#__PURE__*/_jsxs(Stack, {
            direction: "row",
            alignItems: "center",
            spacing: 1,
            sx: {
              marginLeft: 'auto'
            },
            children: [/*#__PURE__*/_jsx(ToolbarActionsSlot, {
              ...slotProps?.toolbarActions
            }), /*#__PURE__*/_jsx(ToolbarAccountSlot, {
              ...slotProps?.toolbarAccount
            })]
          })]
        })
      })
    }), !hideNavigation ? /*#__PURE__*/_jsxs(React.Fragment, {
      children: [/*#__PURE__*/_jsx(Drawer, {
        container: layoutRef.current,
        variant: "temporary",
        open: isMobileNavigationExpanded,
        onClose: handleSetNavigationExpanded(false),
        ModalProps: {
          keepMounted: true // Better open performance on mobile.
        },
        sx: {
          display: {
            xs: 'block',
            sm: disableCollapsibleSidebar ? 'block' : 'none',
            md: 'none'
          },
          ...getDrawerSharedSx(false, true)
        },
        children: getDrawerContent(false, 'phone')
      }), /*#__PURE__*/_jsx(Drawer, {
        variant: "permanent",
        sx: {
          display: {
            xs: 'none',
            sm: disableCollapsibleSidebar ? 'none' : 'block',
            md: 'none'
          },
          ...getDrawerSharedSx(isMobileMini, false)
        },
        children: getDrawerContent(isMobileMini, 'tablet')
      }), /*#__PURE__*/_jsx(Drawer, {
        variant: "permanent",
        sx: {
          display: {
            xs: 'none',
            md: 'block'
          },
          ...getDrawerSharedSx(isDesktopMini, false)
        },
        children: getDrawerContent(isDesktopMini, 'desktop')
      })]
    }) : null, /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 0
      },
      children: [/*#__PURE__*/_jsx(Toolbar, {
        sx: {
          displayPrint: 'none'
        }
      }), /*#__PURE__*/_jsx(Box, {
        component: "main",
        sx: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'auto'
        },
        children: children
      })]
    })]
  });
}
process.env.NODE_ENV !== "production" ? DashboardLayout.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Branding options for the dashboard.
   * @default null
   */
  branding: PropTypes.shape({
    homeUrl: PropTypes.string,
    logo: PropTypes.node,
    title: PropTypes.string
  }),
  /**
   * The content of the dashboard.
   */
  children: PropTypes.node,
  /**
   * Whether the sidebar should start collapsed in desktop size screens.
   * @default false
   */
  defaultSidebarCollapsed: PropTypes.bool,
  /**
   * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
   * @default false
   */
  disableCollapsibleSidebar: PropTypes.bool,
  /**
   * Whether the navigation bar and menu icon should be hidden
   * @default false
   */
  hideNavigation: PropTypes.bool,
  /**
   * Navigation definition for the dashboard.
   * @default []
   */
  navigation: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
    action: PropTypes.node,
    children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.shape({
      kind: PropTypes.oneOf(['header']).isRequired,
      title: PropTypes.string.isRequired
    }), PropTypes.shape({
      kind: PropTypes.oneOf(['divider']).isRequired
    })]).isRequired),
    icon: PropTypes.node,
    kind: PropTypes.oneOf(['page']),
    pattern: PropTypes.string,
    segment: PropTypes.string,
    title: PropTypes.string
  }), PropTypes.shape({
    kind: PropTypes.oneOf(['header']).isRequired,
    title: PropTypes.string.isRequired
  }), PropTypes.shape({
    kind: PropTypes.oneOf(['divider']).isRequired
  })]).isRequired),
  /**
   * Width of the sidebar when expanded.
   * @default 320
   */
  sidebarExpandedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    appTitle: PropTypes.shape({
      branding: PropTypes.shape({
        homeUrl: PropTypes.string,
        logo: PropTypes.node,
        title: PropTypes.string
      })
    }),
    sidebarFooter: PropTypes.shape({
      mini: PropTypes.bool.isRequired
    }),
    toolbarAccount: PropTypes.shape({
      localeText: PropTypes.shape({
        iconButtonAriaLabel: PropTypes.string,
        signInLabel: PropTypes.string,
        signOutLabel: PropTypes.string
      }),
      slotProps: PropTypes.shape({
        popover: PropTypes.object,
        popoverContent: PropTypes.object,
        preview: PropTypes.object,
        signInButton: PropTypes.object,
        signOutButton: PropTypes.object
      }),
      slots: PropTypes.shape({
        popover: PropTypes.elementType,
        popoverContent: PropTypes.elementType,
        preview: PropTypes.elementType,
        signInButton: PropTypes.elementType,
        signOutButton: PropTypes.elementType
      })
    }),
    toolbarActions: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    appTitle: PropTypes.elementType,
    sidebarFooter: PropTypes.elementType,
    toolbarAccount: PropTypes.elementType,
    toolbarActions: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export { DashboardLayout };