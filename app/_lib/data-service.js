const API_KEY = process.env.IPIFY_API_KEY;

export async function getIPData(ipAddress) {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${ipAddress}`,
  );

  const data = await res.json();
  return data;
}
