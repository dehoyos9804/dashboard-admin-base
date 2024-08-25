import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../data/mockData";
import { DataGrid } from "@mui/x-data-grid";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerClassName: 'super-app-theme--header',
        },
    {
      field: "name",
      headerName: "Name",
        flex: 1,
      headerClassName: 'super-app-theme--header',
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
        type: "number",
      headerClassName: 'super-app-theme--header',
      headerAlign: "left",
      align: "left",
    },
    {
        field: "phone",
        headerClassName: 'super-app-theme--header',
      headerName: "Phone Number",
      flex: 1,
    },
    {
        field: "email",
        headerClassName: 'super-app-theme--header',
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
        flex: 1,
      headerClassName: 'super-app-theme--header',
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
    ];
    
    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiCheckbox-root": {
                        color: `${colors.grey[500]} !important`,
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-scrollbarFiller": {
                        background: colors.primary[400],
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                        background: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.primary[400],
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

export default Team;