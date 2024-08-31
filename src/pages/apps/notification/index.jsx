import { Box, Button, Stack  } from "@mui/material";
import Header from "../../../components/Header";
import Grid from '@mui/material/Unstable_Grid2';
import { NotificationComponent, createNotification } from "../../../components/Notifications";

const Notification = () => {
    return (
        <Box m="20px">
            <Header title="Notification App" subtitle="Notification App" />
            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <Stack direction="row" spacing={2}>
                        <Button
                            onClick={()=> createNotification({type: 'info', title: 'Title Hire', message: 'Info message'})}
                            variant="contained"
                            color="secondary"

                        >
                            Info
                        </Button>
                        <Button
                            onClick={()=> createNotification({type: 'success', title: 'Title Hire', message: 'Success message'})}
                            variant="contained"
                            color="success">
                            Success
                        </Button>
                        <Button
                            onClick={()=> createNotification({type: 'warning', title: 'Title Hire', message: 'Warning message'})}
                            variant="contained"
                            color="warning">
                           Warning
                        </Button>
                        <Button
                            onClick={()=> createNotification({type: 'error', title: 'Title Hire', message: 'Error message'})}
                            variant="contained"
                            color="error">
                           Error
                        </Button>
                    </Stack>
                    
                </Grid>
            </Grid>
            <NotificationComponent />
        </Box>
    )
}

export default Notification;