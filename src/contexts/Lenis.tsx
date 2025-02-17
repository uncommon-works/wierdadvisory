'use client'

import { ReactLenis } from 'lenis/react'

function Lenis({ children }: { children: React.ReactNode }) {

  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 1 }}>
      {children}
    </ReactLenis>
  );
}

export default Lenis;