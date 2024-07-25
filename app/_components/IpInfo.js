function IpInfo({ ipData }) {
  const ipAddress = ipData?.ip || "No IP";
  const location =
    ipData?.location?.region && ipData.location.city
      ? `${ipData.location.city}, ${ipData.location.region}`
      : ipData?.location?.region
        ? ipData?.location?.region
        : "No Location";
  const timezone = ipData?.location?.timezone || "No Timezone";
  const isp = ipData?.isp || "No ISP";

  return (
    <div className="flex flex-col gap-4 divide-x-2 rounded-md bg-white py-3 sm:flex-row sm:gap-0 sm:text-left">
      <div className="flex-1 px-6 sm:space-y-2">
        <p className="text-xs font-medium uppercase text-light">Ip Address</p>
        <p className="text-lg font-semibold">{ipAddress}</p>
      </div>
      <div className="flex-1 px-6 sm:space-y-2">
        <p className="text-xs font-medium uppercase text-light">Location</p>
        <p className="text-lg font-semibold">{location}</p>
      </div>
      <div className="flex-1 px-6 sm:space-y-2">
        <p className="text-xs font-medium uppercase text-light">Timezone</p>
        <p className="text-lg font-semibold">{timezone}</p>
      </div>
      <div className="flex-1 px-6 sm:space-y-2">
        <p className="text-xs font-medium uppercase text-light">isp</p>
        <p className="text-lg font-semibold">{isp}</p>
      </div>
    </div>
  );
}

export default IpInfo;
