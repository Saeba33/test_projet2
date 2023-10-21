import '../styles/header.scss';

const Header = () => {
    return (
        <>
        <header>
        <nav>
          <div id="logo" alt="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="2" d="M0,224L40,234.7C80,245,160,267,240,256C320,245,400,203,480,170.7C560,139,640,117,720,117.3C800,117,880,139,960,154.7C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          </div>
        </nav>
      </header>
      </>
    );
};

export default Header;