import dynamic from 'next/dynamic';

const componentsMap = {
  home: dynamic(() => import('./Home'), { ssr: false }),
  money: dynamic(() => import('./Money'), { ssr: false }),
  photos: dynamic(() => import('./Photos'), { ssr: false }),
  log: dynamic(() => import('./Log'), { ssr: false }), // NEW
};