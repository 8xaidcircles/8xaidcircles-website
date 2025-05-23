---

# 8xaidcircles Website

## 概要

8xaidcirclesの公式ランディングページ（LP）です。  
React と Tailwind CSS を使用して構築されています。

---

## 技術スタック

- React (v18)
- Tailwind CSS
- Vite (開発ビルドツール)
- Render（ホスティングサービス）

---

## 環境構築

### 必須環境

- Node.js (v16以上推奨)
- npm または yarn

### 手順

```bash
# リポジトリをクローン
git clone https://github.com/your-github-user/your-repo-name.git

# プロジェクトディレクトリへ移動
cd 8xaidcircles-website

# 依存パッケージをインストール
npm install
# または
yarn install

# 開発用サーバーを起動
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

* **Build Command:** `npm install && npm run build`
* **Start Command:** `npm run preview`
* **Publish Directory:** `dist`

Renderは自動でビルドを行い、公開します。

---

## 主要スクリプト一覧

| コマンド              | 説明           |
| ----------------- | ------------ |
| `npm run dev`     | 開発サーバーを起動    |
| `npm run build`   | 本番ビルドを作成     |
| `npm run preview` | ビルド成果物のプレビュー |

---

## フォルダ構成

```
8XAIDCIRCLES-WEBSITE/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Layout.js
│   ├── pages/Home/components/
│   │   ├── About.js
│   │   ├── Brand.js
│   │   └── News.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
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
