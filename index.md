<style>
/* ===== 雪国テーマ（CSS-only・JavaScript不要） ===== */

html::before,
html::after {
    content: '';
    position: fixed;
    top: -100vh;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: transparent;
    pointer-events: none;
    z-index: 0;
}

html::before {
    box-shadow:
         5vw   3vh rgba(255,255,255,0.80),
        11vw  18vh rgba(255,255,255,0.55),
        19vw  34vh rgba(255,255,255,0.70),
        26vw   7vh rgba(255,255,255,0.60),
        33vw  52vh rgba(255,255,255,0.80),
        40vw  22vh rgba(255,255,255,0.50),
        47vw  68vh rgba(255,255,255,0.75),
        54vw  43vh rgba(255,255,255,0.60),
        61vw  87vh rgba(255,255,255,0.55),
        68vw  11vh rgba(255,255,255,0.80),
        75vw  57vh rgba(255,255,255,0.65),
        82vw  29vh rgba(255,255,255,0.70),
        89vw  73vh rgba(255,255,255,0.50),
        95vw  44vh rgba(255,255,255,0.75),
         2vw  61vh rgba(255,255,255,0.60),
         9vw  82vh rgba(255,255,255,0.80),
        16vw  36vh rgba(255,255,255,0.55),
        23vw  96vh rgba(255,255,255,0.70),
        30vw  15vh rgba(255,255,255,0.65),
        37vw  79vh rgba(255,255,255,0.50);
    animation: cssSnowFall 12s linear -4s infinite;
}

html::after {
    box-shadow:
         7vw  51vh rgba(255,255,255,0.60),
        14vw   8vh rgba(255,255,255,0.75),
        21vw  63vh rgba(255,255,255,0.55),
        28vw  28vh rgba(255,255,255,0.80),
        35vw  77vh rgba(255,255,255,0.50),
        42vw  42vh rgba(255,255,255,0.70),
        49vw  91vh rgba(255,255,255,0.65),
        56vw  16vh rgba(255,255,255,0.80),
        63vw  69vh rgba(255,255,255,0.55),
        70vw  33vh rgba(255,255,255,0.75),
        77vw  84vh rgba(255,255,255,0.60),
        84vw  47vh rgba(255,255,255,0.70),
        91vw   2vh rgba(255,255,255,0.80),
        97vw  58vh rgba(255,255,255,0.50),
         4vw  23vh rgba(255,255,255,0.65),
        11vw  93vh rgba(255,255,255,0.75),
        18vw  38vh rgba(255,255,255,0.55),
        25vw  74vh rgba(255,255,255,0.70),
        32vw  12vh rgba(255,255,255,0.60),
        39vw  55vh rgba(255,255,255,0.80);
    animation: cssSnowFall 17s linear -9s infinite;
}

@keyframes cssSnowFall {
    from { transform: translateY(0); }
    to   { transform: translateY(200vh); }
}

