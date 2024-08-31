import { Box } from "@mui/material";
import Header from "../../../components/Header";
import BarChardCard from "../../../components/example/BarChardCard";
import Grid from '@mui/material/Unstable_Grid2';

const Bar = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <BarChardCard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Bar;