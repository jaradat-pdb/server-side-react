
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: { allPostsData }
    };
}

export default function Home({ allPostsData }) {
    const [session, loading] = useSession();
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                {
                    !session && (
                        <>
                            Not signed in <br />
                            <button onClick={signIn}>Sign In</button>
                        </>
                    )
                }
                {
                    session && (
                        <>
                            <section className={utilStyles.headingMd}>
                                <p>
                                    Signed in as {session.user.email} <br />
                                    Java and JavaScript Software Engineer looking to be free!
                                </p>
                                <p>
                                    (This is a sample website - you'll be building a site like this on {' '}
                                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                                </p>
                                <button onClick={signOut}>Sign Out</button>
                            </section>
                            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                                <h2 className={utilStyles.headingLg}>Blog</h2>
                                <ul className={utilStyles.list}>
                                    {
                                        allPostsData.map(
                                            ({ id, date, title }) => (
                                                <li className={utilStyles.listItem} key={id}>
                                                    <Link href={`/posts/${id}`}>
                                                        <a>{title}</a>
                                                    </Link>
                                                    <br />
                                                    <small className={utilStyles.lightText}>
                                                        <Date dateString={date} />
                                                    </small>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </section>
                        </>
                    )
                }
            </main>
        </Layout>
    );
}