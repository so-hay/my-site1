"use client";
import { useRef, useState } from "react";

type MusicItem = {
  id: number;
  title: string;
  artist: string;
  image: string;
  audio: string;
};

const musicList: MusicItem[] = [
  {
    id: 1,
    title: "SALING!!!!!",
    artist: "浦島坂田船",
    image: "/music/SALING!!!!!.jpg",
    audio: "/song/song2.mp3",
  },
  {
    id: 2,
    title: "V-enus",
    artist: "浦島坂田船",
    image: "/music/V-enus.jpg",
    audio: "/song/song2.mp3",
  },
   {
    id: 3,
    title: "V-enus",
    artist: "浦島坂田船",
    image: "/music/V-enus.jpg",
    audio: "/song/song2.mp3",
  },
   {
    id: 4,
    title: "V-enus",
    artist: "浦島坂田船",
    image: "/music/V-enus.jpg",
    audio: "/song/song2.mp3",
  },
   {
    id: 5,
    title: "V-enus",
    artist: "浦島坂田船",
    image: "/music/V-enus.jpg",
    audio: "/song/song2.mp3",
  },
];


export default function MusicPage() {
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

    // 他の曲が再生中なら止める
    Object.entries(audioRefs.current).forEach(([key, ref]) => {
      if (Number(key) !== id && ref) {
        ref.pause();
        ref.currentTime = 0;
      }
    });

    if (playingId === id) {
      audio.pause();
      setPlayingId(null);
    } else {
      audio.play();
      setPlayingId(id);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">🎵 お気に入り音楽</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {musicList.map((music) => (
          <div
            key={music.id}
            className="bg-white p-4 rounded shadow cursor-pointer"
            onClick={() => togglePlay(music.id)}
          >
            <img
              src={music.image}
              alt={music.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">{music.title}</h2>
            <p className="text-sm text-gray-600">{music.artist}</p>
            <audio
              ref={(el) => {
                audioRefs.current[music.id] = el;
              }}
              src={music.audio}>
            </audio>
          </div>
        ))}
      </div>
    </main>
  );
}