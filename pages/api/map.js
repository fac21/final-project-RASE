export default async(req, res) => {
    const method = req.method;

    switch (method) {
        case "GET":
            {
                res.status(500).json({ message: "Sorry error" });
                break;
                o;
            }
        case "POST":
            {
                const { postcode } = req.body;
                const result = await fetch(
                    "https://api.postcodes.io/postcodes/" + postcode
                );

                const longitude = result.longitutde;
                const latitude = result.latitude;

                return { longitude, latitude };
                res.status(200).json({ message: "great" });
                break;
            }
        default:
            {
                res.status(500).json({ message: "Sorry error" });
            }
    }
};
// returns {"status":200,"result":{"postcode":"CV8 1EY","quality":1,"eastings":428315,"northings":271434,"country":"England","nhs_ha":"West Midlands","longitude":-1.585825,"latitude":52.34026,"european_electoral_region":"West Midlands","primary_care_trust":"Warwickshire","region":"West Midlands","lsoa":"Warwick 003B","msoa":"Warwick 003","incode":"1EY","outcode":"CV8","parliamentary_constituency":"Kenilworth and Southam","admin_district":"Warwick","parish":"Kenilworth","admin_county":"Warwickshire","admin_ward":"Kenilworth St John's","ced":"Kenilworth St. John's","ccg":"NHS South Warwickshire","nuts":"Warwickshire","codes":{"admin_district":"E07000222","admin_county":"E10000031","admin_ward":"E05012620","parish":"E04012431","parliamentary_constituency":"E14000767","ccg":"E38000164","ccg_id":"05R","ced":"E58001572","nuts":"UKG13","lsoa":"E01031304","msoa":"E02006521","lau2":"E05009794"}}}