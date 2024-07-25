"use client";

import IconArrow from "@/public/icon-arrow.svg";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return router.push("/");
    const params = new URLSearchParams(searchParams);
    params.set("ip", query);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <input
        className="w-72 rounded-l-md px-3 py-2 transition-all placeholder:text-base placeholder:font-light focus:outline-none focus:ring-2 focus:ring-dark focus:ring-opacity-70 sm:w-96"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for any IP addresses or domain"
      />
      <button className="relative h-10 w-10 rounded-r-md bg-black transition-all hover:bg-dark sm:h-10">
        <Image
          className="object-cover px-4 py-4"
          src={IconArrow}
          fill
          alt="Icon Arrow"
        />
      </button>
    </form>
  );
}

export default Search;
