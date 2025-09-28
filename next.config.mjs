import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV !== 'production';

const config = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

export default withPWA({
  dest: 'public',
  disable: isDev, // enable Service Worker only in production
  register: true,
  skipWaiting: true,
})(config);