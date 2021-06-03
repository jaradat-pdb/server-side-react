import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import '../public/style.css';

/*
    @zeit/next-css module has been largely deprecated as CSS is
    now supported by Next.js out of the box, see:
    https://github.com/vercel/next-plugins/tree/master/packages/next-css
    https://nextjs.org/docs/basic-features/built-in-css-support
*/
/* 
export default function App({ Component, pageProps }) {
    return <Component {...pageProps}/>
}
 */
export default withRedux({ createStore: initStore })(
    class _App extends App {
        static async getInitialProps({ Component, ctx }) {
            return {
                pageProps: 
                    (Component.getInitialProps) ? await Component.getInitialProps(ctx) : {}
            };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return(
                <Provider store={store}>
                    <Component {...pageProps}/>
                </Provider>
            );
        }
    }
);