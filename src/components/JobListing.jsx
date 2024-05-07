import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    Chip,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    jobTitle: {
        fontWeight: 'bold',
    },
    companyName: {
        marginBottom: theme.spacing(1),
    },
    jobDetails: {
        marginBottom: theme.spacing(2),
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    infoChip: {
        marginRight: theme.spacing(1),
    },
    applyButton: {
        marginTop: 'auto',
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
        : `${job.jobDetailsFromCompany.slice(0, 100)}...`;

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.jobTitle}>
                    {job.jobRole}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    className={classes.companyName}
                >
                    {job.companyName}
                </Typography>
                <Box className={classes.jobDetails}>
                    <Typography
                        variant="body2"
                        component="p"
                        dangerouslySetInnerHTML={{ __html: truncatedDescription }}
                    />
                </Box>
                <Box className={classes.infoContainer}>
                    <Chip
                        label={`${job.minExp} - ${job.maxExp} years`}
                        variant="outlined"
                        size="small"
                        className={classes.infoChip}
                    />
                    <Chip
                        label={job.location}
                        variant="outlined"
                        size="small"
                        className={classes.infoChip}
                    />
                    <Chip
                        label={`$${job.minJdSalary} - $${job.maxJdSalary}`}
                        variant="outlined"
                        size="small"
                        className={classes.infoChip}
                    />
                </Box>
            </CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Button
                    variant="contained"
                    color="primary"
                    href={job.jdLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.applyButton}
                >
                    Easy Apply
                </Button>
                <Button color="primary" onClick={toggleShowFullDescription}>
                    {showFullDescription ? 'Show Less' : 'Show More'}
                </Button>
            </Box>
        </Card>
    );
};

export default JobListing;