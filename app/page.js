import Image from "next/image";
import BgDesktop from "@/public/pattern-bg-desktop.png";
import BgMobile from "@/public/pattern-bg-mobile.png";
import Search from "@/app/_components/Search";
import IpInfo from "@/app/_components/IpInfo";
import dynamic from "next/dynamic";
import { getIPData } from "@/app/_lib/data-service";
import { headers } from "next/headers";

const Map = dynamic(() => import("@/app/_components/Map"), {
  ssr: false,
});

async function Page({ searchParams }) {
  const { ip: searchedIp } = searchParams;
  const headerList = headers();
  const forwarded = headerList.get("x-forwarded-for");
  const clientIp = forwarded ? forwarded.split(",")[0] : "127.0.0.1";

  const ipData = await getIPData(searchedIp || clientIp);
  const location = [
    ipData?.location?.lat || 51.505,
    ipData?.location?.lng || -0.09,
  ];

  return (
    <>
      <div className="flex flex-col sm:max-h-dvh">
        <div>
          <div className="relative h-48 border border-red-950 px-2 py-2 sm:h-60">
            <Image
              className="hidden object-cover sm:block"
              src={BgDesktop}
              alt="Background Image"
              fill
              priority
              quality={90}
            />
            <Image
              className="block object-cover sm:hidden"
              src={BgMobile}
              alt="Background Image"
              fill
              priority
              quality={90}
            />
          </div>
        </div>

        <div className="z-0 flex-1 overflow-hidden">
          <Map location={location} />
        </div>
      </div>
      <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 space-y-5 text-center sm:top-10 sm:min-w-[896px] sm:space-y-8">
        <h1 className="text-2xl font-semibold tracking-wider text-white">
          IP Address Tracker
        </h1>
        <Search />
        <IpInfo ipData={ipData} />
      </div>
    </>
  );
}

export default Page;
