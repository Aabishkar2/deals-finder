import { FaSearch } from 'react-icons/fa';
import { BiRefresh } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Router from 'next/router';
import Select, { StylesConfig } from 'react-select';

export default function Search({
  locations,
  searchProductAction,
  resetFormAction,
  searchedDeal,
  searchedLocation,
}: {
  locations: string[];
  searchProductAction?: () => void;
  resetFormAction?: () => void;
  searchedDeal?: string;
  searchedLocation?: string;
}) {
  const customSelectStyles: StylesConfig = {
    control: provided => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
    }),
  };

  const options = ['All', ...locations].map(location => ({
    value: location,
    label: location,
  }));

  const [selectedOption, setSelectedOption] = useState(
    searchedDeal ? { value: searchedDeal, label: searchedDeal } : options[0]
  );

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form = e.target; // get the form
    const data = new FormData(form as HTMLFormElement); // get the form data
    const { deal, location } = Object.fromEntries(data.entries()); // get the deal and location from the form data
    // redirect to home page with the deal and location in query string
    Router.push({
      pathname: '/',
      query: {
        deal: deal as string,
        location: location as string,
      },
    });
    if (searchProductAction) searchProductAction();
  };

  const resetForm = () => {
    setSelectedOption(options[0]);
    // redirect to home page with the deal and location in query string
    Router.push({
      pathname: '/',
      query: {
        reset: true,
      },
    });
    if (resetFormAction) resetFormAction();
  };

  return (
    <>
      <div className="grid h-full w-full place-items-center content-center bg-lightSixty dark:bg-dark">
        <div className="mx-auto w-full px-1 py-5 md:w-3/4 lg:w-1/2">
          <form className="p-1" onSubmit={handleFormSubmit}>
            <div className="rounded-2xl bg-pureWhite">
              <div className="flex flex-row justify-between px-4 py-2">
                <div className="flex w-full md:w-3/4 lg:w-3/4">
                  <div className="grid place-items-center content-center">
                    <FaSearch className="mr-1 text-sm text-lightSixty dark:text-dark" />
                  </div>
                  <input
                    placeholder="Enter Deals Name"
                    type="text"
                    name="deal"
                    id="location"
                    maxLength={100}
                    minLength={3}
                    defaultValue={searchedDeal}
                    className="source-sans-pro dark:focus:ring-lite w-full rounded-sm border-r-2 py-2 px-3 text-sm leading-tight focus:border-transparent focus:outline-none focus:ring-2 focus:ring-lightSixty dark:focus:ring-dark md:text-base lg:text-base"
                  />
                </div>
                <div className="flex w-full pl-1 md:w-3/4 lg:w-3/4">
                  <Select
                    defaultValue={options[0]}
                    placeholder="Location"
                    options={options}
                    styles={customSelectStyles}
                    value={selectedOption ? selectedOption : options[0]}
                    onChange={selected => setSelectedOption(selected as any)}
                    name="location"
                    id="long-value-select"
                    instanceId="long-value-select"
                    className="source-sans-pro w-full rounded-sm text-sm leading-tight md:text-base lg:text-base"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 grid place-items-center content-center">
              <div className="flex flex-row justify-between space-x-2 px-4 py-2">
                <button type="submit">
                  <div className="search-button source-sans-pro flex space-x-2 rounded-2xl bg-pureWhite py-2 px-4 text-sm font-semibold text-lightSixty hover:bg-lightTen hover:text-white dark:text-dark dark:hover:bg-lightSixty dark:hover:text-white">
                    <div className="grid place-items-center content-center">
                      <FaSearch className="text-sm" />
                    </div>
                    <div className="text-sm">Search</div>
                  </div>
                </button>
                <button type="reset" onClick={resetForm}>
                  <div className="search-button source-sans-pro flex space-x-2 rounded-2xl bg-pureWhite py-2 px-4 text-sm font-semibold text-lightSixty hover:bg-lightTen hover:text-white dark:text-dark dark:hover:bg-lightSixty dark:hover:text-white">
                    <div className="grid place-items-center content-center">
                      <BiRefresh className="text-xl" />
                    </div>
                    <div className="text-sm">Reset</div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
