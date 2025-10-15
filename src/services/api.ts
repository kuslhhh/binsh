import { BinFormData, BinResponse } from '@/types/bin';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function createBin(data: BinFormData): Promise<BinResponse> {
  const response = await fetch(`${API_BASE_URL}/bin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create bin');
  }

  return response.json();
}

export async function getBin(slug: string): Promise<BinFormData> {
  const response = await fetch(`${API_BASE_URL}/bin/${slug}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch bin');
  }

  return response.json() as Promise<BinFormData>;
}