import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import {InputBase} from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useThemeShadcn } from "../../components/ui/theme-provider";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';

import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';

const countries = [
  { code: 'US', name: 'English', lang: 'en' },
  { code: 'CO', name: 'Español', lang: 'es' },
  { code: 'BR', name: 'Português (Brasil)', lang: 'pt-BR' },
];

const Topbar = ({
    toggled,
    handleToggleSidebar,
    broken
}) => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { setTheme } = useThemeShadcn();
    const [accountEl, setAccountEl] = useState(null);
    const [languageEl, setLanguageEl] = useState(null);
    const { i18n, t } = useTranslation();

    const openAccount = Boolean(accountEl);
    const handleOpenAccount = (event) => {
        setAccountEl(event.currentTarget);
    }
    const handleCloseAccount = () => {
        setAccountEl(null);
    }

    const openLanguage = Boolean(languageEl);
    const handleOpenLanguage = (event) => {
        setLanguageEl(event.currentTarget);
    }
    const handleCloseLanguage= () => {
        setLanguageEl(null);
    }
    

    const handleThemeChange = () => {
        colorMode.toggleColorMode();
        
        // actualizamos el color para la libreria shadch-ui
        setTheme(theme.palette.mode === 'light' ? 'dark': 'ligth');
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        handleCloseLanguage();
    };

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/**sidebar Toolbar */}
            {
                broken && (
                    <Box display="flex">
                        <IconButton onClick={() => handleToggleSidebar(!toggled)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                )
            }
            {/** SEARCH BAR */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder={t('topbar.search')} />
                <IconButton type="button" sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            
            {/**ICONS */}
            <Box display="flex">
                <IconButton onClick={handleThemeChange}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : <LightModeOutlinedIcon />
                    }
                </IconButton>
                <IconButton
                     onClick={handleOpenLanguage}
                >
                    <LanguageOutlinedIcon />
                </IconButton>
                <IconButton
                    onClick={handleOpenAccount}
                >
                    <PersonOutlineOutlinedIcon />
                </IconButton>
                {/**Menu Account */}
                <Menu
                    anchorEl={accountEl}
                    id="account-menu"
                    open={openAccount}
                    onClose={handleCloseAccount}
                    PaperProps={{
                        sx: {
                            backgroundColor: colors.primary[400],
                        },
                    }}
                >
                    <MenuItem onClick={handleCloseAccount}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        {t('topbar.account.my_account')}
                    </MenuItem>
                    <MenuItem onClick={handleCloseAccount}>
                        <ListItemIcon>
                            <PasswordIcon />
                        </ListItemIcon>
                        {t('topbar.account.reset_password')}
                    </MenuItem>
                    <MenuItem onClick={handleCloseAccount}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                            {t('topbar.account.settings')}
                    </MenuItem>
                    <MenuItem onClick={handleCloseAccount}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        {t('topbar.account.logout')}
                    </MenuItem>
                </Menu>
                {/**Fin Menu Account */}

                {/**Menu Language */}
                <Menu
                    anchorEl={languageEl}
                    id="language-menu"
                    open={openLanguage}
                    onClose={handleCloseLanguage}
                    transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                    PaperProps={{
                        sx: {
                            backgroundColor: colors.primary[400],
                        },
                    }}
                >
                    {countries.map((country) => (
                        <MenuItem
                            key={country.code}
                            onClick={() => changeLanguage(country.lang)}
                            selected={i18n.language === country.lang}
                        >
                            <ReactCountryFlag 
                                countryCode={country.code} 
                                svg 
                                style={{
                                    width: '1em',
                                    height: '1em',
                                    marginRight: '10px'
                                }}
                            />
                            <Typography variant="inherit">{country.name}</Typography>
                            {i18n.language === country.lang && (
                            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
                                <CheckIcon />
                            </ListItemIcon>
                            )}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Box>
    )
}

export default Topbar;