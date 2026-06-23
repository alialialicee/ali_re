# 칠일금기

공포 콘셉트로 앞으로 일주일 동안 피하면 좋은 것만 알려주는 React + TypeScript + Vite 웹앱입니다. 외부 API와 외부 이미지 없이 프론트엔드만으로 동작합니다.

## 실행 방법

> **중요:** `index.html` 파일을 브라우저에서 직접 열지 마세요. 이 프로젝트는 Vite가 `/src/main.tsx`를 개발 서버에서 변환해 제공해야 정상 실행됩니다. `file://`로 직접 열면 브라우저가 TypeScript/TSX 모듈을 처리하지 못해 하얀 화면이나 콘솔 에러가 발생할 수 있습니다.

```bash
npm install
npm run dev
```

브라우저에서 Vite가 안내하는 로컬 주소(보통 `http://localhost:5173`)로 접속하세요. 목표 확인 방식은 **파일 직접 열기**가 아니라 **Vite dev server 접속**입니다.

## 하얀 화면이 보일 때 확인할 것

1. `npm run dev`가 실행 중인지 확인합니다.
2. 브라우저 주소가 `file:///.../index.html`이 아니라 `http://localhost:5173/` 형태인지 확인합니다.
3. `index.html`에 `<div id="root"></div>`와 `<script type="module" src="/src/main.tsx"></script>`가 있어야 합니다.
4. `src/main.tsx`는 `App`을 `./App`에서 import하고, `./styles.css`도 함께 import합니다.
5. 브라우저 콘솔에 `Failed to load module script`, `CORS`, `Cannot use import statement outside a module`, `.tsx MIME type` 같은 오류가 보이면 `index.html`을 직접 연 것이므로 `npm run dev`로 다시 실행하세요.

## 빌드 및 미리보기

```bash
npm run build
npm run preview
```

`npm run build`는 TypeScript 검사 후 정적 파일을 `dist/`에 생성합니다. 빌드 결과를 로컬에서 확인할 때도 `dist/index.html`을 직접 열기보다 `npm run preview`를 사용하세요.

## GitHub Pages 배포 메모

Vite 앱을 GitHub Pages의 저장소 하위 경로에 배포한다면 `vite.config.ts`의 `base` 설정을 확인해야 합니다.

현재 설정은 `base: './'`로, 생성되는 정적 에셋 경로를 상대 경로로 만들어 GitHub Pages 하위 경로와 로컬 정적 미리보기에 모두 대응하기 쉽습니다. 특정 저장소 경로로 고정하고 싶다면 예를 들어 저장소명이 `ali_re`일 때 `base: '/ali_re/'`처럼 바꿀 수 있습니다.

## npm scripts

- `npm run dev`: Vite 개발 서버 실행
- `npm run build`: TypeScript 검사 및 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기 서버 실행
