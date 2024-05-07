import React, { useState } from 'react';
import {
    Typography,
    Button,
    Box,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: theme.spacing(1),
    },
    button: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
}));

const JobListing = ({ job }) => {
    const classes = useStyles();
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleShowFullDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const truncatedDescription = showFullDescription
        ? job.jobDetailsFromCompany
        : `${job.jobDetailsFromCompany.slice(0, 250)}...`;

    return (
        <Box className={classes.card}>
            <Box display="flex" alignItems="center" mb={1}>
                <img src={job.logoUrl} alt="FamPay" className={classes.logo} />
                <Typography variant="subtitle1" fontWeight="bold">
                    {job.companyName}
                </Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" mb={1}>
                {job.location}
            </Typography>
            <Typography variant="body1" fontWeight="bold" mb={1}>
                {job.minJdSalary} - {job.maxJdSalary} LPA ✅
            </Typography>
            <Typography variant="h6" mb={1}>
                {job.jobRole}
            </Typography>
            <Box className={classes.jobDetails}>
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                />
            </Box>
            <Button color="primary" className={classes.button} onClick={toggleShowFullDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
            </Button>
            <Box mt={2}>
                <Typography variant="body1">Minimum Experience</Typography>
                <Typography variant="body2">{job.minExp}</Typography>
            </Box>
            <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.button}
                href={job.jdLink}
                target="_blank"
            >
                Easy Apply
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
            >
                Unlock referral asks
            </Button>
        </Box>
        // </Grid>
        // </Grid>
    );
};

export default JobListing;




