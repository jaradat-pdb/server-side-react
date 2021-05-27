import '../public/style.css';

/*
    @zeit/next-css module has been largely deprecated as CSS is
    now supported by Next.js out of the box, see:
    https://github.com/vercel/next-plugins/tree/master/packages/next-css
    https://nextjs.org/docs/basic-features/built-in-css-support
*/
export default function App({ Component, pageProps }) {
    return <Component {...pageProps}/>
}