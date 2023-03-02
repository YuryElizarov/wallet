declare module '*.module.css';

declare module '*.module.scss';

declare module '*.mp4' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const content: any;
  export default content;
}

interface WindowChain {
  ethereum?: {
    isMetaMask?: true;
    request?: (...args: any[]) => void;
  };
}
