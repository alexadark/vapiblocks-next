// import Orb from '@/components/orb';
import VapiGlob from '@/components/vapi-glob';

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-between p-1 ">
      <div>
        <div>
          <a
            href="https://vapiblocks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Orb by VapiBlocks
          </a>
        </div>
      </div>
      {/* <Orb /> */}
      <VapiGlob />
    </main>
  );
}
