# AI App Gallery

AIと一緒に作ったアプリを公開するサイトです。GitHub Pages で無料公開できます。

## フォルダ構成

```
ai-app-gallery/
├── index.html      トップページ
├── style.css       見た目
├── script.js       カード表示・絞り込みの処理
├── apps.js         ★アプリ一覧（普段さわるのはここだけ）
├── images/         プレビュー画像・ロゴを置く場所
└── apps/           アプリ本体を置く場所
    └── sample-counter/index.html
```

## アプリの追加方法

1. `apps/` の中にフォルダを作り、アプリの `index.html` などを入れる
   （例：`apps/my-game/index.html`）
2. プレビュー画像があれば `images/` に入れる（例：`images/my-game.png`、横長 16:10 くらいがきれい）
3. `apps.js` にブロックを1つ追加する

```js
  {
    title: "マイゲーム",
    description: "矢印キーで遊ぶアクションゲーム。",
    author: "友達の名前",
    platforms: ["pc"],              // スマホも対応なら ["pc", "mobile"]
    url: "apps/my-game/index.html", // 別サイトにあるなら "https://..."
    image: "images/my-game.png",    // なければ ""
    emoji: "🎮",
    color: ["#0ea5e9", "#22d3ee"],
    tags: ["ゲーム"],
  },
```

いらないサンプル3つは `apps.js` から消してOKです（`apps/sample-counter` フォルダも削除可）。

## 手元で確認する

`index.html` をダブルクリックで開けば確認できます。

## GitHub Pages で公開する

1. GitHub で新しいリポジトリを作る（Public）
2. 「uploading an existing file」から、`ai-app-gallery` の**中身**を全部ドラッグ＆ドロップして Commit
3. リポジトリの **Settings → Pages** を開き、
   Source を「Deploy from a branch」、Branch を `main` / `/(root)` にして Save
4. 1〜2分で `https://ユーザー名.github.io/リポジトリ名/` に公開されます

### 友達と一緒に更新するには

リポジトリの **Settings → Collaborators** から友達のGitHubアカウントを招待すると、
友達もアプリを追加できるようになります。
