import React, { useState } from 'react';
import CustomerList from './CustomerList';
import List from '../List';

function SearchCustomer() {
  const [allData, setAllData] = useState(List);
  const [filteredData, setFilteredData] = useState(List);
  const [searchText, setSearchText] = useState();

  function filterData(searchText, allData) {
    const filterData = allData.filter(
      (data) => data?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
      data?.location?.toLowerCase()?.includes(searchText.toLowerCase())
    );

    return filterData;
  }

  return (
    <>
      <div className="layout-row align-items-center justify-content-center mt-30">
        <input
          className="large mx-20 w-20"
          data-testid="search-input"
          value="Search"
          placeholder="Enter search term (Eg: Phil)"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <CustomerList />
    </>
  );
}

export default SearchCustomer;
