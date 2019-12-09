import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
  <div>
    <Head>
      <link
        rel='stylesheet'
        href='https://bootswatch.com/4/flatly/bootstrap.min.css'
      />
      <script
        src='https://code.jquery.com/jquery-3.4.1.min.js'
        integrity='sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo='
        crossOrigin='anonymous'
      ></script>
      <script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
        integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
        crossOrigin='anonymous'
      ></script>
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
  </div>
);

export default Layout;
