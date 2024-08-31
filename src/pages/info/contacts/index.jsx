import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import Header from "../../../components/Header";
import { Box } from "@mui/material";
import { mockDataContacts } from "../../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID", flex: 0.5,
            headerClassName: 'super-app-theme--header',
        },
        {
            field: "registrarId",
            headerName: "Registrar ID",
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
        headerAlign: "left",
      headerClassName: 'super-app-theme--header',
      align: "left",
    },
    {
      field: "phone",
        headerName: "Phone Number",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: "email",
        headerName: "Email",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: "address",
        headerName: "Address",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: "city",
        headerName: "City",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    {
      field: "zipCode",
        headerName: "Zip Code",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    ];
    
    return (
        <Box m="20px">
            <Header
                title="CONTACTS"
                subtitle="List of Contacts for Future Reference"
            />
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
                    "& .MuiButton-root": {
                        color: colors.primary[100]
                    }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{ toolbar: { csvOptions: { disableToolButton: true }, printOptions: { disableToolButton: true } } }}
                    disableColumnMenu
                />
            </Box>
        </Box>
    )
}

export default Contacts;