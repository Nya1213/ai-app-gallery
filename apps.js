// ===============================================
//  アプリ一覧（ここを書き換えるだけでトップページに反映されます）
// ===============================================
//
//  1つのアプリ = { ... } の1ブロック。追加するときはブロックをコピーして書き換えてください。
//
//  title       : アプリ名
//  description : 概要（1〜2行くらい）
//  author      : 作った人の名前
//  platforms   : 対応端末。"pc" と "mobile" のどちらか、または両方
//  url         : 押したときに開く場所
//                  - このサイトの中に置く場合 → "apps/フォルダ名/index.html"
//                  - 別のサイトにある場合     → "https://..." のフルURL
//  image       : プレビュー画像やロゴのパス（なければ "" のままでOK → 絵文字が表示される）
//  emoji       : 画像がないときに表示する絵文字
//  color       : 画像がないときの背景色（2色でグラデーション）
//  tags        : 自由なタグ（なくてもOK）

const APPS = [
  {
    title: "食堂見取り図メーカー",
    description: "寮の食堂に机や椅子を並べて、通路・階段などのエリアにタグを付けられる見取り図エディタ。",
    author: "Takumi",
    platforms: ["pc"],
    url: "apps/shokudo-mitorizu/index.html",
    image: "",
    emoji: "🪑",
    color: ["#1d6a66", "#52b5aa"],
    tags: ["ツール"],
  },
  {
    title: "サンプル：カウンター",
    description: "ボタンを押すと数が増えるだけのシンプルなアプリ。追加方法の見本です。",
    author: "Takumi",
    platforms: ["pc", "mobile"],
    url: "apps/sample-counter/index.html",
    image: "",
    emoji: "🔢",
    color: ["#6366f1", "#a855f7"],
    tags: ["サンプル"],
  },
  {
    title: "サンプル：PC専用ゲーム",
    description: "キーボード操作のゲームを想定した見本カード。PCで絞り込むと表示されます。",
    author: "友達",
    platforms: ["pc"],
    url: "apps/sample-counter/index.html",
    image: "",
    emoji: "🎮",
    color: ["#0ea5e9", "#22d3ee"],
    tags: ["ゲーム"],
  },
  {
    title: "サンプル：スマホ専用ツール",
    description: "タップ操作向けアプリを想定した見本カード。スマホで絞り込むと表示されます。",
    author: "友達",
    platforms: ["mobile"],
    url: "apps/sample-counter/index.html",
    image: "",
    emoji: "📱",
    color: ["#f97316", "#facc15"],
    tags: ["ツール"],
  },
];
