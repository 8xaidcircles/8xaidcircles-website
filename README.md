---

# 8xaidcircles Website

## 概要

8xaidcirclesの公式ランディングページ（LP）です。
React と Tailwind CSS を使用して構築されており、開発ビルドには Vite を使用しています。

---

## 技術スタック

- React (v18)
- Tailwind CSS
- Vite (開発ビルドツール)
- Render（ホスティングサービス）
- React Router (v6)

---

## 環境構築

### 必須環境

- Node.js (v16以上推奨)
- npm または yarn

### 手順

```bash
# リポジトリをクローン
git clone https://github.com/your-github-user/your-repo-name.git # 実際のリポジトリURLに修正

# プロジェクトディレクトリへ移動
cd 8xaidcircles-website

# 依存パッケージをインストール
npm install
# または
yarn install

# CRAからの移行の場合、react-scriptsを削除しVite関連パッケージを追加
# npm uninstall react-scripts
# npm install --save-dev vite @vitejs/plugin-react
# または
# yarn remove react-scripts
# yarn add --dev vite @vitejs/plugin-react
```

### vite.config.js の作成

プロジェクトのルートディレクトリに `vite.config.js` を新規作成し、以下の内容を記述します。
React Router を使用しているため、開発サーバー設定に `historyApiFallback: true` を含めます。

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Render用に dist を出力先に指定
  },
  server: {
    historyApiFallback: true // React Router 使用時の設定
  }
});
```

### index.html の修正と移動

CRA の `public/index.html` をプロジェクトのルートディレクトリに移動し、以下の Vite 仕様に合わせて修正します。

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="jp">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>8X Aid Circles LP</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script> {/* エントリーポイントを修正 */}
  </body>
</html>
```

### package.json のスクリプト修正

`package.json` の `scripts` を以下のように修正し、Vite コマンドを使用するようにします。

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### .js ファイルの .jsx へのリネーム

JSX 構文を含む `.js` ファイルは、Vite で正しく処理するために `.jsx` 拡張子に変更する必要があります。
以下のファイルをリネームしてください。

- `src/index.js` -> `src/index.jsx`
- `src/App.js` -> `src/App.jsx`
- `src/components/Footer.js` -> `src/components/Footer.jsx`
- `src/components/Header.js` -> `src/components/Header.jsx`
- `src/components/Layout.js` -> `src/components/Layout.jsx`
- `src/pages/Home/components/About.js` -> `src/pages/Home/components/About.jsx`
- `src/pages/Home/components/Brand.js` -> `src/pages/Home/components/Brand.jsx`
- `src/pages/Home/components/News.js` -> `src/pages/Home/components/News.jsx`

### 開発サーバーの起動

上記の手順が完了したら、以下のコマンドで開発サーバーを起動できます。

```bash
npm run dev
# または
yarn dev
```

---

## ビルド

本番用ビルドを作成します。

```bash
npm run build
# または
yarn build
```

ビルド成果物は `dist/` フォルダに出力されます。

---

## デプロイ（Render）

Renderにデプロイする際は、以下の設定を推奨します。

*   **Build Command:** `npm install && npm run build`
*   **Start Command:** `npm run preview` # Render の設定に合わせて修正が必要な場合があります
*   **Publish Directory:** `dist`

Renderは自動でビルドを行い、公開します。

---

## 主要スクリプト一覧

| コマンド              | 説明             |
| ----------------- | -------------- |
| `npm run dev`     | 開発サーバーを起動      |
| `npm run build`   | 本番ビルドを作成       |
| `npm run preview` | ビルド成果物のプレビュー   |

---

## フォルダ構成

```
8XAIDCIRCLES-WEBSITE/
├── index.html         # ルートに移動
├── vite.config.js
├── package.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── pages/Home/components/
│   │   ├── About.jsx
│   │   ├── Brand.jsx
│   │   └── News.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx    # .jsx に変更
│   └── index.css
├── public/            # 中身が必要な場合のみ残す
│   └── (favicon.icoなど)
├── tailwind.config.js
├── postcss.config.js
└── README.md

```

---

## 開発のポイント

- Tailwind CSS のユーティリティクラスでデザインを実装
- React コンポーネントを小さく分割して再利用性を高める
- Vite を使用した高速ホットリロード

---

## コントリビュート

プルリクエストやIssueは歓迎します。
変更の際は必ず動作確認を行ってください。

---

## お問い合わせ

*   Email: [8xaidcircles@gmail.com](mailto:8xaidcircles@gmail.com)
*   GitHub: [https://github.com/8xaidcircles](https://github.com/8xaidcircles)

```