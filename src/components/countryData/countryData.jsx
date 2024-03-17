const CountryData = ({country,handleVisitedFlags,handleVisitedCountry}) => {
    return (
        <div>
            <p>{country.name.common}</p>
        </div>
    );
};

export default CountryData;