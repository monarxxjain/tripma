import React from 'react';




function getUnicodeFlagIcon(countryCode) {
  return countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

const CountryFlag=({ countryCode, label}) =>{
  return (
    <>
      <span role="img" aria-label={label}>
        {getUnicodeFlagIcon(countryCode)}
      </span>
     
    </>
  );
}

export default  CountryFlag
