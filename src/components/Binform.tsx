'use client';

import { useState } from 'react';
 import InputField from './InputField';
 import TextareaField from './TextareaField';
 import SelectField from './SelectField';
 import CheckboxField from './CheckboxField';
 import SubmitButton from './SubmitButton';

export default function BinForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    language: 'plaintext',
    wrap_text: false,
    burn_after_read: false,
    expiry_choice: '1h',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/bin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.slug) {
      window.open(`http://localhost:5000/bin/${data.slug}`, '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField value={formData.title} onChange={handleChange} />
      <TextareaField value={formData.content} onChange={handleChange} />
      <SelectField value={formData.language} onChange={handleChange} />
      <CheckboxField
        id="wrap_text"
        label="Wrap Text"
        checked={formData.wrap_text}
        onChange={handleChange}
      />
      <CheckboxField
        id="burn_after_read"
        label="Burn After Read"
        checked={formData.burn_after_read}
        onChange={handleChange}
        accentColor="accent-red-500"
      />
      <SubmitButton />
    </form>
  );
}