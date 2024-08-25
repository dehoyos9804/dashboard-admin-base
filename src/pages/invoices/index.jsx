import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
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
      field: "cost",
        headerName: "Cost",
      headerClassName: 'super-app-theme--header',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
        headerName: "Date",
      headerClassName: 'super-app-theme--header',
      flex: 1,
    },
    ];
    
    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices;