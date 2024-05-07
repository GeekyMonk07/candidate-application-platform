import React, { useState } from 'react';
import { FormControl, Select, MenuItem, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    filterForm: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: theme.spacing(0.7),
        borderRadius: theme.spacing(1),
        border: '1px solid #ccc',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    formControl: {
        minWidth: 150,
        '& .MuiOutlinedInput-root': {
            borderRadius: theme.spacing(1),
            fontSize: '0.8rem',
        },
        '& .MuiInputLabel-outlined': {
            fontSize: '0.8rem',
        },
    },
    textField: {
        minWidth: 200,
        '& .MuiOutlinedInput-root': {
            borderRadius: theme.spacing(1),
            fontSize: '0.8rem',
        },
        '& .MuiInputLabel-outlined': {
            fontSize: '0.8rem',
        },
    },
    button: {
        backgroundColor: '#ccc',
        padding: theme.spacing(1.6, 2),
        color: '#333',
        borderRadius: theme.spacing(1),
        border: '1px solid #ccc',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },
}));

const FilterForm = ({ onApplyFilters }) => {
    const classes = useStyles();
    const [role, setRole] = useState('');
    const [numEmployees, setNumEmployees] = useState('');
    const [experience, setExperience] = useState('');
    const [isRemote, setIsRemote] = useState('');
    const [minBasePay, setMinBasePay] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'role':
                setRole(value);
                break;
            case 'numEmployees':
                setNumEmployees(value);
                break;
            case 'experience':
                setExperience(value);
                break;
            case 'isRemote':
                setIsRemote(value);
                break;
            case 'minBasePay':
                setMinBasePay(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            default:
                break;
        }
    };

    const handleApplyFilters = () => {
        const filters = {
            role,
            numEmployees,
            experience,
            isRemote,
            minBasePay,
            companyName,
        };
        onApplyFilters(filters);
    };

    return (
        <div className={classes.filterForm}>
            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    id="role"
                    name="role"
                    value={role}
                    onChange={handleFilterChange}
                    displayEmpty
                    renderValue={(value) => (value ? value : 'Roles')}
                >
                    <MenuItem value="">Roles</MenuItem>
                    <MenuItem value="frontend">Frontend</MenuItem>
                    <MenuItem value="backend">Backend</MenuItem>
                    <MenuItem value="fullstack">Full Stack</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    id="numEmployees"
                    name="numEmployees"
                    value={numEmployees}
                    onChange={handleFilterChange}
                    displayEmpty
                    renderValue={(value) => (value ? value : 'Number Of Employees')}
                >
                    <MenuItem value="">Number Of Employees</MenuItem>
                    <MenuItem value="1-10">1-10</MenuItem>
                    <MenuItem value="11-50">11-50</MenuItem>
                    <MenuItem value="51-200">51-200</MenuItem>
                    <MenuItem value="201-500">201-500</MenuItem>
                    <MenuItem value="501-1000">501-1000</MenuItem>
                    <MenuItem value="1000+">1000+</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    id="experience"
                    name="experience"
                    value={experience}
                    onChange={handleFilterChange}
                    displayEmpty
                    renderValue={(value) => (value ? value : 'Experience')}
                >
                    <MenuItem value="">Experience</MenuItem>
                    <MenuItem value="0-1">0-1 year</MenuItem>
                    <MenuItem value="1-3">1-3 years</MenuItem>
                    <MenuItem value="3-5">3-5 years</MenuItem>
                    <MenuItem value="5-10">5-10 years</MenuItem>
                    <MenuItem value="10+">10+ years</MenuItem>
                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <Select
                    id="isRemote"
                    name="isRemote"
                    value={isRemote}
                    onChange={handleFilterChange}
                    displayEmpty
                    renderValue={(value) => (value ? (value === 'true' ? 'Remote' : 'On-site') : 'Remote')}
                >
                    <MenuItem value="">Remote</MenuItem>
                    <MenuItem value="true">Remote</MenuItem>
                    <MenuItem value="false">On-site</MenuItem>
                </Select>
            </FormControl>

            <TextField
                className={classes.textField}
                label="Minimum Base Pay Salary"
                name="minBasePay"
                value={minBasePay}
                onChange={handleFilterChange}
                variant="outlined"
            />

            <TextField
                className={classes.textField}
                label="Search Company Name"
                name="companyName"
                value={companyName}
                onChange={handleFilterChange}
                variant="outlined"
            />

            <Button variant="contained" className={classes.button} onClick={handleApplyFilters}>
                Search
            </Button>
        </div>
    );
};

export default FilterForm;