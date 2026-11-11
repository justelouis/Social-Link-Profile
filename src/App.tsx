import './App.css';
import profilPicture from './assets/images/avatar-jessica.jpeg';
import { LinkButton } from './components/LinkButton';

function App() {
  return (
    <main>
      <section className="profileInfos">
        <img src={profilPicture} alt="Profile picture" />
        <div>
          <h1>Jessica Randall</h1>
          <span>London, United Kingdom</span>
        </div>

        <p>"Front-end developer and avid reader."</p>
      </section>

      <section className="links">
        <LinkButton link="https://github.com/justelouis">Github</LinkButton>
        <LinkButton link="https://www.frontendmentor.io/profile/justelouis">Frontend Mentor</LinkButton>
        <LinkButton link="https://www.linkedin.com/in/louis-cadix2/">Linkedin</LinkButton>
        <LinkButton link="https://x.com/">Twitter</LinkButton>
        <LinkButton link="https://www.instagram.com/">Instagram</LinkButton>
      </section>
    </main>
  );
}

export default App;
