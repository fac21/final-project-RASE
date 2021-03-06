export default async function getGeoCode(postcode) {
  try {
    const response = await fetch(
      "https://api.postcodes.io/postcodes/" + postcode
    );
    const result = await response.json();
    const latitude = result.result.latitude;
    const longitude = result.result.longitude;
    const location = result.result.admin_district;

    return {
      coordinates: [latitude, longitude],
      location,
    };
  } catch (error) {
    return {
      coordinates: [],
      location: null,
    };
  }
}
