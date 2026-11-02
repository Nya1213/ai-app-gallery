const grid = document.getElementById("app-grid");
const empty = document.getElementById("empty");
const countLabel = document.getElementById("result-count");
const buttons = document.querySelectorAll(".filter-btn");

const PLATFORM_LABEL = { pc: "💻 PC", mobile: "📱 スマホ" };

// 1つのアプリからカード（<a>要素）を作る
function createCard(app) {
  const card = document.createElement("a");
  card.className = "app-card";
  card.href = app.url;

  // 外部サイトのアプリは新しいタブで開く
  if (/^https?:\/\//.test(app.url)) {
    card.target = "_blank";
    card.rel = "noopener";
  }

  // プレビュー部分：画像があれば画像、なければ絵文字＋グラデーション
  const thumb = document.createElement("div");
  thumb.className = "app-thumb";
  if (app.image) {
    const img = document.createElement("img");
    img.src = app.image;
    img.alt = app.title;
    img.loading = "lazy";
    thumb.appendChild(img);
  } else {
    const [c1, c2] = app.color || ["#6366f1", "#a855f7"];
    thumb.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    thumb.textContent = app.emoji || "✨";
  }

  const body = document.createElement("div");
  body.className = "app-body";

  const title = document.createElement("h2");
  title.className = "app-title";
  title.textContent = app.title;

  const desc = document.createElement("p");
  desc.className = "app-desc";
  desc.textContent = app.description;

  const meta = document.createElement("div");
  meta.className = "app-meta";

  const author = document.createElement("span");
  author.className = "app-author";
  author.textContent = app.author ? `by ${app.author}` : "";

  const badges = document.createElement("div");
  badges.className = "badges";
  for (const p of app.platforms || []) {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = PLATFORM_LABEL[p] || p;
    badges.appendChild(b);
  }
  for (const t of app.tags || []) {
    const b = document.createElement("span");
    b.className = "badge";
    b.textContent = `#${t}`;
    badges.appendChild(b);
  }

  meta.append(author, badges);
  body.append(title, desc, meta);
  card.append(thumb, body);
  return card;
}

// 絞り込み条件に合うアプリだけを表示する
function render(filter) {
  const list = filter === "all"
    ? APPS
    : APPS.filter((app) => (app.platforms || []).includes(filter));

  grid.replaceChildren(...list.map(createCard));
  empty.hidden = list.length > 0;
  countLabel.textContent = `${list.length} 件`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
    render(btn.dataset.filter);
  });
});

// 最初の表示：スマホで開いたら自動で「スマホ」を選んでおく
const isMobile = window.matchMedia("(pointer: coarse)").matches;
const initial = isMobile ? "mobile" : "all";
buttons.forEach((b) => b.classList.toggle("is-active", b.dataset.filter === initial));
render(initial);
