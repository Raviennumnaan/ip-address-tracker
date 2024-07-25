import IconArrow from "@/public/icon-arrow.svg";
import Image from "next/image";

function Search() {
  return (
    <form className="flex items-center justify-center">
      <input
        className="w-96 rounded-l-md px-3 py-2 transition-all placeholder:text-base placeholder:font-light focus:outline-none focus:ring-2 focus:ring-dark focus:ring-opacity-70"
        type="text"
        placeholder="Search for any IP addresses or domain"
      />
      <button className="relative h-10 w-10 rounded-r-md bg-black transition-all hover:bg-dark">
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
