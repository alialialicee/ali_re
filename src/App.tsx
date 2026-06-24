export default function App() {
  return (
    <main className="app-shell">
      <section className="screen intro fade-in" aria-labelledby="app-title">
        <div className="ritual-card hanji">
          <p className="eyebrow">앞으로 칠일, 피해야 할 것</p>
          <h1 id="app-title" className="glitch" data-text="칠일금기">칠일금기</h1>
          <p className="intro-copy">
            Vite 개발 서버에서 정상 렌더링되는 기본 화면입니다. 이제 입력 화면과 의식 연출을 안전하게 다시 연결할 수 있습니다.
          </p>
          <button className="primary-button" type="button">금기를 확인한다</button>
        </div>
      </section>
    </main>
  );
}
