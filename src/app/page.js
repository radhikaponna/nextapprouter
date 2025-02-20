import Image from "next/image";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      ></link>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container text-center">
        <h3>Basic Navbar Example</h3>
        <p>
          A navigation bar is a navigation header that is placed at the top of
          the all pages of application.
        </p>
        <h1>It is Root page and Global Layout </h1>
      </div>
    </>
  );
}
