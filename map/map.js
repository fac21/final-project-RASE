export default async function getGeoCode(postcode) {
  const response = await fetch(
    "https://api.postcodes.io/postcodes/" + postcode
  );
  const result = await response.json();
  console.log("result", result);
  const latitude = result.result.latitude;
  const longitude = result.result.longitude;
  const location = result.result.admin_district;

  return {
    coordinates: [latitude, longitude],
    location,
  };
}
