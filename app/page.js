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

async function Page() {
  const headerList = headers();
  const forwarded = headerList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";

  // const ipData = await getIPData("152.58.213.109");
  const ipData = await getIPData(ip);

  return (
    <>
      <div className="flex max-h-dvh flex-col">
        <div>
          <div className="relative h-60 w-full">
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
          <Map />
        </div>
      </div>
      <div className="absolute left-1/2 top-10 z-10 min-w-max -translate-x-1/2 space-y-8 text-center">
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
