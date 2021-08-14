import quigley from "./static/images/quigley.jpg";
import quigleyExpoCropped from "./static/images/quigleyExpoCropped.jpg";
import quigleyResume from "./static/pages/Ben-Quigley-resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home = () => (
  <div className="card display">
    <div>
      <h1>Ben Quigley</h1>
      <p>
        Solutions engineer developing and managing user-friendly, effective,
        enterprise software systems.
      </p>
    </div>
    <img
      src={quigleyExpoCropped}
      alt="Ben at a HR technology expo with the Sage People team"
    />
  </div>
);

const About = () => (
  <div id="about" className="card display">
    <h1>About Ben</h1>
    <h4>
      full stack software development | teaching &amp; learning | systems
      solutions
    </h4>
    <p>
      I apply my years of experience inventing, building, and rebuilding
      processes and services at client companies, and a strong portfolio of
      digital and human-organizational skills to revolutionize how work happens
      on my team.
    </p>
    <table className="table">
      <tr>
        <th>Skills</th>
        <td>
          <ul>
            <li>business intelligence</li>

            <li>ETL</li>

            <li>data management</li>

            <li>integration development</li>

            <li>JavaScript, Linux</li>

            <li>user experience</li>

            <li>Python</li>

            <li>SaaS</li>

            <li>SQL</li>

            <li>technical sales</li>
          </ul>
        </td>
      </tr>
      <tr>
        <th>Current status</th>
        <td>Open to new projects</td>
      </tr>
    </table>
  </div>
);

const Contact = () => (
  <div id="contact" className="card display">
    <h1>Contact</h1>
    <div className="name-badge">
      <div className="details">
        <p className="emph">Ben Quigley</p>
        <p>Solutions engineer</p>
        <ul>
          <li>Home: Brooklyn, NY</li>
          <li>
            Email:{" "}
            <a href="mailto:benjamin.s.quigley@gmail.com">
              benjamin.s.quigley@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <img src={quigley} className="small" alt="Ben" />
    </div>
  </div>
);

const Resume = () => (
  <div id="resume" className="card display">
    <h1>Resume</h1>
    <Document file={quigleyResume}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

const AboutSite = () => (
  <div className="card mini">
    <p>
      This site was built using <a href="https://reactjs.org/">React</a>.
      Its source code is hosted{" "}
      <a href="https://github.com/BenQuigley/signmaker.dev">here</a>.
    </p>
  </div>
);

const Gifting = () => (
  // Unlisted page for reference for family & friends.
  <div className="card mini">
  <h1>Gifting</h1>
  <p>Against my wishes I have obtained a reputation for being difficult to shop for!</p>
  <p>This page is intended to help people who would like to buy a gift for me, but aren't sure
  what I would like. In general, tabletop RPGs, beautiful or informative art or art books, guitar
  pedals, and wool socks are always a safe bet.</p>
  <p>Please note, especially with the games listed here, one reason why I may not own the game already is that they come in and out of print,
  and their price fluctuates up and down. Please don't pay scalper prices on some old book just for me!</p>
  <h2>$0-20 range</h2>
  <ul>
  <li>Bottle of dry red wine</li>
  <li>Wool socks</li>
  <li><a href="https://bookshop.org/books/a-natural-history-of-dragons-a-memoir-by-lady-trent/9780765375070">
  A Natural History of Dragons: A Memoir by Lady Trent</a>, by Marie Brennan</li>
  <li><a href="https://bookshop.org/books/the-overstory/9780393356687">The Overstory</a>, by Richard Powers</li>
  <li><a href="https://bookshop.org/books/black-leopard-red-wolf/9780735220188">Black Leopard, Red Wolf</a>, by Marlon James</li>
  <li><a href="https://bookshop.org/books/this-is-how-you-lose-the-time-war/9781534430990">This Is How You Lose the Time War</a>, by Amal El-Mohtar and Max Gladstone</li>
  <li><a href="https://bookshop.org/books/the-essex-serpent/9780062666383">The Essex Serpent</a>, by Sarah Perry</li>
  <li><a href="https://bookshop.org/books/deaf-republic-poems/9781555978310">Deaf Republic</a>, by Ilya Kaminsky</li>
  <li>Anything by <a href="https://bookshop.org/books?keywords=kaveh+akhbar">Kaveh Akhbar</a>, except for <i>Calling a Wolf a Wolf</i> which I own</li>
  </ul>
  <h2>$20-80 range</h2>
  <ul>
  <li><a href="https://www.abebooks.com/9781613170564/Atomic-Robo-Roleplaying-Game-Clevinger-1613170564/plp">
    Atomic Robo</a> RPG rules</li>
  <li><a href="https://www.evilhat.com/store/index.php?main_page=advanced_search_result&keyword=thirsty+sword+lesbians">
    Thirsty Sword Lesbians</a> RPG rules</li>
  <li><a href="http://kotohi.com/ryuutama/">Ryuutama</a> RPG rules</li>
  <li><a href="https://www.drivethrurpg.com/product/94815/Vampire-The-Masquerade-20th-Anniversary-Edition">
  Vampire the Masquerade</a> RPG rules</li>
  <li><a href="https://boardgamegeek.com/boardgame/256960/pax-pamir-second-edition">
  Pax Pamir</a> game</li>
  <li><a href="https://bookshop.org/books/salt-fat-acid-heat-mastering-the-elements-of-good-cooking-9781508284000/9781476753836">
  Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking</a>, by Samin Nosrat</li>
  </ul>
  <h2>$80+ range</h2>
  <ul>
  <li>Any <a href="https://reverb.com/c/effects-and-pedals/reverb">reverb</a> effect pedal, except a Neunaber Immerse mkII which I own</li>
  <li>Any <a href="https://reverb.com/c/effects-and-pedals/delay">delay</a> effect pedal, except a Keeley Caverns</li>
  </ul>
  <h2>Sizing notes</h2>
  <ul>
  <li>Shoe size: 11 M</li>
  <li>Pant size: 30x34</li>
  <li>Shirt size: small or medium; slim for dress shirts</li>
  <li>Wrist circumference: 6.5"</li>
  </ul>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ben Quigley Home</title>
          <link rel="canonical" href="http://signmaker.dev" />
        </Helmet>
        <div className="body">
          <div className="card mini">
            <p>
              <Link to="/">home</Link> | <Link to="/about">about</Link> |{" "}
              <Link to="/contact">contact</Link> |{" "}
              <a href="https://benideas.home.blog">blog</a> |{" "}
              <a href="https://github.com/BenQuigley">GitHub</a> |{" "}
              <Link to="/resume">resume</Link>
            </p>
          </div>

          {/* Route components are rendered if the path prop matches the current URL */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/gifting">
            <Gifting />
          </Route>
          <Route path="/">
            <AboutSite />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}
