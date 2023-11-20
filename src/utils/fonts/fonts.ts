import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
    weight: ['400', '600', '700'],
    subsets: ['latin']
});
const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin']
});

export {inter, roboto};