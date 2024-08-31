import { Box } from "@mui/material";
import Header from "../../../components/Header";
import Grid from '@mui/material/Unstable_Grid2';
import MultipleLineChar from "../../../components/example/MultipleLineChar";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <MultipleLineChar/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Line;