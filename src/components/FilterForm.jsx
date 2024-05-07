import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@material-ui/core';

const FilterForm = ({ onApplyFilters }) => {
    const [minExp, setMinExp] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [isRemote, setIsRemote] = useState('');
    const [techStack, setTechStack] = useState('');
    const [role, setRole] = useState('');
    const [minBasePay, setMinBasePay] = useState('');

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'minExp':
                setMinExp(value);
                break;
            case 'companyName':
                setCompanyName(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'isRemote':
                setIsRemote(value);
                break;
            case 'techStack':
                setTechStack(value);
                break;
            case 'role':
                setRole(value);
                break;
            case 'minBasePay':
                setMinBasePay(value);
                break;
            default:
                break;
        }
    };

    const handleApplyFilters = () => {
        const filters = {
            minExp,
            companyName,
            location,
            isRemote,
            techStack,
            role,
            minBasePay,
        };
        onApplyFilters(filters);
    };

    return (
        <div>
            {/* Render filter input fields */}
            <FormControl>
                <InputLabel id="minExp-label">Minimum Experience</InputLabel>
                <Select
                    labelId="minExp-label"
                    id="minExp"
                    name="minExp"
                    value={minExp}
                    onChange={handleFilterChange}
                >
                    <MenuItem value={0}>0 years</MenuItem>
                    <MenuItem value={1}>1 year</MenuItem>
                    <MenuItem value={2}>2 years</MenuItem>
                    <MenuItem value={3}>3 years</MenuItem>
                    <MenuItem value={4}>4 years</MenuItem>
                    <MenuItem value={5}>5 years</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Company Name"
                name="companyName"
                value={companyName}
                onChange={handleFilterChange}
            />
            <TextField
                label="Location"
                name="location"
                value={location}
                onChange={handleFilterChange}

            />
            <FormControl>
                <InputLabel id="isRemote-label">Remote</InputLabel>
                <Select
                    labelId="isRemote-label"
                    id="isRemote"
                    name="isRemote"
                    value={isRemote}
                    onChange={handleFilterChange}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Tech Stack"
                name="techStack"
                value={techStack}
                onChange={handleFilterChange}
            />
            <TextField
                label="Role"
                name="role"
                value={role}
                onChange={handleFilterChange}

            />
            <TextField
                label="Minimum Base Pay"
                name="minBasePay"
                value={minBasePay}
                onChange={handleFilterChange}

            />
            <Button variant="contained" color="primary" onClick={handleApplyFilters}>
                Apply Filters
            </Button>
        </div>
    );
};

export default FilterForm;