import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookHub</h2>
            <p className="fs-17">
              Welcome to BookHub, your ultimate destination for all things
              books! BookHub is more than just a website; it's your personal
              gateway to a world of literature, where you can discover, explore,
              and indulge in the written word like never before. At BookHub, we
              believe that everyone deserves access to their next great read,
              which is why we've curated a vast collection of books spanning
              every genre, from timeless classics to the latest bestsellers.
              Whether you're a seasoned bookworm or just beginning your literary
              journey, you'll find something to captivate your imagination on
              our platform. Our intuitive interface makes it easy to search for
              books by title, author, genre, or keyword, ensuring that you can
              quickly find exactly what you're looking for. But we don't stop
              there - BookHub is also a hub for discovery, with personalized
              recommendations tailored to your unique tastes and preferences.
              Simply tell us what you love to read, and we'll help you uncover
              hidden gems and new favorites. But BookHub is more than just a
              place to find and buy books. It's a vibrant community where book
              lovers come together to share their passion for reading. Connect
              with fellow bibliophiles, join discussions about your favorite
              books, and discover new literary treasures recommended by members
              of our community.
            </p>
            <p className="fs-17">
              And for those who prefer to listen rather than read, BookHub
              offers a wide selection of audiobooks, allowing you to enjoy your
              favorite stories anytime, anywhere. With features like book
              reviews, author interviews, and exclusive content, BookHub is your
              one-stop destination for all things literary. Whether you're
              looking for your next great read or simply want to immerse
              yourself in the world of books, we invite you to join us on
              BookHub and embark on a journey of literary discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
