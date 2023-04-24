import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Currently would describe this as "work in progress", available
              from mid July 2023! Soon to be experienced in HTML, CSS,
              JavaScript, React, Node.js, Next.js, GraphQL, PostgreSQL, GitHub
              and many more...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
