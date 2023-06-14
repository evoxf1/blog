import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsFeed from "./components/NewsFeed";
import Events from "./components/Events";
import Jobs from "./components/Jobs";
import TechnologySegment from "./components/TechnologySegment";
import BusinessSegment from "./components/BusinessSegment";
import LifestyleSegment from "./components/LifestyleSegment";

function App() {
  return (
    <Router>
      <main className="text-center font-serif bg-gray-100">
        <header className="justify-between bg-gray-600">
          <div className="container mx-auto py-8">
            <Link className="text-4xl font-bold text-gray-100" to="/">
              MyBlog
            </Link>
            <nav className="flex flex-wrap justify-center mt-10">
              <Link
                className="button-link button-primary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-red-500 hover:bg-red-600"
                to="/news"
              >
                News Feed
              </Link>
              <Link
                className="button-link button-secondary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-blue-500 hover:bg-blue-600"
                to="/events"
              >
                Upcoming Events
              </Link>
              <Link
                className="button-link button-tertiary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-green-500 hover:bg-green-600"
                to="/jobs"
              >
                Jobs
              </Link>
              <Link
                className="button-link button-primary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-purple-500 hover:bg-purple-600"
                to="/technology"
              >
                Technology
              </Link>
              <Link
                className="button-link button-primary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-orange-500 hover:bg-orange-600"
                to="/lifestyle"
              >
                Lifestyle
              </Link>
              <Link
                className="button-link button-primary mx-2 my-2 px-4 py-3 rounded-lg font-semibold text-gray-100 bg-yellow-500 hover:bg-yellow-600"
                to="/business"
              >
                Business
              </Link>
            </nav>
          </div>
        </header>
        <section className="container mx-auto my-8">
          <Switch>
          <Route exact path="/">
              <h2 className="text-3xl font-bold mb-4">Blog</h2>
              <p>
                Frontend development is like the art of mixing colors on a
                digital canvas, bringing life to your web pages. It's the magic
                that turns your HTML skeleton into a visually stunning and
                interactive experience. 🎨✨
              </p>
              <p>
                HTML is like the bread and butter of frontend development. It's
                the structure that holds everything together, like a solid
                foundation for your web creations. 🍞
              </p>
              <p>
                CSS is where the real fun begins. It's like a fashion designer's
                closet, full of styles, colors, and patterns. With CSS, you can
                make your web pages look fancy, stylish, or even funky! 💃🕺
              </p>
              <p>
                JavaScript is the secret sauce that adds interactivity to your
                websites. It's the language that brings your web pages to life,
                allowing them to dance, sing, and respond to user actions. 🎉🕺
              </p>
              <p>
                Frontend frameworks like React, Vue.js, or Angular are like the
                superheroes of web development. They save you time and effort by
                providing pre-built components and superpowers to create amazing
                web applications. 🦸‍♂️🦸‍♀️
              </p>
              <p>
                But frontend development is not just about coding; it's about
                understanding the user's needs and creating delightful
                experiences. It's about making sure your website is intuitive,
                responsive, and accessible to everyone. 🌍💻
              </p>
              <p>
                In the world of frontend development, you'll encounter terms
                like responsive design, which ensures your website looks great
                on different devices, from mobile phones to large desktop
                screens. You'll dive into the world of user experience (UX) and
                user interface (UI) design, aiming to create interfaces that are
                not only visually appealing but also easy to use. 📱💻🖥️
              </p>
              <p>
                As a frontend developer, you'll become best friends with
                developer tools and browsers' debugging features. You'll spend
                hours tweaking styles, fixing layout issues, and optimizing
                performance. But don't worry, the satisfaction of seeing your
                creations come to life is worth every second! ⏱️🔧💪
              </p>
              <p>
                Frontend development is a journey of continuous learning and
                growth. New frameworks, libraries, and techniques emerge, and
                it's important to stay up to date with the latest trends. But
                don't let the ever-evolving nature intimidate you; embrace it as
                an opportunity to explore, experiment, and push the boundaries
                of what you can create. 🚀🌟
              </p>
              <p>
                So, whether you're a seasoned frontend developer or just
                starting your journey, remember to keep the user at the center
                of everything you do. Create web experiences that are not only
                visually appealing but also functional, accessible, and
                enjoyable. And don't forget to have fun along the way! 😉✨
              </p>
             

            </Route>
            <Route exact path="/technology" component={TechnologySegment} />
            <Route exact path="/lifestyle" component={LifestyleSegment} />
            <Route exact path="/business" component={BusinessSegment} />
            <Route exact path="/news" component={NewsFeed} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/jobs" component={Jobs} />
          </Switch>
        </section>
      </main>
    </Router>
  );
}

export default App;
