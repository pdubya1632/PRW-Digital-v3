import { SITE_EMAIL_ADDRESS } from '../config/constants';

export default function () {
  return (
    <main className="min-h-screen p-7">
      <h2 className="text-4xl my-7">
        Let's work together! I'd love to hear about your project and
        see how I can help.
      </h2>
      <h3 className="text-2xl">
        You can reach me at:{' '}
        <a href={`mailto:${SITE_EMAIL_ADDRESS}`}>
          {SITE_EMAIL_ADDRESS}
        </a>
      </h3>
    </main>
  );
}
