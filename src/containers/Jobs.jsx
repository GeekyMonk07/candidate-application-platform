import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';
import JobListing from '../components/JobListing';
import FilterForm from '../components/FilterForm';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(4),
    },
    filterContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
    },
    jobsContainer: {
        marginBottom: theme.spacing(4),
    },
}));

const Jobs = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { jobs, loading, error } = useSelector((state) => state.jobs);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        dispatch(fetchJobs({ limit: 10, offset: 0 }));
    }, [dispatch]);

    useEffect(() => {
        if (!loading && !error) {
            setFilteredJobs(jobs);
        }
    }, [jobs, loading, error]);

    const handleApplyFilters = (filters) => {
        const filtered = jobs.filter((job) => {
            const {
                minExp,
                companyName,
                location,
                isRemote,
                techStack,
                role,
                minBasePay,
            } = filters;

            const meetsCriteria =
                (!minExp || job.minExp >= minExp) &&
                (!companyName ||
                    job.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
                (!location ||
                    job.location.toLowerCase().includes(location.toLowerCase())) &&
                (!isRemote ||
                    (isRemote === 'true' && job.location.toLowerCase() === 'remote') ||
                    (isRemote === 'false' && job.location.toLowerCase() !== 'remote')) &&
                (!techStack ||
                    job.jobDetailsFromCompany.toLowerCase().includes(techStack.toLowerCase())) &&
                (!role || job.jobRole.toLowerCase().includes(role.toLowerCase())) &&
                (!minBasePay || job.minJdSalary >= minBasePay);

            return meetsCriteria;
        });
        setFilteredJobs(filtered);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container className={classes.container}>
            <Box className={classes.filterContainer}>
                <FilterForm onApplyFilters={handleApplyFilters} />
            </Box>
            <Grid container spacing={3} className={classes.jobsContainer}>
                {filteredJobs.map((job) => (
                    <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
                        <JobListing job={job} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Jobs;

