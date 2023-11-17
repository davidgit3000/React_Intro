import NavBar from "../components/NavBar";
import "./css/styles.css";

export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="heading">Welcome to my first React page!</h1>
      <p className="move para">
        If you are new to React, you should definitely check out this YouTube
        tutorial.
      </p>
      <iframe
        className="move"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SqcY0GlETPk?si=KkFVj7GZ8X0ERYUN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <footer>
        <p>Copyright © 2023 David Lam</p>
      </footer>
    </>
  );
}
