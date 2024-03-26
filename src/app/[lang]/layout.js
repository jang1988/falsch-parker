import local from 'next/font/local';
import Header from '@/components/header/header';
import { locales } from '@/app/i18n/settings';
import '../globals.scss';
import { Footer } from '@/components/footer/footer';

const cygre = local({
  src: [
    {
      path: '../../../public/fonts/Cygre-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Cygre-Book.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Falsch-parker',
  description: 'Generated by create next app',
};

export const generateStaticParams = () => {
  return locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body className={cygre.className}>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
