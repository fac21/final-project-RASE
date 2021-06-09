export default async function getMap(postcode) {
  const response = await fetch(
    "https://api.postcodes.io/postcodes/" + postcode
  );
  const result = await response.json();
  console.log("result", result);
  const longitude = result.longitude;
  const latitude = result.latitude;
  const region = result.region;

  return {
    longitude,
    latitude,
    region,
  };
}
