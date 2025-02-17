'use client'

export default function ScrollProgress() {

  return (
    <div className="fixed z-50 left-0 w-[5px] h-[100vh] bg-blue-950">
      <div
        className="h-full bg-black transition-all duration-150"
        style={{ height: "100%" }}
      />
    </div>
  );
}
