
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
    title: 'あなたのスタイルで働ける！サポート体制完備',
    desc: 'フリーランス売上70-80%還元。正社員・パート・フリーランス選べる勤務形態。寸志ボーナス・賞与あり。',
    img: '/images/features/01.jpg'
  },
  {
    id: '02',
    title: 'フリーランスでも安心！集客力の高い環境づくり',
    desc: 'フリーランス最大80%還元。効率的な教育制度で短期スキルアップ。ライフスタイルに合わせた自由な働き方。',
    img: '/images/features/02.jpg'
  },
  {
    id: '03',
    title: '自分らしく、働き方をデザイン！',
    desc: '正社員・パート・フリーランス選べる勤務形態。安定した集客支援完備。完全週休2日。',
    img: '/images/features/03.jpg'
  },
  {
    id: '04',
    title: '充実した集客支援◎ 自分のペースで収入をアップ',
    desc: '安心の集客支援で収入安定。正社員・パート・フリーランス選べる勤務形態。ライフスタイルに合わせたシフト制度。',
    img: '/images/features/04.jpg'
  },
  {
    id: '05',
    title: '働き方を自由に選べるサロン',
    desc: 'フリーランス最大80%還元。中途月給30万円〜+各種手当。安心の集客支援◎',
    img: '/images/features/05.jpg'
  },
  {
    id: '06',
    title: '自分のペースで成長できる教育制度',
    desc: '効率的な教育制度で短期間でスキルアップ。レッスンは自由参加で、経験に応じたサポートを受けながら確実に成長できる環境です。',
    img: '/images/features/06.jpg'
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
