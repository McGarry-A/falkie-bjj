import "./App.css";
import Heading from "./components/Heading/Heading";
import Navbar from "./components/Navbar/Navbar";
import SocialsBanner from "./components/SocialsBanner/SocialsBanner";

function App() {
  return (
    <div className="App">
      <SocialsBanner />
      <Navbar />
      <section
        style={{
          width: "100%",
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <Heading title="Falkie BJJ, the new jiu-jitsu breed" />
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            lineHeight: "26px",
            fontFamily: "sans-serif",
            marginTop: ".5rem",
            width: "80%",
            margin: "auto",
          }}
        >
          Our academy consistently provides support to students who wish to
          excel. Our vision of Brazilian Jiu-Jitsu is to create winning
          attitudes. At Atos Jiu-Jitsu we aim to create champions on and off the
          mat. No matter the age or the skill level of the student, our
          jiu-jitsu instructors are patient, well-trained, and experienced ready
          to help you reach your goals.
        </p>
        <div style={{ width: "100%" }}>
          <button
            style={{
              textTransform: "uppercase",
              color: "white",
              background: "#880808",
              padding: "1rem 1.75rem",
              border: "none",
              outline: "none",
              fontFamily: "Oswald",
              margin: ".5rem auto",
              fontSize: "24px",
              fontWeight: 500,
            }}
          >
            Learn More About Falkie
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
