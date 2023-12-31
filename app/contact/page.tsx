'use client';
import React, { useState, ChangeEvent } from 'react';

interface InputField {
  id: number;
  value: string;
}

const DynamicInputFields: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([
    { id: 1, value: '' },
  ]);
  const [allInputValues, setAllInputValues] = useState<string[]>(['']);

  const handleAddField = () => {
    const newInputFields = [...inputFields, { id: Date.now(), value: '' }];
    setInputFields(newInputFields);
  };

  const handleInputChange = (
    id: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(newInputFields);

    const allValues = newInputFields.map((field) => field.value);
    setAllInputValues(allValues);
  };

  const handleDeleteField = (id: number) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);

    const allValues = newInputFields.map((field) => field.value);
    setAllInputValues(allValues);
  };

  return (
    <div className='sp'>
      <h1>Dynamic Input Fields</h1>
      {inputFields.map((field) => (
        <div key={field.id}>
          <input
            type='text'
            value={field.value}
            onChange={(event) => handleInputChange(field.id, event)}
          />
          <button onClick={() => handleDeleteField(field.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add Input Field</button>

      <div>
        <h2>All Input Values</h2>
        <pre>{JSON.stringify(allInputValues, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DynamicInputFields;
