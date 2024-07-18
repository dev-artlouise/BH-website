import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const SelectComponent = ({ size, label, id, labelId, value, onChange, menuItems }) => {
    return (
        <>
            <FormControl
                sx={{
                    minWidth: 200
                }}
                size={size}
            >
                <InputLabel id={labelId}>
                    {label}
                </InputLabel>

                <Select
                    labelId={labelId}
                    id={id}
                    value={value}
                    onChange={onChange}
                    label={label}
                >
                    {menuItems.map(({ value, label }) => (
                        <MenuItem
                            key={value}
                            value={value}
                        >
                            {label}
                        </MenuItem>
                    ))}

                </Select>

            </FormControl>
        </>
    )
}

export default SelectComponent