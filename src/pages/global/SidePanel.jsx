import { useState } from "react";
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import avatar1 from '../../assets/profile/avatar-1.jpg';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AppsOutageOutlinedIcon from '@mui/icons-material/AppsOutageOutlined';
import { useTranslation } from 'react-i18next';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to}/>}
        >
        <Typography>{title}</Typography>
    </MenuItem>
  );
}

const SidePanel = ({
    toggled,
    handleToggleSidebar,
    handleBroken,
    broken,
    isCollapsed,
    handleIsCollapsed
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState('Dashboard');
    const { t } = useTranslation();

    const menuItemStyle = {
        button: {
            '&:hover': {
                backgroundColor: colors.primary[400]
            }
        }
    };

    return (
        <Sidebar
            collapsed={isCollapsed}
            transitionDuration={1000}
            toggled={toggled}
            onBackdropClick={() => handleToggleSidebar(false)}
            onBreakPoint={handleBroken}
            breakPoint="md"
            backgroundColor={theme.palette.background.default}
            rootStyles={{
                color: colors.primary[400],
                height: '100vh'
            }}
            >
            <Menu iconShape="square" menuItemStyles={menuItemStyle}>
                <MenuItem
                    icon={isCollapsed ? <MenuOutlinedIcon onClick={ () => handleIsCollapsed(!isCollapsed)} /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                >
                    {!isCollapsed && (
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}/>
                            <IconButton onClick={broken ? () => { handleIsCollapsed(false); handleToggleSidebar(false) } : () => handleIsCollapsed(!isCollapsed)}>
                                <CloseOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={avatar1}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Ed Roh
                            </Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]}>
                                {t('sidepanel.user_profile')}
                            </Typography>
                        </Box>
                    </Box>
                )}
                <Item
                    title={t('sidepanel.dashboard')}
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    {t('sidepanel.info')}
                </Typography>
                <Item
                    title={t('sidepanel.manage_team')}
                    to="/team"
                    icon={<PeopleOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.contacts_information')}
                    to="/contacts"
                    icon={<ContactSupportOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.invoices_balances')}
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    {t('sidepanel.apps')}
                </Typography>
                <Item
                    title={t('sidepanel.profile_form')}
                    to="/form"
                    icon={<PersonOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.calendar')}
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.notification')}
                    to="/notification"
                    icon={<HelpOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Item
                    title={t('sidepanel.table_responsive')}
                    to="/table-responsive"
                    icon={<AppsOutageOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />

                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    {t('sidepanel.charts')}
                </Typography>
                <Item
                    title={t('sidepanel.bar_chart')}
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.pie_chart')}
                    to="/pie"
                    icon={<PieChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.line_chart')}
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title={t('sidepanel.geography_chart')}
                    to="/geography"
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Menu>
        </Sidebar>
    )

    /*return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box 
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={avatar1}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>

                            <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                        >
                        Data
                        </Typography>
                        <Item
                        title="Manage Team"
                        to="/team"
                        icon={<PeopleOutlineOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={<ContactSupportOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );*/
}

export default SidePanel;