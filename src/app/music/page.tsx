"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const [progress, setProgress] = useState<Record<number, number>>({});

  // 再生/停止切り替え
  const togglePlay = (id: number) => {
    const audio = audioRefs.current[id];
    if (!audio) return;

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

  // 再生バー更新
  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress: Record<number, number> = {};
      Object.entries(audioRefs.current).forEach(([key, audio]) => {
        if (audio && audio.duration > 0) {
          newProgress[Number(key)] =
            (audio.currentTime / audio.duration) * 100;
        }
      });
      setProgress(newProgress);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">🎵 お気に入り音楽</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {musicList.map((music) => (
          <div
            key={music.id}
            className="bg-white p-4 rounded shadow cursor-pointer group"
            onClick={() => togglePlay(music.id)}
          >
            <div
              className={`w-full h-48 rounded-full overflow-hidden transition-transform duration-500 ${
                playingId === music.id ? 'animate-spin-slow' : ''
              }`}
            >
              <Image
                src={music.image}
                alt={music.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 font-semibold">{music.title}</h2>
            <p className="text-sm text-gray-600">{music.artist}</p>
{/* 
            <div className="w-full h-2 bg-gray-200 rounded mt-2">
              <div
                className="h-2 bg-blue-500 rounded transition-all duration-300"
                style={{ width: `${progress[music.id] || 0}%` }} // ✅ インライン許容
              />
            </div> */}

            <audio
              ref={(el) => {
                audioRefs.current[music.id] = el;
              }}
              src={music.audio}
            />
          </div>
        ))}
      </div>
    </main>
  );
}