import { useEffect, useMemo, useState } from 'react';
import { loadingMessages } from '../data/fortunes';

export default function LoadingRitual({ onComplete }: { onComplete: () => void }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const duration = useMemo(() => 4000 + Math.floor(Math.random() * 2000), []);

  useEffect(() => {
    const messageTimer = window.setInterval(() => setMessageIndex((i) => (i + 1) % loadingMessages.length), 1000);
    const endTimer = window.setTimeout(onComplete, duration);
    return () => { window.clearInterval(messageTimer); window.clearTimeout(endTimer); };
  }, [duration, onComplete]);

  return <section className="screen loading fade-in" aria-live="polite">
    <div className="floating-talismans" aria-hidden="true"><b>避</b><b>禁</b><b>厄</b></div>
    <div className="shaman" aria-hidden="true"><div className="head" /><div className="body" /><div className="hands" /></div>
    <div className="ritual-candles" aria-hidden="true"><div className="candle"><span /></div><div className="candle"><span /></div></div>
    <p className="loading-message">{loadingMessages[messageIndex]}</p>
  </section>;
}
