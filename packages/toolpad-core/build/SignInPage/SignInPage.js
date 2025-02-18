'use client';

var _Typography;
import * as React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import PasswordIcon from '@mui/icons-material/Password';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AppleIcon from '@mui/icons-material/Apple';
import { alpha, useTheme } from '@mui/material/styles';
import GoogleIcon from "./icons/Google.js";
import FacebookIcon from "./icons/Facebook.js";
import TwitterIcon from "./icons/Twitter.js";
import InstagramIcon from "./icons/Instagram.js";
import TikTokIcon from "./icons/TikTok.js";
import LinkedInIcon from "./icons/LinkedIn.js";
import SlackIcon from "./icons/Slack.js";
import SpotifyIcon from "./icons/Spotify.js";
import TwitchIcon from "./icons/Twitch.js";
import DiscordIcon from "./icons/Discord.js";
import LineIcon from "./icons/Line.js";
import Auth0Icon from "./icons/Auth0.js";
import MicrosoftEntraIdIcon from "./icons/MicrosoftEntra.js";
import CognitoIcon from "./icons/Cognito.js";
import GitLabIcon from "./icons/GitLab.js";
import KeycloakIcon from "./icons/Keycloak.js";
import OktaIcon from "./icons/Okta.js";
import FusionAuthIcon from "./icons/FusionAuth.js";
import { BrandingContext, RouterContext } from "../shared/context.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const mergeSlotSx = (defaultSx, slotProps) => {
  if (Array.isArray(slotProps?.sx)) {
    return [defaultSx, ...slotProps.sx];
  }
  if (slotProps?.sx) {
    return [defaultSx, slotProps?.sx];
  }
  return [defaultSx];
};
const getCommonTextFieldProps = (theme, baseProps = {}) => ({
  required: true,
  fullWidth: true,
  ...baseProps,
  slotProps: {
    ...baseProps.slotProps,
    htmlInput: {
      ...baseProps.slotProps?.htmlInput,
      sx: mergeSlotSx({
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }, typeof baseProps.slotProps?.htmlInput === 'function' ? {} : baseProps.slotProps?.htmlInput)
    },
    inputLabel: {
      ...baseProps.slotProps?.inputLabel,
      sx: mergeSlotSx({
        lineHeight: theme.typography.pxToRem(12),
        fontSize: theme.typography.pxToRem(14)
      }, typeof baseProps.slotProps?.inputLabel === 'function' ? {} : baseProps.slotProps?.inputLabel)
    }
  }
});
const IconProviderMap = new Map([['github', /*#__PURE__*/_jsx(GitHubIcon, {}, "github")], ['credentials', /*#__PURE__*/_jsx(PasswordIcon, {}, "credentials")], ['google', /*#__PURE__*/_jsx(GoogleIcon, {}, "google")], ['facebook', /*#__PURE__*/_jsx(FacebookIcon, {}, "facebook")], ['passkey', /*#__PURE__*/_jsx(FingerprintIcon, {}, "passkey")], ['twitter', /*#__PURE__*/_jsx(TwitterIcon, {}, "twitter")], ['apple', /*#__PURE__*/_jsx(AppleIcon, {}, "apple")], ['instagram', /*#__PURE__*/_jsx(InstagramIcon, {}, "instagram")], ['tiktok', /*#__PURE__*/_jsx(TikTokIcon, {}, "tiktok")], ['linkedin', /*#__PURE__*/_jsx(LinkedInIcon, {}, "linkedin")], ['slack', /*#__PURE__*/_jsx(SlackIcon, {}, "slack")], ['spotify', /*#__PURE__*/_jsx(SpotifyIcon, {}, "spotify")], ['twitch', /*#__PURE__*/_jsx(TwitchIcon, {}, "twitch")], ['discord', /*#__PURE__*/_jsx(DiscordIcon, {}, "discord")], ['line', /*#__PURE__*/_jsx(LineIcon, {}, "line")], ['auth0', /*#__PURE__*/_jsx(Auth0Icon, {}, "auth0")], ['microsoft-entra-id', /*#__PURE__*/_jsx(MicrosoftEntraIdIcon, {}, "microsoft-entra-id")], ['cognito', /*#__PURE__*/_jsx(CognitoIcon, {}, "cognito")], ['gitlab', /*#__PURE__*/_jsx(GitLabIcon, {}, "gitlab")], ['keycloak', /*#__PURE__*/_jsx(KeycloakIcon, {}, "keycloak")], ['okta', /*#__PURE__*/_jsx(OktaIcon, {}, "okta")], ['fusionauth', /*#__PURE__*/_jsx(FusionAuthIcon, {}, "fusionauth")]]);
/**
 *
 * Demos:
 *
 * - [Sign-in Page](https://mui.com/toolpad/core/react-sign-in-page/)
 *
 * API:
 *
 * - [SignInPage API](https://mui.com/toolpad/core/api/sign-in-page)
 */
