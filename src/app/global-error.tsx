'use client';

// ルートでクライアント例外が起きたときの表示。
// これが無いと Next.js 既定のエラー画面に置き換わり、<title> も消えて検索結果が「無題」になる。
export default function GlobalError({
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="ja">
      <head>
        <title>Dr.Love</title>
        <meta name="description" content="心にもうひとり味方がいる日常へ。Dr.Love" />
      </head>
      <body
        style={{ margin: 0, padding: '80px 16px', textAlign: 'center', fontFamily: 'sans-serif' }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Dr.Love</h1>
        <p style={{ marginBottom: '24px' }}>ページの表示中に問題が発生しました。</p>
        <button type="button" onClick={() => reset()}>
          再読み込み
        </button>
      </body>
    </html>
  );
}
