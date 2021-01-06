import quigley from './static/images/quigley.jpg';
import quigleyExpoCropped from './static/images/quigleyExpoCropped.jpg';
import './css/style.css';
import './css/normalize.css';


function App() {
  return (
    <div className="App">
      <div class="body">
          <div class='card mini'>
            <p><a href="index.html">home</a> | <a href="index.html#about">about</a> | <a href="index.html#contact">contact</a> | <a href="https://benideas.home.blog">blog</a> | <a href="https://github.com/BenQuigley">GitHub</a> | <a href="static/pages/QuigleyResume.html">resume</a></p>
          </div>
          <div class='notifications'>

          </div>
          <div class="container">



    <div class='card display'>
      <div>
        <h1>Ben Quigley</h1>
        <p>
        Solutions engineer developing and managing user-friendly, effective, enterprise software systems.
        </p>
      </div>
      <img src={quigleyExpoCropped} alt='Ben at a HR technology expo with the Sage People team'/>
    </div>

    <div id='about' class='card display'>
      <h2>About Ben</h2>
      <h4>

          full stack software development  |

          teaching &amp; learning  |

          systems solutions

      </h4>
      <p>
        I apply my years of experience inventing, building, and rebuilding processes and services at client companies, and a strong portfolio of digital and human-organizational skills to revolutionize how work happens on my team.
      </p>
      <table class='table'>
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
          <th>Current status</th><td>Open to new projects</td>
        </tr>
      </table>
    </div>

    <div id='contact' class='card display'>
      <h2>Contact</h2>
      <div class="name-badge">
        <div class="details">
          <p class="emph">Ben Quigley</p>
          <p>Solutions engineer</p>
          <ul>
            <li>Home: Brooklyn, NY</li>
            <li>Email: <a href="mailto:benjamin.s.quigley@gmail.com">benjamin.s.quigley@gmail.com</a></li>
          </ul>
        </div>
        <img src={quigley} class='small' alt='Ben'/>
      </div>
    </div>


          </div>
          <div class='card mini'>
            <p>
              This site was built using <a href='https://reactjs.org/'>React</a> and <a href="https://html5boilerplate.com/">HTML5 Boilerplate</a>.
            </p>
            <p>Its source code is hosted <a href="https://github.com/BenQuigley/benquigley.github.io">here</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
