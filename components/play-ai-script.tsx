'use client';

import Script from 'next/script';

export default function PlayAiScript() {
  return (
    <Script
      src="https://unpkg.com/@play-ai/web-embed"
      onLoad={() => {
        // @ts-ignore
        window.PlayAI.open('VhcoZD2ZdzR16LTJhoIis');
      }}
    />
  );
}
