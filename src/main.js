import './style.css';

const base = import.meta.env.BASE_URL;
const projects = [
  { no: '01', title: '오늘뭐함', type: '웹 서비스', copy: '할 일을 가볍게 모으고, 오늘 할 일만 보여주는 일정 앱입니다.', image: 'sample-01.jpg', tone: 'blue' },
  { no: '02', title: '구름상점', type: '브랜드 실험', copy: '구름 모양 물건을 모아 소개하는 가상의 작은 상점입니다.', image: 'sample-02.jpg', tone: 'violet' },
  { no: '03', title: '간식레이더', type: '데이터 프로젝트', copy: '시간대별 간식 취향을 귀여운 그래프로 보여주는 예제입니다.', image: 'sample-03.jpg', tone: 'orange' },
  { no: '04', title: '느린우체통', type: '사이드 프로젝트', copy: '미래의 나에게 짧은 메모를 보내는 가상의 서비스입니다.', image: 'sample-04.jpg', tone: 'green' },
];

document.querySelector('#app').innerHTML = `
  <div class="sample-note"><span class="note-dot"></span> 샘플 페이지 · 이름, 프로젝트, 사진은 모두 예제입니다</div>
  <header class="topbar"><a class="brand" href="#top">김아무개<span>.</span></a><nav aria-label="주 메뉴"><a href="#projects">프로젝트</a><a href="#about">소개</a><a href="#contact">연락</a></nav><a class="top-link" href="#contact">인사 나누기 <span>↗</span></a></header>
  <main id="main">
    <section class="hero" id="top"><p class="eyebrow"><span class="sparkle">✳</span> EXAMPLE PORTFOLIO</p><h1>좋아하는 걸<br><span>만들어 봅니다.</span></h1><p class="hero-copy">안녕하세요, 김아무개입니다. 작은 아이디어를<br class="desktop-only"> 웹과 여러 가지 실험으로 옮겨보는 예제 포트폴리오예요.</p><a class="primary-button" href="#projects">프로젝트 구경하기 <span>↓</span></a><div class="hero-sticker sticker-one">여기는<br>샘플이에요!</div><div class="hero-sticker sticker-two">hello<br>world ☺</div></section>
    <section class="projects section-wrap" id="projects"><div class="section-head"><div><p class="eyebrow">A FEW EXAMPLES</p><h2>만들어 본 것들<span class="accent-dot">.</span></h2></div><p>그럴듯한 프로젝트 이름과<br>설명으로 채운 샘플 카드예요.</p></div><div class="project-grid">${projects.map(p => `<article class="project-card"><a class="project-image ${p.tone}" href="#contact"><img src="${base}assets/${p.image}" alt="장식용 샘플 사진"><span class="image-tag">SAMPLE ${p.no}</span><span class="image-arrow">↗</span></a><div class="project-meta"><span>${p.no} / ${p.type}</span><span>2026</span></div><h3>${p.title}</h3><p>${p.copy}</p></article>`).join('')}</div></section>
    <section class="about section-wrap" id="about"><div class="about-mark">아무거나<br>궁금해요<span>!</span></div><div class="about-copy"><p class="eyebrow">A LITTLE ABOUT ME</p><h2>호기심으로 시작해,<br>하나씩 배워갑니다.</h2><p>김아무개는 샘플 페이지를 위해 만든 이름입니다. 이 칸에는 좋아하는 일, 배우는 것, 요즘 관심 있는 이야기를 편하게 적어보세요.</p><div class="chips"><span>아이디어 메모</span><span>작은 실험</span><span>커피 한 잔</span></div></div></section>
    <section class="contact" id="contact"><p class="eyebrow">SAY HELLO</p><h2>다음 아이디어를<br>같이 이야기해요.</h2><a href="mailto:hello@example.com" class="contact-link">hello@example.com <span>↗</span></a><p class="contact-hint">연락처도 예시 주소입니다.</p></section>
  </main>
  <footer><a class="brand" href="#top">김아무개<span>.</span></a><span>샘플 포트폴리오 · 실제 인물과 무관합니다</span><a href="#top">맨 위로 ↑</a></footer>
`;
