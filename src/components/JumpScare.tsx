import { useEffect, useMemo } from 'react';
import { scareMessages } from '../data/fortunes';

export default function JumpScare({ onComplete }: { onComplete: () => void }) {
  const message = useMemo(() => scareMessages[Math.floor(Math.random() * scareMessages.length)], []);
  useEffect(() => { const timer = window.setTimeout(onComplete, 1050); return () => window.clearTimeout(timer); }, [onComplete]);
  return <section className="screen jumpscare" aria-live="assertive">
    <div className="mask-face" aria-hidden="true"><i /><i /><span /></div>
    <p className="scare-text glitch" data-text={message}>{message}</p>
  </section>;
}
