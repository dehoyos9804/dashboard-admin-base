import {Card, CardContent, Icon} from '@mui/material';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from '../theme';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ProgressCircle from "./ProgressCircle";

const TrafficCard = ({
    colorCircle,
    title,
    subtitle,
    valueTrend,
    increase,
    trendIcon,
    icon: Icon
}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const colorThemeCircle = {
        'greenAccent': colors.greenAccent[600],
        'redAccent': colors.redAccent[600],
        'blueAccent': colors.blueAccent[600]
    }

    return (
        <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <Typography variant="overline" display="block" gutterBottom>
                            {title ?? "TRAFFIC"}
                        </Typography>
                        <Typography variant="h4" component="div">
                            { valueTrend ?? "350,897"}
                        </Typography>
                        <Box display="flex" alignItems="center" sx={{ color: trendIcon == 'down' ? colors.redAccent[500] : colors.greenAccent[500] }}>
                            {trendIcon == 'down' ? <ArrowDownwardIcon/>: <ArrowUpwardIcon/>}
                            <Typography variant="body2" component="span">
                                {increase ?? "3.48%"}
                            </Typography>
                            <Typography variant="body2" component="span" color="textSecondary" marginLeft={1}>
                                {subtitle ?? "Since last month"}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: colorCircle ? colorThemeCircle[colorCircle]: colorThemeCircle["greenAccent"],
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {Icon ? <Icon /> : <TrendingUpIcon/>}
                    </Box>
                    
                </Box>
            </CardContent>
        </Card>
    )
}

export default TrafficCard;