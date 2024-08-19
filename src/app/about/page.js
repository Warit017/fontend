import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-white">
          <div className="col-md-12 text-center">
            <header className="d-flex flex-wrap justify-content-center py-2 mb-1 border-bottom">
              <a href="/" className="d-flex align-items-center mb-md- me-md-auto link-body-emphasis text-decoration-none">
                <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" className="rounded me-1 p-1" width={40} height={40} alt="..." />
                <span className="fs-4">DOGCLUB</span>
              </a>
              <ul className="nav nav-pills align-items-center">
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="/about" className="nav-link active">About</a></li>
                <li className="nav-item"><a href="/service" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              </ul>
              <nav className="navbar">
                <form className="container-fluid justify-content-start ">
                  <li className="nav-item btn btn-outline-success me-2" ><a href="/signup" className="nav-link active">Sign up</a></li>
                  <li className="nav-item btn btn-outline-success me-2" ><a href="/signin" className="nav-link active">Sign in</a></li>
                </form>
              </nav>
            </header>
          </div>
        </div>
      </div>

      <main>
  <div class="container py-4">

    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Another Dog</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Click to next</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>Various dog foods</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button class="btn btn-outline-light" type="button">Click to next</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Treatment of various dogs</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button class="btn btn-outline-secondary" type="button">Click to next</button>
        </div>
      </div>
    </div>

    <footer class="pt-3 mt-4 text-body-secondary border-top">
      © 2024
    </footer>
  </div>
</main>

      <div className="row">
        <div className="col-md-12 text-center bg-white p-5">
          <div className="container">
            <footer className="d-flex flex-wrap justify-content-between border-top">
              <p className="col-md-4 mb-0 text-body-secondary">© 2024 Company, Dogclub</p>
              <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
              </a>
              <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Service</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">contact</a></li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
