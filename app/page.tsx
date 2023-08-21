import { enableSearchBar } from "config/featureFlags";
import { getSections } from "mocks/sections";

import Navbar from "_components/navbar/Navbar";
import Section from "_components/section/Section";
import SearchBar from "_components/searchbar/SearchBar";

export default function Page() {
  const SECTIONS = getSections();

  return (
    <div className="w-full h-screen max-w-5xl mx-auto py-8">
      {/* logo */}
      <Navbar />

      {enableSearchBar ? <SearchBar /> : <></>}

      <div className="mt-8">
        {SECTIONS.map((section) => {
          return <Section key={section.id} {...section} />;
        })}
      </div>
    </div>
  );
}
