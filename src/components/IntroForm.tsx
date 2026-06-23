import { ChangeEvent, FormEvent, useState } from 'react';
import type { Gender, UserInput } from '../types';

interface Props { onStart: (input: UserInput) => void; }

export default function IntroForm({ onStart }: Props) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState<Gender>('other');
  const [error, setError] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) return setError('이름 없는 자의 운명은 읽을 수 없습니다.');
    if (!birthDate) return setError('태어난 날을 숨기면 금기는 모습을 드러내지 않습니다.');
    if (!birthTime) return setError('태어난 시간이 비어 있습니다.');
    setError('');
    onStart({ name, birthDate, birthTime, gender });
  };

  return (
    <section className="screen intro fade-in" aria-labelledby="app-title">
      <div className="talisman talisman-left" aria-hidden="true">禁</div>
      <div className="talisman talisman-right" aria-hidden="true">符</div>
      <div className="candle left" aria-hidden="true"><span /></div>
      <div className="candle right" aria-hidden="true"><span /></div>
      <form className="ritual-card hanji" onSubmit={submit}>
        <p className="eyebrow">앞으로 칠일, 피해야 할 것</p>
        <h1 id="app-title" className="glitch" data-text="칠일금기">칠일금기</h1>
        <p className="intro-copy">좋은 말은 하지 않습니다. 이름과 시간을 내어주면, 이번 주 당신이 피해 가야 할 금기만 남깁니다.</p>
        <label>이름<input value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} placeholder="이름을 입력하세요" /></label>
        <label>생년월일<input type="date" value={birthDate} onChange={(e: ChangeEvent<HTMLInputElement>) => setBirthDate(e.target.value)} /></label>
        <label>태어난 시간<input type="time" value={birthTime} onChange={(e: ChangeEvent<HTMLInputElement>) => setBirthTime(e.target.value)} /></label>
        <fieldset><legend>성별</legend>
          <label><input type="radio" name="gender" checked={gender === 'male'} onChange={() => setGender('male')} /> 남성</label>
          <label><input type="radio" name="gender" checked={gender === 'female'} onChange={() => setGender('female')} /> 여성</label>
          <label><input type="radio" name="gender" checked={gender === 'other'} onChange={() => setGender('other')} /> 기타 / 선택 안 함</label>
        </fieldset>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="primary-button" type="submit">금기를 확인한다</button>
      </form>
    </section>
  );
}
