'use client'

interface VetraProps {
  children: React.ReactNode;
}

export default function Vetra({ children }: VetraProps) {
  return (
    <>
      <div id="cover"className="fixed bg-gray-100 z-50 overflow-hidden shadow-xl"></div>
      {children}
    </>
  );
}