html {
    background: linear-gradient(160deg, #102b4c 0%, #173761 30%, #264985 60%, #3566b0 100%);
    min-height: 100%;
}

body {
    position: relative;
    z-index: 1;
    max-width: 960px;
    margin: 36px auto 72px auto;
    background: rgba(235, 246, 255, 0.94);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-radius: 22px;
    box-shadow: 0 8px 48px rgba(0, 20, 60, 0.45), 0 0 0 1px rgba(160, 210, 250, 0.25);
    padding: 52px 60px;
    font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif;
    color: #1b2d3f;
    line-height: 1.85;
}

h1 {
    font-size: 2em;
    font-weight: bold;
    color: #0b3560;
    border-bottom: 3px solid transparent;
    border-image: linear-gradient(to right, #4a9eda, #b0e0f5, #4a9eda) 1;
    padding-bottom: 0.4em;
    letter-spacing: 0.04em;
}

h2 {
    font-size: 1.45em;
    font-weight: bold;
    color: #0b3560;
    margin-top: 2.2em;
    padding: 0.45em 1em;
    background: linear-gradient(135deg, #cfe9ff 0%, #e8f6ff 100%);
    border-left: 5px solid #4a9eda;
    border-radius: 0 12px 12px 0;
    box-shadow: 0 2px 8px rgba(74, 158, 218, 0.12);
}

h3 {
    font-size: 1.22em;
    font-weight: bold;
    color: #165b8a;
    margin-top: 1.8em;
    padding-bottom: 0.3em;
    border-bottom: 2px dashed #9fd3f0;
}

h4 {
    font-size: 1.05em;
    font-weight: bold;
    color: #1d6fa5;
    margin-top: 1.4em;
}

a {
    color: #1d6fa5;
    text-decoration: none;
    transition: color 0.2s;
}

a:hover {
    color: #0b3560;
    text-decoration: underline;
}

hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, transparent, #4a9eda, #b0e0f5, #4a9eda, transparent);
    margin: 2.2em 0;
    border-radius: 2px;
}

img {
    border-radius: 14px;
    box-shadow: 0 4px 18px rgba(0, 20, 60, 0.18);
    display: block;
    margin: 1.2em auto;
}

body > img:first-of-type {
    border-radius: 0;
    box-shadow: none;
}

table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 14px rgba(74, 158, 218, 0.18);
    margin: 1.2em 0;
}

table > thead > tr > th {
    background: linear-gradient(135deg, #2471a3, #4a9eda);
    color: #fff;
    padding: 11px 18px;
    font-weight: bold;
    text-align: left;
    border: none;
}

table > thead > tr > td,
table > tbody > tr > th,
table > tbody > tr > td {
    padding: 9px 18px;
    border: none;
    border-top: 1px solid #cfe9ff;
}

table > tbody > tr:nth-child(even) > td {
    background: rgba(160, 216, 245, 0.13);
}

table > tbody > tr:hover > td {
    background: rgba(74, 158, 218, 0.09);
    transition: background 0.2s;
}

pre {
    background: #091829 !important;
    border: 1px solid rgba(74, 158, 218, 0.3) !important;
    border-radius: 14px !important;
    padding: 22px 26px !important;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.22);
}

pre code {
    background: transparent !important;
    color: #c0e4f8 !important;
    padding: 0;
}

:not(pre):not(.hljs) > code {
    background: rgba(74, 158, 218, 0.13);
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #0b3560;
}

details {
    background: rgba(207, 233, 255, 0.35);
    border: 1px solid #9fd3f0;
    border-radius: 14px;
    margin: 0.9em 0;
    overflow: hidden;
}

details > summary {
    padding: 13px 20px;
    cursor: pointer;
    font-weight: bold;
    color: #0b3560;
    background: linear-gradient(135deg, #cfe9ff, #e8f6ff);
    user-select: none;
    transition: background 0.2s;
    border-radius: 14px;
    list-style: none;
}

details > summary::before {
    content: "▶ ";
    font-size: 0.75em;
    color: #4a9eda;
}

details[open] > summary {
    border-radius: 14px 14px 0 0;
}

details[open] > summary::before {
    content: "▼ ";
}

details > summary:hover {
    background: linear-gradient(135deg, #b3d8f5, #cfe9ff);
}

details > ul {
    padding: 14px 26px;
    margin: 0;
}

blockquote {
    background: rgba(160, 216, 245, 0.18);
    border-left: 4px solid #4a9eda;
    border-radius: 0 12px 12px 0;
    padding: 12px 22px;
}

strong {
    color: #0b3560;
}

ul li,
ol li {
    margin: 0.4em 0;
}

p > a[href*="%E7%9B%AE%E6%AC%A1"] {
    display: inline-block;
    padding: 4px 16px;
    background: linear-gradient(135deg, #4a9eda, #7ec8e3);
    color: #fff !important;
    border-radius: 20px;
    font-size: 0.85em;
    margin-top: 0.6em;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(74, 158, 218, 0.3);
}

p > a[href*="%E7%9B%AE%E6%AC%A1"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 14px rgba(74, 158, 218, 0.45);
    text-decoration: none !important;
}
</style>

 <img src="Assets/PENTAKT.png" width="600">

---

## 自己紹介
### 氏名：竹林尚哉（たけばやしなおや）
 <img src="Assets/Takebayashi.png" width="300">

本校に入学する前は、3年間溶接工として働いておりました。  
将来のキャリアを考えたとき、やはり好きなことを仕事にしたいと考え、ゲームプログラマーを目指すようになりました。
 

**趣味** : ドライブ、旅行  
**特技** : 溶接  
**休日の過ごし方** : 積みゲーの消化、ネッ友とゲーム  
**好きなゲームジャンル** : MMO、FPS、RPG、謎解き、サンドボックス、レース  
**最近遊んだゲーム** : サブノーティカ2、リズム天国、スターフォックス

**長所** :   
- **行動力** : 何をするにしても動き出しが速く、躊躇いがありません。試行回数が増える分、リカバリーも速いです。
- **正直者** : 言い訳や嘘をつくのが嫌い（できない）です。そのため、前職でも信用して仕事を任せていただいていました。
- **大体なんとかできる** : 時間がなくても大体なんとかできます。前職では「間に合わないはありえない」と口癖のように言われてきました。そのような環境に身を置いたことで、「間に合わない」のではなく「間に合わせようとしていない」だけだと気付きました。それ以降、緊急の仕事が舞い込んできても、きちんと期日までに終わらせてきました。

## 目次

- [1. プロジェクト概要](#1-プロジェクト概要)
  - [作品概要](#作品概要)
  - [ゲーム内容](#ゲーム内容)
  - [担当ソースコード](#担当ソースコード)
- [2. Physics実装](#2-physics実装)
  - [GhostBody](#ghostbody)
  - [CharacterController](#charactercontroller)
- [3. グラフィックス・レンダリング実装](#3-グラフィックスレンダリング実装)
  - [レンダリングパイプライン](#レンダリングパイプライン)
  - [PBRレンダリング](#pbrレンダリング)
  - [ポストエフェクト（ブルーム）](#ポストエフェクトブルーム)
  - [コンピュートシェーダー（海・渦潮）](#コンピュートシェーダー海渦潮)
  - [地形システム](#地形システム)
  - [SDFフォント](#sdfフォント)
  - [動画再生システム](#動画再生システム)
  - [サブカメラ（小窓描画）](#サブカメラ小窓描画)
- [4. ゲームプレイシステム実装](#4-ゲームプレイシステム実装)
  - [陣形システム](#陣形システム)
  - [ウルトシステム](#ウルトシステム)
  - [陣形UI](#陣形ui)
  - [レベルアップ演出](#レベルアップ演出)
  - [フィーバータイム](#フィーバータイム)
- [5. パフォーマンス最適化・その他機能](#5-パフォーマンス最適化その他機能)
  - [フラスタムカリング](#フラスタムカリング)
  - [リソースの非同期読み込み](#リソースの非同期読み込み)
  - [ディザリング](#ディザリング)
  - [危険矢印UI](#危険矢印ui)
- [6. 開発プロセス・ボツ案](#6-開発プロセスボツ案)
  - [未使用機能](#未使用機能)

---

## 1. プロジェクト概要

### 作品概要

| 項目 | 内容 |
|------|------|
| タイトル | ぺんたくと |
| 制作人数 | 4人 |
| 製作期間 | 2026年2月～現在 |
| ゲームジャンル | 3Dアクション |
| プレイ人数 | 1 |
| 対応ハード | PC (Windows 11) / Xbox コントローラー |
| 使用言語 | C++ |
| エンジン | BeastEngine（学校内製エンジン（k2EngineLow） / DirectX12） |
| 使用ツール | Visual Studio 2026<br>Visual Studio CodeAdobe<br>Photoshop 2026<br>3dsMax 2026<br>Effekseer<br>GitHub<br>Fork |
| GitHub URL | [https://github.com/TakebayashiNaoya/ProjectBeast](https://github.com/TakebayashiNaoya/ProjectBeast) |
| YouTube URL | [https://youtu.be/rVx5o2Aue9Y](https://youtu.be/rVx5o2Aue9Y) |

### ゲーム内容

親ペンギンを操作し、制限時間内に子ペンギンを集めたり、アチーブメントを達成することで、ハイスコアを狙うゲームです。  
個性的な子ペンギンたちに、煩わしさや可愛らしさを感じられるゲームを目指しました。

 <img src="Assets/InGame.png" width="600">
 <img src="Assets/Result.png" width="600">

[⇑目次に戻る](#目次)

### 担当ソースコード

<details>
<summary>エンジン（BeastEngine）</summary>

- BeastEngine/
  - Geomatry/
    - Frustum (.cpp / .h)
    - TriangleCuller (.cpp / .h)
  - Graphics/
    - Camera/
      - CameraSystem (.cpp / .h)
      - SubCameraManager (.cpp / .h)
    - Effect/
      - BeastEffectEmitter (.cpp / .h)
    - Font/
      - SDFFontEngine (.cpp / .h)
    - Light/
      - HemisphereLight (.cpp / .h)
      - PointLight (.cpp / .h)
      - SceneLight (.cpp / .h)
      - SpotLight (.cpp / .h)
    - PostEffect/
      - Bloom (.cpp / .h)
      - GaussianBlur (.cpp / .h)
      - PostEffectManager (.cpp / .h)
      - PostEffectTypes (.h)
    - Video/
      - VideoClip (.cpp / .h)
      - VideoFrameTexture (.cpp / .h)
      - VideoPlayer (.cpp / .h)
      - VideoRender (.cpp / .h)
    - BeastMeshParts (.cpp / .h)
    - BeastModel (.cpp / .h)
    - FontRender (.cpp / .h)
    - GraphicsEnums (.h)
    - ICustomRenderer (.h)
    - IRenderer (.h)
    - ModelRender (.cpp / .h)
    - MyRenderer (.h)
    - OcclusionDitherManager (.cpp / .h)
    - RenderViewContext (.h)
    - RenderingEngine (.cpp / .h)
    - SpriteRender (.cpp / .h)
  - Nature/
    - INatureObject (.h)
    - SkyCube (.cpp / .h)
  - Physics/
    - BoundingVolume (.cpp / .h)
    - BoxCollider (.cpp / .h)
    - BroadphaseImpl (.cpp / .h)
    - BroadphaseInterface (.cpp / .h)
    - CapsuleCollider (.cpp / .h)
    - CharacterController (.cpp / .h)
    - CollisionAttr (.h)
    - DebugWireframe (.cpp / .h)
    - GhostBody (.cpp / .h)
    - GhostBodyManager (.cpp / .h)
    - GhostPrimitive (.cpp / .h)
    - ICollider (.h)
    - MeshCollider (.cpp / .h)
    - PhysicalBody (.cpp / .h)
    - Physics (.cpp / .h)
    - RigidBody (.cpp / .h)
    - SphereCollider (.cpp / .h)
    - Types (.h)
  - Resource/
    - AnimationClipResource (.cpp / .h)
    - ModelResource (.cpp / .h)
    - ResourceManager (.cpp / .h)
    - SkeletonResource (.h)
  - BeastEngine (.cpp / .h)
  - BeastEnginePreCompile (.cpp / .h)

</details>

<details>
<summary>ゲーム（Game/Source）</summary>

- Game/Source/
  - Actor/Character/Penguin/Formation/
    - Effect/
      - FormationEffectChain (.h)
      - FormationEffects (.cpp / .h)
      - IFormationEffect (.h)
    - Ult/
      - UltContext (.h)
      - UltController (.cpp / .h)
    - FormationController (.cpp / .h)
    - FormationDebugMonitor (.cpp / .h)
    - FormationRangeVisualizer (.cpp / .h)
    - Formations (.cpp / .h)
    - MasterFormationParameter (.h)
    - TerrainCircle (.cpp / .h)
  - Actor/Stage/
    - TerrainObject (.cpp / .h)
  - GameLog/
    - GameLogManager (.cpp / .h)
  - Graphics/
    - PBRParameter (.cpp / .h)
    - PBRStatus (.cpp / .h)
  - Manager/
    - FeverTimeManager (.cpp / .h)
  - Nature/
    - Ocean (.cpp / .h)
    - OceanParameter (.h)
    - Whirlpool (.cpp / .h)
    - WhirlpoolManager (.cpp / .h)
    - WhirlpoolParameter (.h)
  - Noise/
    - NoiseManager (.cpp / .h)
  - Scene/
    - EasyInGameScene (.h)
    - HardInGameScene (.h)
    - InGameSceneBase (.cpp / .h)
    - NormalInGameScene (.h)
    - TutorialController (.cpp / .h)
    - TutorialInGameScene (.cpp / .h)
  - UI/
    - DangerArrow/
      - DangerArrowCalc (.h)
      - DangerArrowMenu (.cpp / .h)
      - DangerArrowSystem (.cpp / .h)
    - Fever/
      - FeverIconMenu (.cpp / .h)
    - FormationWheel/
      - FormationWheelMenu (.cpp / .h)
    - Menus/
      - LevelUpIconMenu (.cpp / .h)
      - TutorialMenu (.cpp / .h)
      - TutorialWindowMenu (.cpp / .h)
    - Model/
      - LevelUpIconAnimStatus (.cpp / .h)

</details>

<details>
<summary>シェーダー（Game/Assets/shader）</summary>

- Game/Assets/shader/
  - PostEffect/
    - bloom.fx
    - blur.fx
    - kawaseBloom.fx
  - debugWireFrame.fx
  - DeferredLighting.fx
  - DeferredLighting_cav_register.h
  - DeferredLighting_srv_uav_register.h
  - DrawVolumeLight.fx
  - FormationRange.fx
  - IBL.h
  - LinearFillGauge.fx
  - model.fx
  - model_srv_uav_register.h
  - ModelVSCommon.h
  - Ocean.fx
  - OceanWaveCS.hlsl
  - outline.fx
  - RenderToGBuffer.fx
  - Sampler.h
  - SDFFont.fx
  - SkyCubeMap.fx
  - sprite.fx
  - Terrain.fx
  - toon.fx
  - Whirlpool.fx

</details>

<details>
<summary>パラメーター（Game/Assets/parameter）</summary>

- Game/Assets/parameter/
  - character/penguin/formation/
    - FormationParameter.json
    - FormationSwitchTuning.json
  - fever/
    - feverParameter.json
  - Graphics/
    - PBRParameter.json
  - nature/
    - oceanParameter.json
    - whirlpoolParameter.json
  - Tutorial/
    - Tutorial.json
  - UI/fever/
    - FeverIcon.json
  - UI/formationWheel/
    - FormationWheel.json
    - FormationWheelTuning.json
  - UI/levelUp/
    - LevelUpIcon.json

</details>

[⇑目次に戻る](#目次)

---

## 2. Physics実装

### GhostBody

BulletPhysicsには、物理的に押し返さず重なりだけを検知する `btGhostObject` という仕組みがあります。  
攻撃のダメージ判定や敵の索敵範囲など、**「すり抜けるが、接触だけ検知したい」** 処理にはこれが適しています。  
しかし `btGhostObject` をゲームコードから直接扱うと、生成・破棄のタイミング管理や衝突属性のフィルタリング、判定後の通知といった処理をすべてバラバラに書く必要があり、コードが煩雑になることがわかりました。  
そこで `btGhostObject` をラップし、これらをまとめて管理する **`GhostBody`** システムを自作しました。  
また、`GhostBody` の形状として使用している `CapsuleCollider` / `BoxCollider` / `SphereCollider` / `MeshCollider` といったコライダークラスも自作していますが、これらはUnityの同名クラスを意識した命名にしています。  
チームメンバーが役割をすぐに把握できるよう、あえて既存エンジンと揃えました。

#### 1. BVHによる広域判定で計算量を削減

 <img src="Assets/BVH.png" width="600">

すべての GhostBody 同士をO(n²)で調べると、オブジェクト数が増えたときに処理落ちしてしまいます。  
そこで判定を2段階に分けました。  
1段階目は 広域判定（Broadphase） で、BVH（Bounding Volume Hierarchy）の一種であるDynamic AABB Tree（btDbvt）を使って **「近くにいる可能性があるペア」** だけを絞り込みます。  
各 GhostBody をAABBで包んでツリー構造に登録しておくことで、ツリーを再帰的に辿るだけで遠いペアをまとめて除外でき、O(n²)の総当たりを避けられます。  
2段階目の詳細判定に進む前にも、両者の包含球（BoundingRadius）の半径の和と距離を比較して届いていなければ即スキップする早期リターンを挟み、重い計算が走るケースをさらに減らしています。

#### 2. ビット演算による衝突属性の管理

オブジェクトの種類が増えると「誰と誰が当たるか」の管理が煩雑になります。  
これを解決するため、各 `GhostBody` に **Attribute**（自分の種別）と **Mask**（当たりたい相手の種別）をビットフラグで持たせました。  
`(a->GetMask() & b->GetAttribute()) && (b->GetMask() & a->GetAttribute())` という1行で相互フィルタリングが完結するようにし、新しい種別を追加しても既存の判定ロジックに手を加える必要がないようにしました。

#### 3. GhostBodyの登録・解除を自動化

`GhostBody` の生成タイミングと `GhostBodyManager` への登録タイミングがずれると、判定漏れやダングリングポインタの原因になります。  
これを防ぐため、**`CreateCore()` 内で `GhostBodyManager::AddBody()` を呼んで自動登録し、デストラクタで `RemoveBody()` を呼んで自動解除**する設計にしました。  
形状データも `std::unique_ptr<IGhostShape>` で保持し、形状を差し替えた際の古いメモリ解放も自動で行われるようにしました。

#### 4. 判定と後処理の分離

衝突判定のループ内でダメージ処理や座標変更を直接行うと、同一フレームで複数回ヒットが検出された際に処理の二重適用が起きるリスクがあります。  
そこで `GhostBodyManager` 内では**当たったペアの情報をコールバック（`registerPairCallback_`）として外部に通知するだけ**にとどめ、具体的な後処理は呼び出し側で行う設計にしました。  
これにより判定フェーズと処理フェーズを明確に分離し、順序依存のバグが起きにくくしました。

[⇑目次に戻る](#目次)

---

### CharacterController

キャラクターが壁や床と正しく衝突しながら移動できるよう、**`CharacterController`** を自作しました。  
なお、`CharacterController` や内部で使用している `CapsuleCollider` / `RigidBody` / `RaycastHit` といったクラス名は、Unityの同名クラスを意識した命名にしています。チームメンバーがUnityの知識を持っていることが多いため、役割をすぐに把握できるよう、あえて既存エンジンと揃えました。  
カプセル形状のコライダーと `btRigidBody` を組み合わせて物理空間に参加させており、移動の解決はすべて自前のロジックで行っています。

#### XZ移動：壁沿いスライド

 <img src="Assets/WallKick.gif" width="600">

XZ平面の移動では、**Sweep Test**（形状を空間上でスライドさせてどこで衝突するかを調べる処理）を使って壁との接触を検出します。  
壁に当たった場合は、移動ベクトルから壁の法線方向の成分を打ち消すことで、**壁に沿ってスムーズに滑る**動きを実現しています。  
また、コーナーに挟まってキャラクターがスタックしないよう、この処理を複数回繰り返す**反復スライディング解決**を採用しています。

#### Y移動：重力・接地・海面追従

垂直方向は毎フレーム重力加速度を加算し、下向きにスイープテストを行うことで床への接地を判定します。  
同様に上向きのスイープテストで天井との衝突も検出しており、ジャンプ中に天井に頭をぶつけると垂直速度がリセットされます。  
また、`SetSeaLevel()` で海面の高さを渡すことで、**キャラクターが海面より下に沈まない**ようにしています。  
泳ぎ状態に切り替わると重力をOFFにし、波面の高さに追従する動きへとシームレスに切り替わります。

#### テレポート対応

`RequestTeleport()` を呼ぶと、次の `Execute()` で**衝突判定を一切行わずに目標座標へ瞬間移動**します。  
これにより、ステージの切り替えやリスポーン処理など、強制的に座標を変えたい場面でも安全に対応できるようにしました。

[⇑目次に戻る](#目次)

---

## 3. グラフィックス・レンダリング実装

### レンダリングパイプライン

#### フォワードレンダリング

まず最初にフォワードレンダリングのみで実装しました。  
しかし、ライトの数が増えると、画面に映っていないピクセルに対してもライティング計算が走るため、  
**将来的にライトが増えた際に処理が重くなる**という問題がありました。  
それを解決するために、後述するディファードレンダリングも実装しました。  
また、フォワードとディファードを両方実装することで**それぞれの特性を比較・理解する**という学習目的もありました。

#### ディファードレンダリング

フォワードレンダリングの問題を解決するため、またフォワードとの違いを学ぶため、ディファードレンダリングを実装しました。
ディファードレンダリングでは、まずジオメトリパスで各オブジェクトの情報を **GBuffer** に書き込みます。

| GBufferスロット | 内容 |
|---|---|
| アルベド | オブジェクトの色・深度 |
| 法線 | ワールド空間の法線ベクトル |
| メタリックスムース | PBRパラメータ（metallic / smooth / ライト倍率） |

その後、ライティングパスでGBufferを参照して**画面全体に対して1回だけ**ライティング計算を行います。  
これにより、将来的にライトの数が増えても処理コストが抑えられます。  
メタリックスムースの枠には、もともとスペキュラーマップを入れていましたが、後述するPBRに差し換えました。

#### フォワード＋ディファード ハイブリッド構成

ディファードレンダリングには**半透明オブジェクトの描画が苦手**という欠点があります。  
GBufferは1ピクセルにつき1つの情報しか持てないため、複数の半透明レイヤーを正しく合成できません。  
そこで、以下のようなハイブリッド構成にしました。

- **不透明オブジェクト** → ディファードレンダリングで描画
- **半透明オブジェクト・スカイキューブ等** → フォワードレンダリングで描画

オブジェクトはそれぞれ `m_deferredModelList` / `m_forwardModelList` に振り分けられ、描画パスが切り替わります。
`SetForwardRendering(true)` を呼ぶことで、モデル単位でフォワード描画に切り替えることができるようにしました。

[⇑目次に戻る](#目次)

---

### PBRレンダリング

| PBRなし | PBRあり |
| ------- | ------- |
| <img src="Assets/PBR_OFF.gif" width="600"> | <img src="Assets/PBR_ON.gif" width="600"> |

見た目のクオリティを上げるため、**PBR（物理ベースレンダリング）** を実装しました。

PBRは現実の光の物理法則に基づいてライティングを計算する手法です。  
金属・非金属の質感を統一されたパラメータで表現できるため、リアルな見た目を実現することができました。

実装には以下のモデルを使用しています。

- **拡散反射**：正規化Lambertモデル + フレネル補正による拡散反射量の調整
- **鏡面反射**：Cook-Torranceモデル（GGX法線分布・幾何減衰・フレネル反射）
- **パラメータ**：metallic（金属度）/ smooth（滑らかさ）をGBufferに書き込み、ディファードライティングパスでまとめて計算

また、モデルごとに `PBRParam` を設定することで、ディレクションライト強度・環境光強度・metallicオフセット・smoothオフセットを個別に調整できるようにしました。
jsonを用いることで、プログラマー以外の方でも簡単に調整できるようにしています。

```c++
[
  {
    "name": "Dummy",
    "comment1": "dirLightScale(0.0〜∞): ディレクションライト強度倍率 （直接光が完全に消える（影側と同じ明るさになる）、1.0：デフォルト（SceneLightで設定した色そのまま）、2.0以上：白飛びに注意）",
    "dirLightScale": 1.0,
    "comment2": "ambientScale(0.0〜∞): 環境光強度倍率 （0.0：環境光なし（影側が真っ黒になる）、1.0：デフォルト、大きくするほど：影側が明るくなりフラットな見た目に近づく）",
    "ambientScale": 1.0,
    "comment3": "metallicOffset(-1.0〜1.0): メタリックオフセット （低いほど：非金属的になり、鏡面反射が白に近づく、0.0：デフォルト、高いほど：金属的な見た目になり、鏡面反射がアルベドカラーに近づく）",
    "metallicOffset": 0.0,
    "comment4": "smoothOffset(-1.0〜1.0): スムーズオフセット （低いほど：表面が粗くなり拡散反射が支配的になる（雪・布的）、0.0：デフォルト、高いほど：表面が滑らかになり鏡面反射が鋭くなる（金属・水面的））",
    "smoothOffset": 0.0
  },
  {
    "name": "igloo",
    "dirLightScale": 0.5,
    "ambientScale": 1.5,
    "metallicOffset": 1.0,
    "smoothOffset": 1.0
  }
]
```

[⇑目次に戻る](#目次)

---

### ポストエフェクト（ブルーム）

| ブルームなし | ブルームあり |
| ------- | ------- |
| <img src="Assets/Ocean_Bloom_OFF.gif" width="600"> | <img src="Assets/Ocean_Bloom_ON.gif" width="600"> |

見た目のクオリティをさらに上げるため、**ブルーム**を実装しました。  
これにより、海の鏡面反射がキラキラと輝いて見えるようになりました。  
海のシェーダーでは、スペキュラ値をHDR（1.0を超える値）として出力し、ブルームとの相性を良くしています。

#### 処理フロー

1. **輝度抽出**：メインレンダリングターゲットから、しきい値を超える明るいピクセルだけを抽出
2. **ブラー**：抽出した輝度テクスチャにブラーをかけてぼかす
3. **加算合成**：ぼかした結果をメインレンダリングターゲットに加算合成

ブルームの種別は以下の2種類から切り替えられます。

| 種別 | 内容 |
|---|---|
| 通常ブルーム | 輝度テクスチャを1段ブラーして合成 |
| 川瀬式ブルーム | 解像度を段階的に半分に縮小しながら最大4段ブラーして平均合成。より広い発光表現が可能 |

ブラーの種別も**平均ブラー**と**ガウシアンブラー**から選択できます。
ガウシアンブラーは中心に近いほど重みが大きく、より自然なぼけを実現します。

[⇑目次に戻る](#目次)

---

### コンピュートシェーダー（海・渦潮）

#### 海

 <img src="Assets/Ocean_Bloom_OFF.gif" width="600">

海はC++で動的にグリッドメッシュを生成し、頂点を波のように動かすことでリアルな海面を表現しています。

グリッドの分割数は **128×128** で、頂点数は約17,000個になります。  
これらすべての頂点の波高さを毎フレームCPUで計算すると処理負荷が高くなるため、**コンピュートシェーダー**でGPU並列処理を行うようにしました。

 <img src="Assets/Wave.gif" width="600">

波の計算は2本のsin波を重ねた式で行います。

- **波①**：X方向（speed倍率 1.0）
- **波②**：斜め方向（X:0.6, Z:0.8、speed倍率 1.7）

スレッドグループは `(8, 8, 1)` でディスパッチし、各スレッドが1頂点の波高さを `RWStructuredBuffer` に書き出します。  
CPUにReadbackした波高さキャッシュは、チャンクAABBの構築にも活用しています。

頂点シェーダー側でも同じ数式で波高さを計算し、隣接点との差分近似で法線を再構築しています。

海もjsonでパラメーター調整できるようにしています。
```c++
[
	{
		"baseReflectance": 0.0,   // 基本反射率
		"wave1Amplitude": 5.0,    // 波①の振幅
		"wave1Frequency": 0.025,  // 波①の空間周波数
		"wave2Amplitude": 2.0,    // 波②の振幅
		"wave2Frequency": 0.06,   // 波②の空間周波数
		"specularPower": 50.0,    // スペキュラのPhong指数（大きいほどハイライトが絞られる）
		"specularScale": 0.5,     // スペキュラ強度の倍率（0.0で照り返しを消せる）
		"ambientScale": 2.0       // 海専用アンビエント強度倍率（他オブジェクトに影響しない）
	}
]
```

#### 渦潮

 <img src="Assets/Whirlpool.gif" width="600">

渦潮はUV座標を中心（0.5, 0.5）基点で毎フレーム回転させることで、渦が回って見えるアニメーションを実現しました。  
また、渦潮自体も円形グリッドメッシュで構成されており、毎フレーム `Ocean::SampleWaveHeight()` を呼び出して、  
海の波高さキャッシュを参照することで、渦潮メッシュの各頂点Y座標を海面の高さに合わせています。  
これにより、渦潮が波に乗って自然に揺れているように見えます。

渦潮もjsonでパラメーター調整できるようにしています。
```c++
[
    {
        "whirlpoolRadius":      200.0,  // 渦潮の影響範囲半径
        "attractSpeed":         30.0,   // 引き寄せ速度（半径方向）
        "rotateSpeed":          3.0,    // 渦巻き回転速度（ラジアン/秒）
        "uvRotationSpeed":      1.5,    // UV回転速度（ラジアン/秒）
        "scaleChangeTime":      2.5,    // 渦潮の拡大率の変化にかかる時間
        "stayTime":             10.0,   // 渦潮の拡大率が最大値で留まる時間
        "createInterval":       2.0,    // 渦潮の生成間隔
        "orbitRadius":          80.0,   // 子ペンギンが落ち着く中心からの軌道半径
        "orbitRadiusVariation": 20.0,   // 軌道半径のランダム変動最大幅（±この値）
        "orbitOffsetVariation": 30.0,   // 個体ごとの軌道半径オフセットの最大幅（±この値）
        "rotateScaleVariation": 0.3     // 個体ごとの回転速度倍率の変動幅（1.0 ± この値）
    }
]
```

[⇑目次に戻る](#目次)

---

### 地形システム

<img src="Assets/TutorialStageHeightMap.png" width="300"><img src="Assets/TutorialStageSplatMap.png" width="300"><img src="Assets/TutorialStage.png" width="600">

ハイトマップから地形メッシュをCPU側で動的生成し、スプラットマップで複数テクスチャをブレンドする地形システムを実装しました。

#### 1. ハイトマップからのメッシュ生成

DirectXTexライブラリでDDS（R16_UNORM形式）のハイトマップを読み込み、各ピクセルの輝度値を `pixel / 65535.0f × heightScale` でワールド高さに変換します。  
変換した高さ値を格納した頂点バッファをCPU上で構築し、`TkmFile` としてリソースバンクに登録することで、エンジンの既存描画パスにそのまま流し込むことができます。  
`subsample` パラメーターで解像度を落とすことで、ポリゴン数とクオリティのバランスを場面ごとに調整できます。

#### 2. スプラットマップによるテクスチャブレンド

地形テクスチャの塗り分けにはスプラットマップ（R=雪・G=草・B=岩）を使用しています。  
シェーダー（`Terrain.fx`）側でスプラットマップのRGB値をウェイトとして読み取り、3種のアルベドテクスチャを加重平均で合成します。  
さらに各テクスチャにノーマルマップとラフネスマップを紐付けることで、既存のPBRライティングパスが地形でも正しく機能するようにしました。

#### 3. チャンク単位のフラスタムカリング

地形全体を一枚のメッシュとして扱うと、地形が巨大な場合に描画コストが高くなります。  
そこで地形をチャンク単位（`chunkDivision × chunkDivision`）に分割し、それぞれに独立した `ModelRender` を割り当てました。  
毎フレームのフラスタムカリングでチャンクAABBと視錐台の交差判定を行い、**画面に映っているチャンクのみGPUに送る**ことで、地形の描画コストを抑えています。

#### 4. 物理コリジョン

描画用のチャンクメッシュとは別に、フルメッシュから `PhysicalBody` のコリジョンを生成しています。  
これにより、プレイヤーや子ペンギンが地形の起伏に正しく乗り上げることができます。

[⇑目次に戻る](#目次)

---

### SDFフォント

デフォルトの `Font` クラスではビットマップフォントを使用しており、拡大するとピクセルが荒れる問題がありました。  
これを解決するため、**SDF（Signed Distance Field）フォント**を実装しました。

#### 仕組み

SDF方式では、各グリフを「文字の輪郭からの距離」を格納したテクスチャ（SDFアトラス）として表現します。  
カスタムピクセルシェーダー（`SDFFont.fx`）側でこの距離値をしきい値で切り分けることで、**どの解像度・スケールでも鮮明な文字**を描画できます。

#### 実装の流れ

<img src="Assets/sdf_atlas.png" width="300">

1. **アトラス生成**：`msdf-atlas-gen` ツールで使用文字のSDFアトラス（PNG）とグリフメタデータ（JSON）を事前生成
2. **グリフ読み込み**：JSONからUnicodeコードポイントをキーとするグリフ情報（アドバンス幅・UV座標・プレーン座標）をunordered_mapに展開
3. **描画**：`SpriteBatch` + カスタムPSでグリフを1文字ずつ配置・描画

テキストアライメント（左・中央・右）、行間倍率、ドロップシャドウを設定できるようにし、  
`FontRender` に差し替えるだけでゲームコードを変更せずにSDF描画へ切り替えられる設計にしました。

[⇑目次に戻る](#目次)

---

### 動画再生システム

 <img src="Assets/Tutorial.gif" width="600">

ステージセレクト画面でゲームプレイ映像を再生するため、**動画再生システム**を自作しました。

#### クラス構成

| クラス | 役割 |
|---|---|
| `VideoClip` | フレームデータの保持・デコード |
| `VideoPlayer` | 再生状態の管理（再生・停止・ループ・速度） |
| `VideoFrameTexture` | CPU→GPUへのフレームデータ転送 |
| `VideoRender` | スプライトとしての描画 |

#### 2種類のクリップ形式に対応

連番PNG（コマ撮り）とMP4の両方に対応しています。  
- **連番PNG**：全フレームをメモリに事前ロードし、インデックスで即座にアクセス
- **MP4**：Windows Media Foundation APIでストリーミングデコード。`IMFSourceReader` を `void*` で保持することでヘッダーへのWindows.hインクルードを回避

#### VideoFrameTexture：CPU→GPU転送の設計

毎フレーム画像データをGPUに転送するため、以下の2バッファ構成を採用しました。

```
[UPLOADヒープ] ← CPU書き込み → CopyTextureRegion → [DEFAULTヒープ（GPU読み取り）]
```

コマンドリスト記録中に `CopyTextureRegion` を発行し、前後にリソースバリア（`PIXEL_SHADER_RESOURCE → COPY_DEST → PIXEL_SHADER_RESOURCE`）を挟んで同期します。  
また、**前フレームと同じインデックスの場合はUploadFrameを呼ばない**ことで、不要なGPU転送を省いています。

[⇑目次に戻る](#目次)

---

### サブカメラ（小窓描画）

 <img src="Assets/SubCamera.gif" width="600">

シロクマに狙われた子ペンギンを別視点で映す**ピクチャー・イン・ピクチャー（小窓）**を実装しました。

#### レンダリングパイプラインへの組み込み

`RenderViewContext` という構造体を新設し、GBuffer・レンダーターゲット・フラスタム・カメラをビュー単位でまとめて管理できるようにしました。  
`RenderingEngine` はメインカメラ→サブカメラの順に `ExecuteViewPass()` を呼び出し、**各ビューで独立した描画パスを実行**します。

```
[メインカメラ] → GBuffer → ディファードライティング → ポストエフェクト → メインRT
[サブカメラ]  → GBuffer → ディファードライティング                        → サブRT
                                                                           ↓
                                                              画面上にスプライトとして合成
```

サブカメラのビューにはポストエフェクトを適用しないことで、描画コストを抑えています。

#### SubCameraManagerによる制御

`SubCameraManager` は `CameraSystem` に対してサブカメラの生成・破棄を指示するとともに、小窓スプライトのスライドイン・アウトアニメーションを管理します。  
ポーズ画面表示中は `SetRenderingBlocked(true)` で描画をスキップし、タイトル遷移時は `ForceEnd()` でアニメーションを省いて即時消去できるようにしました。

[⇑目次に戻る](#目次)

---

## 4. ゲームプレイシステム実装

### 陣形システム

 <img src="Assets/Formation.gif" width="600">

親ペンギンに追従する子ペンギンたちの隊列を「陣形」として実装しました。
**円陣・密集陣・散開陣・三角陣**の4種類があり、プレイヤーは状況に応じて陣形を切り替えることで、移動速度や渦潮への耐性、隊列の広さなどが変化します。

#### IFormationによる陣形の抽象化

各陣形は `IFormation` を継承し、`CalculatePositions()` で子ペンギンの配置座標を計算します。

- **リング陣形（円陣・密集陣・散開陣）**：共通基底クラス `RingFormation` が、リング k（1始まり）に `baseFollowers*k` 体を等間隔配置するロジックを持ちます。各リングの半径は `radiusPerRing*k` となり、全リングで隣接間隔が均一になるよう設計しています。3陣形はこの基底クラスを継承し、`baseFollowers` / `radiusPerRing` などのパラメーターだけをJSONで変えることで隊列の密度を作り分けています。
- **三角陣**：ボーリングのピン配置のようにレベル1で9体を4行に並べ、レベルが上がるごとに外周を1層ずつ拡張していくアルゴリズムを実装しました。

```c++
// RingFormation::CalculatePositions（抜粋）
// リング ring（1始まり）: baseFollowers*ring 体を半径 radiusPerRing*ring に等間隔配置
for (int ring = 1; placed < count; ++ring)
{
    const int   ringCount = m_param->baseFollowers * ring;
    const float radius    = m_param->radiusPerRing * ring;
    for (int i = 0; i < ringCount && placed < count; ++i)
    {
        const float angle = startAngle + (float)i / ringCount * 2.0f * Math::PI;
        Vector3 pos = center;
        pos.x += radius * sinf(angle);
        pos.z += radius * cosf(angle);
        out.push_back(pos);
        ++placed;
    }
}
```

#### FormationControllerによるレベル管理・入隊判定・範囲の可視化

`FormationController` は4種類の `IFormation` インスタンスを配列で保持し、現在の陣形への切り替え・座標計算の委譲・陣形レベル管理（満員になったリング数）をまとめて行います。  
入隊判定半径は「最外半径 + 入隊マージン」で求まり、**ウルト発動中は陣形固有の拡大距離との大きい方を採用**することで、ウルト中だけ一時的に入隊しやすくなる演出も実現しています。

この入隊範囲を可視化するため、地形の起伏に貼り付く円 `TerrainCircle` と、それを束ねる `FormationRangeVisualizer` を実装しました。`TerrainCircle` は中心座標から `PhysicsWorld::Raycast` → `Ocean::SampleWaveHeight` の順に地表高さをサンプリングして円周上の各頂点のYを決定し、陸地でも海面でも地形に沿ったリングを描画します。  
これらは既存の `RenderingEngine` にゲーム側専用の描画クラスを差し込むための新インターフェース `ICustomRenderer` を経由して呼び出しており、エンジン側のフォワードレンダリングパスに独自メッシュ・独自シェーダー（`FormationRange.fx`）で割り込めるようにしました。

[⇑目次に戻る](#目次)

---

### ウルトシステム

#### コンポジット・ストラテジーパターンによる陣形効果の設計

陣形ごとに固有のウルト効果（速度アップ・渦潮耐性・シロクマ攻撃無効化・ペンギン呼び出しなど）を組み合わせる際、if文の羅列にならないよう、`IFormationEffect` を起点にしたコンポジット・ストラテジー構成で設計しました。

- `IFormationEffect`：`GetSpeedMultiplier()` / `HasWhirlpoolResistance()` / `Enter` / `Update` / `Exit` を持つ、効果1つ分のインターフェース
- `FormationEffectChain`：複数の `IFormationEffect` を保持し、速度倍率は全エフェクトの**乗算**、渦潮耐性は全エフェクトの**OR**で合成する
- 各 `IFormation` は「常時有効な `m_passive`」と「ウルト中のみ有効な `m_ult`」の2本のチェーンを持ち、コンストラクタで `SpeedModifierEffect` / `WhirlpoolResistanceEffect` / `PenguinCallEffect` / `BearAttackNullifyEffect` などの具体エフェクトを陣形ごとに組み合わせて登録する

```c++
// ClusterFormation（密集陣）のウルト効果の組み立て例
m_ult.AddEffect(std::make_unique<WhirlpoolSpeedBoostEffect>(&param.ultWhirlpoolBoostMultiplier));
if (param.ultBearAttackNullify)
{
    m_ult.AddEffect(std::make_unique<BearAttackNullifyEffect>());
}
m_ultVisual = std::make_unique<UltEffectCluster>();  // ウルト演出（ビジュアル）は効果と分離して所有
```

この設計により、新しい陣形やウルト効果を追加する際も既存クラスを一切変更せず、`FormationEffects.h` に効果クラスを1つ追加して陣形のコンストラクタで組み合わせるだけで済むようになっています。

#### UltControllerによる発動・タイマー管理

`UltController` はこのエフェクトチェーンと演出（`IUltEffect`、非所有ポインタ）を受け取り、発動・毎フレーム更新・クールダウン管理を担当します。効果と演出の所有権はどちらも `IFormation` 側が持ち、`UltController` は陣形切り替え時に `SetUlt()` で参照を差し替えるだけにすることで、陣形をまたいだウルトの状態遷移でも安全に破棄・切り替えができるようにしています。  
また、チャージ中（クールダウン中）とディスチャージ中（発動中）のループSEの再生・停止も `UltController` 側で状態同期しており、シーン破棄時だけでなく、それを経由しない破棄経路でも鳴りっぱなしにならないようデストラクタで明示的に停止する保険を入れています。

[⇑目次に戻る](#目次)

---

### 陣形UI

| ウルトチャージ中 | ウルト発動可能 | ウルト発動中 |
| ------- | ------- | ------- |
|<img src="Assets/Ult_Charge.gif" width="600">| <img src="Assets/Ult_CanActive.gif" width="600"> | <img src="Assets/Ult_Active.gif" width="600"> |

#### FormationWheelMenu：陣形切り替え・ウルトゲージの表示

画面下部に現在の陣形アイコンを中央に大きく表示し、その左右にLB/RBで切り替わる陣形アイコンを並べるUIを実装しました。切り替え中は各アイコンが横方向にスライドするアニメーションを行い（`FormationController::IsSwitchingFormation()` と連動して連続入力をロック）、LT/RTのウルトアイコンはウルト発動可能な間だけ通常色、それ以外はグレーアウトします。座標・サイズ・色などの見た目パラメーターは `FormationWheelTuning.json` からホットリロードで調整できるようにし、デザイン確認のたびにビルドし直す手間を無くしました。

#### LinearFillGauge：アイコンの形を保ったまま塗りつぶすゲージシェーダー

ウルトのクールダウンゲージには、アイコンの絵柄を保ったまま下から上へ色が塗り上がっていく表現が欲しかったため、専用シェーダー `LinearFillGauge.fx` を新規実装しました。

```hlsl
// UV.y は 0(画像の上端) 〜 1(画像の下端)。下端から g_fillAmount の割合だけ塗りつぶす
float fillLine = 1.0f - g_fillAmount;
float fillMask = smoothstep(fillLine - AA, fillLine + AA, In.uv.y);
float4 tint = lerp(g_baseColor, g_fillColor, fillMask);
float4 color = float4(tint.rgb, tint.a * texAlpha);
```

テクスチャのアルファ値（アイコンの形）はそのまま活かしつつ、UV.y方向のしきい値を `smoothstep` で滑らかにブレンドすることで、スケールを変えずにアンチエイリアスのかかった塗り分けを実現しています。BeastEngine側には対応する `LinearFillGaugeRender`（`IRenderer` 派生）を追加し、ゲーム側からは `UIParts.h` の `UILinearFillGauge` を通して他のUI部品と同じ感覚で `SetFillAmount()` を呼ぶだけで使えるようにしました。

[⇑目次に戻る](#目次)

---

### レベルアップ演出

 <img src="Assets/LevelUp.gif" width="600">

陣形のリングが満員になり陣形レベルが上がった瞬間、親ペンギンの頭上にアイコンを表示する `LevelUpIconMenu` を実装しました。ワールド座標をスクリーン座標に変換して追従させつつ、上昇移動とフェードイン→待機→フェードアウトを行います。色のフェード自体は既存の `UIColorAnimation` に任せ、`LevelUpIconMenu` 側はフェードイン用アニメーションからフェードアウト用アニメーションへ差し替えるタイミング管理と移動更新だけに責務を絞ることで、既存のUIアニメーション基盤を再利用しつつ演出固有のロジックを薄く保っています。

[⇑目次に戻る](#目次)

---

### フィーバータイム

 <img src="Assets/Fever.gif" width="600">

ステージ上の子ペンギンを全員捕獲した瞬間、または残り時間が一定を下回った瞬間のどちらか早い方で発生する「フィーバータイム」を実装しました。`FeverTimeManager` が発生条件の判定と、上空からの子ペンギン投下キューの管理（1回のフィーバーで投下する総数の上限、捕獲するたびにキューへ積み増す挙動など）をまとめて担当します。

フィーバー開始時には画面に「FEVER」の文字をF→E→V→E→Rの順に波打つようにジャンプさせながら登場させ、一定時間後に同じ順番でジャンプ退場させる演出を `FeverIconMenu` で実装しました。文字ごとに移動用のベジェ曲線とアルファ用のカーブを個別に持たせ、開始タイミングをずらして再生することで、文字が連鎖的にジャンプしているように見えるようにしています。

[⇑目次に戻る](#目次)

---

## 5. パフォーマンス最適化・その他機能

### フラスタムカリング

 <img src="Assets/FrustumCulling.gif" width="600">

※分かりやすくするために、デバッグ用にフラスタムの範囲を狭めています。  
画面外のオブジェクトを描画しないようにするため、**フラスタムカリング**を実装しました。  
ビュープロジェクション行列から6平面を抽出し、AABBやポリゴンとの交差判定を行います。

|フラスタムカリングOFF|フラスタムカリングON|
|---|---|
|<img src="Assets/FPS_Slow.gif" width="600">|<img src="Assets/FPS_Fast.gif" width="600">|

スポーン直後でFPSを計測しました。  
フラスタムカリングをONにすると、安定して144fpsが出ていますが、OFFにすると140fpsを下回ることが多々あります。

#### 通常モデルの場合
  
静的なモデル（ステージ等）は、**メッシュの頂点座標からワールド空間のAABBを構築**して粗判定し、  
AABBが視錐台と交差している場合は、さらに **トライアングルカリング** によるポリゴン単位の細判定を行います。  
これにより、1つのモデルでも画面に映っているポリゴンだけを描画できるようにしました。  

なお、アニメーションのあるモデルは、**ボーンの座標からワールド空間のAABBを構築**して判定します。  
キャラクターモデルはサイズが小さいためフラスタムを跨ぐことも少なく、スキニングの再計算をするとCPUの負荷が高まるため、  
トライアングルカリングは行っていません。

#### 海の場合

海は1つの巨大なグリッドオブジェクトで構成されています。  
最初からポリゴン単位で判定するとCPUへの負荷が大きすぎるため、**2段階**でAABB判定しています。

1. **チャンク単位のAABB判定**：海を 8×8 のチャンクに分割し、視錐台と交差するチャンクだけを通過させる
2. **セル単位のAABB判定**：通過したチャンクをさらにセル単位で交差判定し、可視セルのみをGPUに送る

チャンクのAABBのY範囲は、コンピュートシェーダーで計算した**波高さキャッシュ**から動的に構築します。  
これにより、CPUとGPUの負荷バランスを適切に保ちながら描画コストを削減しています。

[⇑目次に戻る](#目次)

---

### リソースの非同期読み込み

<img src="Assets/Load.gif" width="600">

BeastEngine に **`ResourceManager`** を実装し、  
 - モデル（tkm）
 - スケルトン（tks）
 - アニメーションクリップ（tka）

のファイルIOをワーカースレッドで非同期に実行しています。  
これにより、ロード画面を動かしつつ、裏でリソースの読み込みを行っています。

#### 設計のポイント

ファイルIO（重い処理）はワーカースレッドで行い、  
バンク登録やオブジェクトの初期化（グローバル状態に触れる処理）はメインスレッドで行うという
**スレッドセーフな役割分担**を意識して実装しました。
```
[ワーカースレッド]               [メインスレッド]
ファイルIO（tkmの読み込みなど）  → IsReady() で完了を確認
                                 → Finalize() でバンク登録・初期化
```


同じファイルパスへの2回目以降のリクエストはキャッシュから返るため、**二重IOが発生しない**設計になっています。

#### キャラクターへの適用

`CharacterBase::Update()` 内でロード完了を毎フレーム確認し、完了後に `ModelRender` の初期化を行います。  
ロード完了までの間もゲームループは止まらず、他のオブジェクトは通常通り動作します。

[⇑目次に戻る](#目次)

---

### ディザリング

<img src="Assets/Dithering.gif" width="600">

カメラとプレイヤーの間にオブジェクトがある場合、プレイヤーが見えなくなってしまいます。  
この問題を解決するために、ディザリングによる遮蔽オブジェクトの透過処理を実装しました。

#### 実装の経緯

最初は**スイープテスト**でカメラとプレイヤーの間にあるオブジェクトを検出する方法を試みました。
しかし以下の問題が発生しました。

- オブジェクト全体が半透明になってしまう
- 足元にあるオブジェクトまで半透明になってしまう

#### 解決策：円錐状のレイキャストによるピクセル単位判定

そこで、**カメラからプレイヤーに向かって円錐状にレイを飛ばし、遮蔽されているピクセルだけをピンポイントで透過**する方法に変更しました。

処理はGBufferへの書き込みシェーダー（`RenderToGBuffer.fx`）内で行います。

1. **前後判定**：フラグメントがカメラとプレイヤーの間にあるか判定
2. **円錐内判定**：カメラ→プレイヤー方向の視線から、フラグメントまでの距離が円錐の外側半径以内かを判定
3. **フェード**：内側半径（外側の70%）〜外側半径の範囲で `smoothstep` によるグラデーション
4. **ディザリング**：4×4 Bayerパターンを用いてピクセルを間引き、透過を表現

これにより、プレイヤーと重なっている部分だけをピンポイントで透過でき、不要な半透明化が発生しなくなりました。  
また、ディザリングはGBufferパスでピクセルを `clip()` で破棄するだけなので、**ディファードレンダリングとの相性が良い**という利点もあります。

[⇑目次に戻る](#目次)

---

### 危険矢印UI

 <img src="Assets/SubCamera.gif" width="600">

シロクマに狙われている子ペンギンをプレイヤーに知らせるため、**危険矢印UI**を実装しました。  
ターゲットがカメラのフラスタム内にいるか外にいるかで、矢印の種類と配置を自動的に切り替えます。

#### フラスタム外：edge arrow

ターゲットが画面外にいる場合、**画面中央を基点とした円の縁（半径300px）に矢印を配置**し、ターゲットの方向を指し示します。  
ターゲットのワールド座標をスクリーン座標に変換し、画面中心からの角度を `atan2` で求めて円縁上の座標と回転角を算出しています。

#### フラスタム内：overhead arrow

ターゲットが画面内にいる場合、**ターゲットの真上に下向きの矢印を配置**し、一目でどの子ペンギンが狙われているかわかるようにしました。

#### サブカメラとの連動

どちらのケースでも、最もカメラに近い攻撃対象が `SubCameraManager` を通じてサブビュー（小窓）に映し出されます。  
ただしターゲットが十分近く（距離1000未満）かつフラスタム内にいる場合は、プレイヤーが目視できる状況なのでサブビューを非表示にします。

#### DangerArrowCalcによる定数の一元管理

矢印の配置計算に使う定数（円半径・オフセット・回転角）と計算関数は `DangerArrowCalc.h` に分離しました。  
`DangerArrowSystem` と `TutorialController` の両方がこのヘッダーを参照することで、**チュートリアルの矢印と実戦の矢印が常に同じ位置・角度で表示される**ことを保証しています。

[⇑目次に戻る](#目次)

---

## 6. 開発プロセス・ボツ案

### 未使用機能

実装はしていますが、今作では使用していない機能です。

#### リムライト

`DeferredLighting.fx` 内に実装されており、ディレクションライトの計算結果に加算する形で組み込まれています。  
現在は強度パラメータを調整することで無効化しています。

#### セルシェーダー

トゥーン用シェーダー（`toon.fx` / `outline.fx`）として実装されており、`ModelRender` の設定でモデル単位に有効化できます。  
陰の段階数・閾値・輪郭線の太さと色を個別に設定可能です。  
今作のアートスタイルには合わなかったため、使用していません。

[⇑目次に戻る](#目次)
