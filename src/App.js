import { useState } from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import People from './components/People';
import dayjs from 'dayjs';

import data from './MOCK_DATA.json';

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
dayjs.extend(isSameOrAfter);

function App() {
  const [allData, setAllData] = useState(data);

  const resetData = () => {
    setAllData(data);
  };

  const generateGenderData = () => {
    return [...new Set(allData.map((item) => item.gender))];
  };

  const handleNameChange = (name) => {
    const filteredData = allData.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setAllData(filteredData);
  };

  const handleEmailChange = (email) => {
    const filteredData = allData.filter((item) =>
      item.email.toLowerCase().includes(email)
    );
    setAllData(filteredData);
  };

  const handleGenderChange = (gender) => {
    const filteredData = allData.filter((item) => item.gender === gender);
    setAllData(filteredData);
  };

  const handleDateFilter = (date) => {
    const filteredData = allData.filter((item) =>
      dayjs(item.from).isSameOrAfter(dayjs(date))
    );
    setAllData(filteredData);
  };

  return (
    <div className="flex min-h-screen">
      <FilterBar
        onNameFilter={handleNameChange}
        onEmailFilter={handleEmailChange}
        genderData={generateGenderData()}
        resetData={resetData}
        onGenderFilter={handleGenderChange}
        onDateFilter={handleDateFilter}
      />
      {/* <div className="w-[80%] bg-green-300 flex justify-center items-start flex-wrap gap-10"> */}
      <div className="w-[80%] bg-green-300 grid grid-cols-4 grid-rows-4 gap-10">
        {allData.map((data) => (
          <People
            key={data.id}
            firstName={data.first_name}
            lastName={data.last_name}
            ip={data.ip_address}
            gender={data.gender}
            email={data.email}
            from={data.from}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
