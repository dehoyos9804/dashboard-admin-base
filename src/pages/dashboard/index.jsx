import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import TrafficCard from "../../components/TrafficCard";
import AreaChartCard from "../../components/example/AreaChartCard";
import Transactions from "../../components/example/Transactions";
import ChartCard from "../../components/example/CharCard";
import MultipleBarChar from "../../components/example/MultipleBarChar";
import MultipleLineChar from "../../components/example/MultipleLineChar";

const Dashboard = () => {
    return (
        <Box
            m="20px"
        >
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                {/*<Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>*/}
            </Box>

            {/* GRID & CHARTS */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TrafficCard
                        title="Emails Sent"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TrafficCard
                        title="Sales Obtained"
                        colorCircle="redAccent"
                        valueTrend="431,225"
                        increase="21.3%"
                        trendIcon="down"
                        icon={PointOfSaleIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TrafficCard
                        title="New Clients"
                        colorCircle="blueAccent"
                        valueTrend="32,441"
                        increase="5.3%"
                        trendIcon="up"
                        icon={ PersonAddIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TrafficCard
                        title="Traffic Received"
                        colorCircle="greenAccent"
                        valueTrend="1,325,134"
                        increase="43.5%"
                        trendIcon="up"
                        icon={TrafficIcon}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <AreaChartCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Transactions/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MultipleLineChar />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MultipleBarChar/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <ChartCard/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;