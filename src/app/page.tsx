import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-200 p-6 space-y-4">
      <h1 className="text-3xl font-bold">お気に入りサイト</h1>
      <ul className="list-disc list-inside space-y-2 gap-4">
        <li><Link href="/music" className="text-blue-600 hover:underline">
        音楽</Link></li>
        <li><Link href="/book" className="text-blue-600 hover:underline">
        本</Link></li>
      </ul>
    </main>
  )
}
