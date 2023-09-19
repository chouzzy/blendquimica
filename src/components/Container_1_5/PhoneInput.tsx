import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export function PhoneInput({phone, setPhone}) {

  const formatPhone = (phone) => {
    // Remove any non-digit characters from the phone number
    const cleaned = phone.replace(/\D/g, '');

    // Check if the cleaned phone number has the expected length
    if (cleaned.length === 11) {
      // Extract the DDD and number parts
      const ddd = cleaned.slice(0, 2);
      const number = cleaned.slice(2);

      // Return the formatted phone number
      return `(${ddd}) ${number.slice(0, 5)}-${number.slice(5)}`;
    }

    // Return the original phone number if it doesn't match the expected length
    return phone;
  };

  const handleChange = (event) => {
    const formattedPhone = formatPhone(event.target.value);
    setPhone(formattedPhone);
  };

  return (
    <Input
      type='tel'
      value={phone}
      onChange={handleChange}
      my={1}
      variant='outline'
      bg='white'
      placeholder='DDD + Tel. Ex. (16) 91234-5678'
    />
  );
};