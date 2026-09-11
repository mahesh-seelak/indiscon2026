'use client'
import { useEffect, useState } from "react";

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/10 rounded-xl min-w-[120px] md:min-w-[140px] backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group">
    <span className="text-4xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tighter">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-xs md:text-sm text-white/80 font-medium uppercase tracking-widest">
      {label}
    </span>

    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />
      <div className="absolute -inset-[2px] bg-gradient-to-br from-blue-300/30 to-transparent rounded-xl blur-[12px]" />
    </div>
  </div>
);

const Countdown = () => {
  const parseEventDate = () => {
    const dateString = "2026-09-11 09:00:00";
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);

    return new Date(year, month - 1, day, hours, minutes, seconds);
  };

  const calculateTimeLeft = () => {
    const eventTime = parseEventDate().getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;

    if (difference <= 0) {
      return { months: 0, days: 0, hours: 0 };
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return { months, days, hours };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen bg-gradient-to-br from-blue-600 to-blue-700 py-16 md:py-20 overflow-hidden isolate">

      <div className="absolute inset-0 opacity-20 animate-gradient-rotate">
        <div className="absolute -inset-24 bg-[conic-gradient(from_90deg_at_50%_50%,#2563eb_0%,#3b82f6_50%,#2563eb_100%)] animate-spin [animation-duration:20s]" />
      </div>

      
<div className="relative z-10 container mx-auto px-4">
  <div className="max-w-5xl mx-auto text-center">

    {/* Conference Title */}
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
      IEEE INDISCON 2026
    </h2>

    {/* Conference Dates */}
    <p className="text-xl md:text-2xl text-white font-semibold mb-8">
      September 11–13, 2026
    </p>

    {/* Venue Card */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                    px-6 py-6 md:px-10 md:py-8 mb-8 shadow-lg">

      <p className="text-sm md:text-base uppercase tracking-widest 
                    text-yellow-300 font-bold mb-3">
        Conference Venue
      </p>

      <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
        Vivekanand Lecture Hall Complex (VLTC)
        <br />
        Malaviya National Institute of Technology Jaipur, India
      </p>

      {/* Google Maps */}
      <div className="mt-5">
        <a
          href="https://maps.app.goo.gl/hUNQe6rXvfAFH1oe7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 
                     rounded-full bg-white text-gray-900 font-semibold
                     hover:bg-white/90 transition-all duration-200 shadow-md"
        >
          📍 Get Directions on Google Maps
        </a>
      </div>
    </div>

    {/* Directions */}
    <div className="bg-black/20 backdrop-blur-sm rounded-2xl 
                    px-6 py-6 md:px-10 md:py-8 mb-12 text-left">

      <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
        🧭 Direction to VLTC
      </h3>

      <div className="space-y-5 text-white/90 text-base md:text-lg leading-relaxed">

        <div>
          <span className="font-bold text-yellow-300">
            1. From Dean Gate:
          </span>{" "}
          Head straight down the main road from Dean Gate.
        </div>

        <div>
          <span className="font-bold text-yellow-300">
            2. Midway:
          </span>{" "}
          Continue straight past the Helicopter (OAT). Go straight up the
          steep incline and then take a right at the circle.
        </div>

        <div>
          <span className="font-bold text-yellow-300">
            3. At the Circle (PMC):
          </span>{" "}
          Take a right turn and continue straight for a few hundred meters.
          The VLTC building will be prominently visible as you approach the
          main lecture theatre zone.
        </div>

        <div className="text-center pt-2">
          <span className="font-semibold text-white">
            Landmark: Statue of Swami Vivekananda
          </span>
        </div>

      </div>
    </div>

    

  </div>
</div>



      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]" />
    </div>

  );
};

export default Countdown;