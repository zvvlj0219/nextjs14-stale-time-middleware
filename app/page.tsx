import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1><Link href={'./home'}>Home</Link></h1>
      <h1><Link href={'./dashboard'}>dashboard</Link></h1>
    </div>
  );
}
