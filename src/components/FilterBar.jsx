import { useState } from 'react';

export default function FilterBar({
  onNameFilter,
  onEmailFilter,
  genderData,
  resetData,
  onGenderFilter,
  onDateFilter,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    from: '',
  });

  const handleChange = (field) => (event) => {
    let { name, value } = event.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    switch (field) {
      case 'name':
        onNameFilter(value);
        break;
      case 'email':
        onEmailFilter(value);
        break;
      case 'gender':
        onGenderFilter(value);
        break;
      case 'from':
        onDateFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-[20%] bg-blue-50 p-4">
      <button
        className="rounded-sm w-[100px] bg-green-400 pt-2 pb-2 text-white mb-4 cursor-pointer"
        onClick={() => {
          resetData();
          setFormData({
            name: '',
            email: '',
            gender: '',
            from: '',
          });
        }}
      >
        reset
      </button>
      <form action="">
        <div className="mb-4">
          <label className="block " htmlFor="">
            Name:
          </label>
          <input
            value={formData.name}
            name="name"
            onChange={handleChange('name')}
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block " htmlFor="">
            Email:
          </label>
          <input
            onChange={handleChange('email')}
            value={formData.email}
            name="email"
            type="email"
          />
        </div>
        <div className="mb-4">
          <label className="block " htmlFor="">
            Gender:
          </label>
          <select name="gender" onChange={handleChange('gender')}>
            <option value="">Select</option>
            {genderData.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block" htmlFor="">
            From:
          </label>
          <input
            onChange={handleChange('from')}
            value={formData.from}
            name="from"
            type="date"
          />
        </div>
      </form>
    </div>
  );
}
