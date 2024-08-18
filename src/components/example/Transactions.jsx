import { Fragment } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Divider,
    useTheme
} from "@mui/material";
import { tokens } from "../../theme";
import { mockDataMesageValue } from "../../data/mockDataMessage";

const Transactions = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box 
            backgroundColor={colors.primary[400]}
             height="390px"
            overflow="auto"
        >
            <List >
                <ListItem>
                    <ListItemText primary="Message box" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider />
                {mockDataMesageValue.map((message, i) => (
                    <Box key={message.id}>
                        <ListItem  alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar src={ message.avatar } />
                            </ListItemAvatar>
                            <ListItemText
                                primary={message.name}
                                secondary={
                                    <Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {message.to}
                                        </Typography>
                                        {message.message}
                                    </Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </Box>
                ))}
            </List>
        </Box>
        
    )
}

export default Transactions;