import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { FilterT, FilterValueType } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Filter({
  name,
  placeholder,
  options,
  onSubmit,
  multiple
}: FilterT<keyof FilterValueType>) {
  const defaultValue = multiple ? [] : '';
  const [selectedValues, setSelectedValues] = useState<string | string[]>(defaultValue);

  function onChange({ target }: SelectChangeEvent<string | string[]>) {
    let value = multiple
      ? target.value as string[]
      : target.value as string;

    console.log(value)
    setSelectedValues(value);
  }

  return (
    <div>
      <FormControl sx={{m: 2, width: 300}}>
        <InputLabel id={`filter-item-${name}-lable`}>{placeholder}</InputLabel>
        <Select
          labelId={`filter-item-${name}-lable`}
          id={`filter-item-${name}`}
          multiple={multiple}
          value={selectedValues}
          onChange={onChange}
          input={<OutlinedInput label={name}/>}
          MenuProps={MenuProps}
        >
          {
            options.map((option) => {
              return (
                <MenuItem
                  key={option.value.toString()}
                  value={option.value}
                >
                  {option.name}
                </MenuItem>
              );
            })
          }
        </Select>
      </FormControl>
    </div>
  );
};