function SignInPage(props) {
  const {
    providers,
    signIn,
    slots,
    slotProps,
    sx
  } = props;
  const theme = useTheme();
  const branding = React.useContext(BrandingContext);
  const router = React.useContext(RouterContext);
  const passkeyProvider = providers?.find(provider => provider.id === 'passkey');
  const credentialsProvider = providers?.find(provider => provider.id === 'credentials');
  const emailProvider = providers?.find(provider => provider.id === 'nodemailer');
  const [{
    loading,
    selectedProviderId,
    error,
    success
  }, setFormStatus] = React.useState({
    selectedProviderId: undefined,
    loading: false,
    error: '',
    success: ''
  });
  const callbackUrl = router?.searchParams.get('callbackUrl') ?? '/';
  const singleProvider = React.useMemo(() => providers?.length === 1, [providers]);
  const isOauthProvider = React.useCallback(provider => provider && provider !== 'credentials' && provider !== 'nodemailer' && provider !== 'passkey', []);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      ...sx
    },
    children: /*#__PURE__*/_jsx(Container, {
      component: "main",
      maxWidth: "xs",
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          borderRadius: 1,
          p: 4,
          border: '1px solid',
          borderColor: alpha(theme.palette.grey[400], 0.4),
          boxShadow: theme.shadows[4]
        },
        children: [branding?.logo, slots?.title ? /*#__PURE__*/_jsx(slots.title, {}) : /*#__PURE__*/_jsxs(Typography, {
          variant: "h5",
          color: "textPrimary",
          sx: {
            my: theme.spacing(1),
            textAlign: 'center',
            fontWeight: 600
          },
          children: ["Sign in ", branding?.title ? `to ${branding.title}` : null]
        }), slots?.subtitle ? /*#__PURE__*/_jsx(slots.subtitle, {}) : _Typography || (_Typography = /*#__PURE__*/_jsx(Typography, {
          variant: "body2",
          color: "textSecondary",
          gutterBottom: true,
          textAlign: "center",
          children: "Welcome, please sign in to continue"
        })), /*#__PURE__*/_jsxs(Box, {
          sx: {
            mt: theme.spacing(1),
            width: '100%'
          },
          children: [/*#__PURE__*/_jsxs(Stack, {
            spacing: 1,
            children: [error && isOauthProvider(selectedProviderId) ? /*#__PURE__*/_jsx(Alert, {
              severity: "error",
              children: error
            }) : null, Object.values(providers ?? {}).filter(provider => isOauthProvider(provider.id)).map(provider => {
              return /*#__PURE__*/_jsx("form", {
                onSubmit: async event => {
                  event.preventDefault();
                  setFormStatus({
                    error: '',
                    selectedProviderId: provider.id,
                    loading: true
                  });
                  const oauthResponse = await signIn?.(provider, undefined, callbackUrl);
                  setFormStatus(prev => ({
                    ...prev,
                    loading: oauthResponse?.error ? false : prev.loading,
                    error: oauthResponse?.error
                  }));
                },
                children: /*#__PURE__*/_jsx(LoadingButton, {
                  variant: "outlined",
                  type: "submit",
                  fullWidth: true,
                  size: "large",
                  disableElevation: true,
                  name: "provider",
                  color: "inherit",
                  loading: loading && selectedProviderId === provider.id,
                  value: provider.id,
                  startIcon: IconProviderMap.get(provider.id),
                  sx: {
                    textTransform: 'capitalize'
                  },
                  children: /*#__PURE__*/_jsxs("span", {
                    children: ["Sign in with ", provider.name]
                  })
                }, provider.id)
              }, provider.id);
            })]
          }), passkeyProvider ? /*#__PURE__*/_jsxs(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/_jsx(Divider, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'passkey' ? /*#__PURE__*/_jsx(Alert, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, /*#__PURE__*/_jsxs(Box, {
              component: "form",
              onSubmit: async event => {
                setFormStatus({
                  error: '',
                  selectedProviderId: passkeyProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const passkeyResponse = await signIn?.(passkeyProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: passkeyResponse?.error
                }));
              },
              children: [slots?.emailField ? /*#__PURE__*/_jsx(slots.emailField, {
                ...slotProps?.emailField
              }) : /*#__PURE__*/_jsx(TextField, {
                ...getCommonTextFieldProps(theme, {
                  label: 'Email',
                  placeholder: 'your@email.com',
                  id: 'email-passkey',
                  name: 'email',
                  type: 'email',
                  autoComplete: 'email-webauthn',
                  autoFocus: singleProvider,
                  ...slotProps?.emailField
                })
              }), slots?.submitButton ? /*#__PURE__*/_jsx(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/_jsxs(LoadingButton, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                startIcon: IconProviderMap.get(passkeyProvider.id),
                color: "inherit",
                loading: loading && selectedProviderId === passkeyProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: ["Sign in with ", passkeyProvider.name || 'Passkey']
              })]
            })]
          }) : null, emailProvider ? /*#__PURE__*/_jsxs(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/_jsx(Divider, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'nodemailer' ? /*#__PURE__*/_jsx(Alert, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, success && selectedProviderId === 'nodemailer' ? /*#__PURE__*/_jsx(Alert, {
              sx: {
                my: 2
              },
              severity: "success",
              children: success
            }) : null, /*#__PURE__*/_jsxs(Box, {
              component: "form",
              onSubmit: async event => {
                event.preventDefault();
                setFormStatus({
                  error: '',
                  selectedProviderId: emailProvider.id,
                  loading: true
                });
                const formData = new FormData(event.currentTarget);
                const emailResponse = await signIn?.(emailProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: emailResponse?.error,
                  success: emailResponse?.success
                }));
              },
              children: [slots?.emailField ? /*#__PURE__*/_jsx(slots.emailField, {
                ...slotProps?.emailField
              }) : /*#__PURE__*/_jsx(TextField, {
                ...getCommonTextFieldProps(theme, {
                  label: 'Email',
                  placeholder: 'your@email.com',
                  name: 'email',
                  id: 'email-nodemailer',
                  type: 'email',
                  autoComplete: 'email-nodemailer',
                  autoFocus: singleProvider,
                  ...slotProps?.emailField
                })
              }), slots?.submitButton ? /*#__PURE__*/_jsx(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/_jsx(LoadingButton, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                id: "submit-nodemailer",
                color: "inherit",
                loading: loading && selectedProviderId === emailProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: "Sign in with Email"
              })]
            })]
          }) : null, credentialsProvider ? /*#__PURE__*/_jsxs(React.Fragment, {
            children: [singleProvider ? null : /*#__PURE__*/_jsx(Divider, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: "or"
            }), error && selectedProviderId === 'credentials' ? /*#__PURE__*/_jsx(Alert, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, /*#__PURE__*/_jsxs(Box, {
              component: "form",
              onSubmit: async event => {
                setFormStatus({
                  error: '',
                  selectedProviderId: credentialsProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const credentialsResponse = await signIn?.(credentialsProvider, formData, callbackUrl);
                setFormStatus(prev => ({
                  ...prev,
                  loading: false,
                  error: credentialsResponse?.error
                }));
              },
              children: [/*#__PURE__*/_jsxs(Stack, {
                direction: "column",
                spacing: 2,
                sx: {
                  mb: 2
                },
                children: [slots?.emailField ? /*#__PURE__*/_jsx(slots.emailField, {
                  ...slotProps?.emailField
                }) : /*#__PURE__*/_jsx(TextField, {
                  ...getCommonTextFieldProps(theme, {
                    label: 'Email',
                    placeholder: 'your@email.com',
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    autoComplete: 'email',
                    autoFocus: singleProvider,
                    ...slotProps?.emailField
                  })
                }), slots?.passwordField ? /*#__PURE__*/_jsx(slots.passwordField, {
                  ...slotProps?.passwordField
                }) : /*#__PURE__*/_jsx(TextField, {
                  ...getCommonTextFieldProps(theme, {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    id: 'password',
                    placeholder: '*****',
                    autoComplete: 'current-password',
                    ...slotProps?.passwordField
                  })
                })]
              }), /*#__PURE__*/_jsxs(Stack, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                spacing: 1,
                sx: {
                  justifyContent: 'space-between'
                },
                children: [slots?.rememberMe ? /*#__PURE__*/_jsx(slots.rememberMe, {
                  ...slotProps?.rememberMe
                }) : /*#__PURE__*/_jsx(FormControlLabel, {
                  control: /*#__PURE__*/_jsx(Checkbox, {
                    name: "remember",
                    value: "true",
                    color: "primary",
                    sx: {
                      padding: 0.5,
                      '& .MuiSvgIcon-root': {
                        fontSize: 20
                      }
                    }
                  }),
                  label: "Remember me",
                  ...slotProps?.rememberMe,
                  slotProps: {
                    typography: {
                      color: 'textSecondary',
                      fontSize: theme.typography.pxToRem(14)
                    },
                    ...slotProps?.rememberMe?.slotProps
                  }
                }), slots?.forgotPasswordLink ? /*#__PURE__*/_jsx(slots.forgotPasswordLink, {
                  ...slotProps?.forgotPasswordLink
                }) : null]
              }), slots?.submitButton ? /*#__PURE__*/_jsx(slots.submitButton, {
                ...slotProps?.submitButton
              }) : /*#__PURE__*/_jsx(LoadingButton, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "contained",
                disableElevation: true,
                color: "primary",
                loading: loading && selectedProviderId === credentialsProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: 'capitalize'
                },
                ...slotProps?.submitButton,
                children: "Sign in"
              }), slots?.signUpLink ? /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: 'flex',
                  justifyContent: 'center'
                },
                children: slots?.signUpLink ? /*#__PURE__*/_jsx(slots.signUpLink, {
                  ...slotProps?.signUpLink
                }) : null
              }) : null]
            })]
          }) : null]
        })]
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? SignInPage.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The list of authentication providers to display.
   * @default []
   */
  providers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: PropTypes.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: PropTypes.shape({
    emailField: PropTypes.object,
    forgotPasswordLink: PropTypes.object,
    passwordField: PropTypes.object,
    rememberMe: PropTypes.object,
    signUpLink: PropTypes.object,
    submitButton: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: PropTypes.shape({
    emailField: PropTypes.elementType,
    forgotPasswordLink: PropTypes.elementType,
    passwordField: PropTypes.elementType,
    rememberMe: PropTypes.elementType,
    signUpLink: PropTypes.elementType,
    submitButton: PropTypes.elementType,
    subtitle: PropTypes.elementType,
    title: PropTypes.elementType
  }),
  /**
   * The prop used to customize the styles on the `SignInPage` container
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export { SignInPage };