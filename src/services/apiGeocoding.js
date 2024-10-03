export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://apis.mapmyindia.com/advancedmaps/v1/YOUR_API_KEY/reverse_geocode?lat=28.613939&lng=77.209021&format=json
`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
