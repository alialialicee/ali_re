import { useCallback, useState } from 'react';
import IntroForm from './components/IntroForm';
import JumpScare from './components/JumpScare';
import LoadingRitual from './components/LoadingRitual';
import ResultScreen from './components/ResultScreen';
import type { FortuneResult, UserInput } from './types';
import { generateFortune } from './utils/generateFortune';

type Step = 'intro' | 'loading' | 'scare' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('intro');
  const [fortune, setFortune] = useState<FortuneResult | null>(null);

  const handleStart = useCallback((input: UserInput) => {
    setFortune(generateFortune(input));
    setStep('loading');
  }, []);

  const handleRitualEnd = useCallback(() => setStep('scare'), []);
  const handleScareEnd = useCallback(() => setStep('result'), []);
  const handleReset = useCallback(() => {
    setFortune(null);
    setStep('intro');
  }, []);

  return (
    <main className="app-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient-fog" aria-hidden="true" />
      {step === 'intro' && <IntroForm onStart={handleStart} />}
      {step === 'loading' && <LoadingRitual onComplete={handleRitualEnd} />}
      {step === 'scare' && <JumpScare onComplete={handleScareEnd} />}
      {step === 'result' && fortune && <ResultScreen fortune={fortune} onReset={handleReset} />}
    </main>
  );
}
