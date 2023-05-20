import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Dropdown = ({ items, label, onChange }) => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <FormControl variant="standard" sx={{
            minWidth: 100
        }}>
            <InputLabel id="dropdown-label">{label}</InputLabel>
            <Select
                labelId="dropdown-label"
                id="dropdown"
                value={selectedItem}
                onChange={handleChange}
                label={label}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
