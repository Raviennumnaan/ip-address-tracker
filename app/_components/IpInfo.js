function IpInfo({ ipData }) {
  const ipAddress = ipData?.ip || "No IP";
  const location =
    ipData?.location?.country && ipData.location.region
      ? `${ipData.location.region}, ${ipData.location.country}`
      : ipData?.location?.country
        ? ipData?.location?.country
        : "No Location";
  const timezone = ipData?.location?.timezone || "No Timezone";
  const isp = ipData?.isp || "No ISP";

  return (
    <div className="flex divide-x-2 rounded-md bg-white py-3 text-left">
      <div className="flex-1 space-y-2 px-6">
        <p className="text-xs font-medium uppercase text-light">Ip Address</p>
        <p className="text-xl font-semibold">{ipAddress}</p>
      </div>
      <div className="flex-1 space-y-2 px-6">
        <p className="text-xs font-medium uppercase text-light">Location</p>
        <p className="text-xl font-semibold">{location}</p>
      </div>
      <div className="flex-1 space-y-2 px-6">
        <p className="text-xs font-medium uppercase text-light">Timezone</p>
        <p className="text-xl font-semibold">{timezone}</p>
      </div>
      <div className="flex-1 space-y-2 px-6">
        <p className="text-xs font-medium uppercase text-light">isp</p>
        <p className="text-xl font-semibold">{isp}</p>
      </div>
    </div>
  );
}

export default IpInfo;
