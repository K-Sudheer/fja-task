import { Box, Paper, Typography, Grid } from '@mui/material';

const cardData = [
    {
        title: "Customers",
        value: "1,293",
        change: "-36.8%",
        changeColor: "red",
    },
    {
        title: "Customers",
        value: "1,293",
        change: "-36.8%",
        changeColor: "red",
    }
];

const OverviewCards = () => (
    <Grid container spacing={2} mb={2}>
        {cardData.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: "column", gap: 1}}>
                    <Typography variant='subtitle2'>{item.title}</Typography>
                    <Typography variant='h5'>{item.value}</Typography>
                    <Typography sx={{ color: item.changeColor}}>{item.change}</Typography>
                </Paper>
            </Grid>
        ))} 
    </Grid>
);

export default OverviewCards;