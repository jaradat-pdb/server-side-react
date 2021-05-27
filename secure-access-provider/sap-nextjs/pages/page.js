import { useRouter } from 'next/router';
import Link from 'next/link';

const Page = () => (
    <div>
        <h1>
            Welcome to {useRouter().query.title}
        </h1>
        <div className={useRouter().query.img}></div>
        <Link href='/'>
            <a>Home</a>
        </Link>
    </div>
);

export default Page;