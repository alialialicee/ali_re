import type { FortuneResult } from '../types';

export default function ResultScreen({ fortune, onReset }: { fortune: FortuneResult; onReset: () => void }) {
  return <section className="screen result fade-in" aria-labelledby="result-title">
    <article className="result-card hanji">
      <p className="eyebrow">칠일간의 금기록</p>
      <h2 id="result-title">{fortune.name}님, 이번 주에는 이것들을 피해야 합니다.</h2>
      <p className="summary">{fortune.summary}</p>
      <div className="omens"><span>피해야 할 색: {fortune.avoidColor}</span><span>피해야 할 장소: {fortune.avoidPlace}</span><span>주의 시간: {fortune.avoidTime}</span></div>
      <ol className="daily-list">{fortune.dailyTaboos.map((item) => <li key={item.day}><strong>{item.day}</strong><p>{item.taboo}</p></li>)}</ol>
      <section className="absolute-taboo"><h3>이번 주 절대 금기</h3><p>{fortune.absoluteTaboo}</p></section>
      <p className="final-warning">{fortune.finalWarning}</p>
      <button className="primary-button" type="button" onClick={onReset}>다시 보기</button>
      <p className="notice">이 결과는 재미와 참고용 콘텐츠이며, 중요한 판단이나 실제 의사결정의 근거로 사용하지 마세요.</p>
    </article>
  </section>;
}
