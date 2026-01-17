/**
 * Simulation Visualizations - 作品メタデータ
 * 
 * 新しい作品を追加する際は、works配列に新しいオブジェクトを追加してください。
 * 
 * 各作品のプロパティ:
 * - id: 一意の識別子（URL pathにも使用）
 * - title: 作品のタイトル
 * - description: 作品の説明
 * - path: 作品ページへの相対パス
 * - tags: カテゴリタグの配列
 * - date: 作成日（YYYY-MM-DD形式）
 * - thumbnail: サムネイル画像のパス（オプション、nullの場合はiconを使用）
 * - icon: アイコン（絵文字やUnicode記号、thumbnailがない場合に表示）
 */
const METADATA = {
  meta: {
    generated: "2025-12-28T00:00:00Z",
    version: "1.0.0",
    description: "Simulation Visualizations - 作品メタデータ"
  },
  works: [
    {
      id: "topological-space-1",
      title: "Euler Topology: ℝ ⟷ ℂ Continuum",
      description: "実数空間と複素空間の間の位相的連続性を、オイラーの公式を通じて可視化。力学系のパラメータ空間における滑らかな遷移をリアルタイムで探索できます。",
      path: "./works/topological-space-1/index.html",
      tags: ["Topology", "Complex Analysis", "Dynamical Systems", "WebGL"],
      date: "2025-01-01",
      thumbnail: null,
      icon: "∮"
    },
    {
      id: "bh-formation-3d",
      title: "Black Hole Formation: Ring/Shadow/Holonomy",
      description: "ブラックホール形成の前後を3Dで統合可視化。光子リング、事象の地平線、ホロノミー効果、時空の折り畳み構造を、一般相対性理論に基づいて表現します。",
      path: "./works/bh-bench/work-1/index.html",
      tags: ["General Relativity", "Black Hole", "3D Visualization", "Three.js", "Geodesics"],
      date: "2025-01-17",
      thumbnail: null,
      icon: "◉"
    }
    // 新しい作品をここに追加
    // 例:
    // {
    //   id: "mandelbrot-explorer",
    //   title: "Mandelbrot Set Explorer",
    //   description: "マンデルブロ集合の無限の自己相似性を探索...",
    //   path: "./works/mandelbrot-explorer/index.html",
    //   tags: ["Fractal", "Complex Analysis", "WebGL"],
    //   date: "2025-01-15",
    //   thumbnail: null,
    //   icon: "∞"
    // }
  ]
};

