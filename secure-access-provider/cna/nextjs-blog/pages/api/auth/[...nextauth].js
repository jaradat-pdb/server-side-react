import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.NEXTAUTH_URL,
    providers: [
        Providers.Atlassian(
            {
                clientId: process.env.ATLASSIAN_ID,
                clientSecret: process.env.ATLASSIAN_SECRET
            }
        ),
        Providers.Auth0(
            {
                clientId: process.env.AUTH0_ID,
                clientSecret: process.env.AUTH0_SECRET,
                domain: process.env.AUTH0_DOMAIN
            }
        ),
        Providers.Email(
            {
                server: {
                    port: 465,
                    host: 'smtp.gmail.com',
                    secure: true,
                    auth: {
                        user: process.env.EMAIL_USERNAME,
                        pass: process.env.EMAIL_PASSWORD
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                },
                from: process.env.EMAIL_FROM
            }
        ),
        Providers.GitHub(
            {
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            }
        ),
        Providers.Google(
            {
                clientId: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET
            }
        ),
        Providers.Twitter(
            {
                clientId: process.env.TWITTER_ID,
                clientSecret: process.env.TWITTER_SECRET
            }
        )
    ],
    database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options);