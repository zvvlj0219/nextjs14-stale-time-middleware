import { cookies, headers } from "next/headers";

async function testFetch(): Promise<{ message: string }> {
  const origin = headers().get('host');

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api`, {
    cache: 'no-store',
    headers: {
      accept: 'application/json',
      Cookie: cookies().toString(),
      ...(origin ? { origin } : {}),
    },  
  });

  const data = await response.json();

  return data;
}

export default async function Dashboard() {
  const data = await testFetch();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.message}</p>
    </div>
  );
}