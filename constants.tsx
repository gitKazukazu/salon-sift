
import { SalonLocation, NewsPost, FAQItem } from './types';

export const COLORS = {
  primary: '#3a533d', // Forest Green
  bgLight: '#f7f7f5', // Off-white/Beige
  bgWhite: '#ffffff',
  textMain: '#333333',
  textMuted: '#666666',
};

export const SALONS: SalonLocation[] = [
  {
    id: 'pivot-cross',
    name: 'SALON SIFT',
    city: 'TAKASAKI CITY',
    address: '群馬県高崎市伊野町1122 (最寄:井野駅)',
    phone: '027-321-xxxx',
    imageUrl: '/images/salon_sift_interior.png',
    links: { hotpepper: '#', beauty: '#' }
  },
  {
    id: 'takasaki',
    name: 'SALON SIFT takasaki',
    city: 'TAKASAKI CITY',
    address: '群馬県高崎市連雀町123 2F (高崎駅西口徒歩5分)',
    phone: '027-365-4321',
    imageUrl: 'https://placehold.jp/1200x900.png',
    links: { hotpepper: '#', beauty: '#' }
  },
  {
    id: 'maebashi',
    name: 'SALON SIFT maebashi',
    city: 'MAEBASHI CITY',
    address: '群馬県前橋市本町2-3-4 1F (前橋駅徒歩10分)',
    phone: '027-299-0000',
    imageUrl: 'https://placehold.jp/1200x900.png',
    links: { hotpepper: '#' }
  }
];

export const FEATURES_DATA = [
  {
    id: '01',
    title: '年収400万以下の業務委託は危険です',
    desc: '今のままでは永遠に搾取され続けます。月商70万で手取りが38万？週6勤務で将来の不安が拭えないなら、今すぐ環境を変えるべきです。SALON SIFTでは「売上70万→手取り60万」の設計を実現。ネイル・アイリストも同条件で受け入れ可能です。',
    img: '/images/features/01.jpg'
  },
  {
    id: '02',
    title: '80%還元の本当の内訳',
    desc: '「最大80%還元」は嘘ではありませんが、都合の良いメリットだけは語りません。材料は持参していただくか、サロン提供の場合は70%還元になります。最低保証30万も出勤日数等の明確な条件付き。数字の裏側をすべてさらし、納得した方だけを採用します。',
    img: '/images/features/02.jpg'
  },
  {
    id: '03',
    title: 'うちが合わない人',
    desc: '「なんとなく楽したい」「現状維持でいい」という方は絶対に応募しないでください。私たちは本気で収入を上げたい、環境を変えたい方だけを求めています。厳しい自己管理が必要になる反面、圧倒的なリターンと自由をお約束します。',
    img: '/images/features/03.jpg'
  },
  {
    id: '04',
    title: 'ネイル・マツエクも同条件',
    desc: '美容師だけでなく、ネイリストやアイリストも同じ「手取り最大化」の条件で合流可能です。集客はサロン側で強力にバックアップ。あなたの技術を安売りせず、正当な対価と時間的自由を手に入れるためのプラットフォームを提供します。',
    img: '/images/features/04.jpg'
  }
];

export const NEWS: NewsPost[] = [
  { id: 1, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】高崎店の独立支援制度を利用して夢を叶えたスタイリスト', imageUrl: '/images/faq_staff_jp_v2.png' },
  { id: 2, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】自分のペースで働く、前橋エリアの新しい美容師のカタチ', imageUrl: '/images/faq_staff_jp_v2.png' },
  { id: 3, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】子育てとキャリアを両立。ママ美容師のシェアサロン活用法', imageUrl: '/images/faq_staff_jp_v2.png' },
  { id: 4, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】24歳で独立。SALON SIFTがくれた自信と集客のチャンス', imageUrl: '/images/faq_staff_jp_v2.png' },
  { id: 5, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】移籍初月から手取り60万。高還元率がもたらした生活の変化', imageUrl: '/images/faq_staff_jp_v2.png' },
  { id: 6, date: '2025.06.26', category: 'INTERVIEW', title: '【インタビュー】高崎駅前という好立地を武器に、顧客ゼロからスタート', imageUrl: '/images/faq_staff_jp_v2.png' }
];

export const FAQS: FAQItem[] = [
  { id: 1, question: '利用料金について教えてください。', answer: '歩合率は業界最高水準の80%〜90%となっております。詳細は収益シミュレーションをご覧ください。' },
  { id: 2, question: '見学は可能ですか？', answer: 'はい、随時受け付けております。LINEよりお問い合わせください。' },
  { id: 3, question: '材料の持ち込みは可能ですか？', answer: '可能です。また、当サロンで用意しているプロ仕様の材料もご利用いただけます。' }
];
