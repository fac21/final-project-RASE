// export default async function getStaticProps(postcode) {
//     let postcode = postcode.replace(" ", "");
//     const response = await fetch("https://api.postcodes.io/postcodes/" + postcode);
//     const result = await response.json()
//     console.log("result", result);
//     const longitude = result.longitude;
//     const latitude = result.latitude;
//     const region = result.region;

//     return {

//         props:
//         {
//             longitude, latitude, region }
//         }
// }