import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {countries ,CountryType} from "./Countries"
import CountryFlag from './CountryFlag'



export default function CountrySelect({handler, index}) {

  //console.log(countries)
  return (

    <form className='w-full'>
        <Autocomplete
            id="country-select-demo"
            className='w-full'
            size="small"
            options={countries}
            autoHighlight
            getOptionLabel={(option) => `${option.label} `}
            renderOption={(props, option) => {
                const { key, ...restProps } = props;
                return (
                  <Box
                    component="li"
                    sx={{ '& > span': { mr: 2, flexShrink: 0 } }}
                    {...restProps}
                    key={key} // Ensure key is used separately
                  >
                    <CountryFlag countryCode={option.code} label={option.label} />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                );
              }}
              
            onChange={(event, value) => {
                // Use the selected value directly, no need for event.target.value
                handler(value, index, "countryOfPassIssue");
              }}
            renderInput={(params) => (
                <TextField
                {...params}
                className=''
                label="Country of Issue"
                inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                }}
                required
                />
            )}
        />
    </form>
   
  );
}
