import React from 'react';

export default function Person({ firstName, lastName, email, gender, from }) {
  return (
    <div className=" bg-red-100">
      <div className="">
        <h2>{`${firstName} ${lastName}`}</h2>
        <p>{email}</p>
        <p>{gender}</p>
        <p>{from}</p>
      </div>
    </div>
  );
}
