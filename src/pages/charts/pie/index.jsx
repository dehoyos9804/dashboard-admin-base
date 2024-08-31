import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Grid from '@mui/material/Unstable_Grid2';
import ChartCard from "../../../components/example/CharCard";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <ChartCard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Pie;