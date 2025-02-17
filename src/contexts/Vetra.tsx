'use client';

interface VetraProps {
  children: React.ReactNode;
  route?: string;
}

export default function Vetra({ children, route }: VetraProps) {
  return (
    <>
      <div
        id="cover"
        className="fixed bg-gray-100 z-50 overflow-hidden shadow-xl"
      >
        <div className="absolute left-0 sm:p-16 min-h-screen w-screen flex flex-col items-center justify-center">
          <div className="h-full w-full z-20 flex flex-col items-center justify-center">
            <div id="route" className="text-4xl md:text-6xl font-bold relative mb-2 uppercase flex">
              {route}
            </div>
          </div>
        </div>
      </div>

      {children}

    </>
  );
}
