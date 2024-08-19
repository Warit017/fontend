import 'bootstrap/dist/css/bootstrap.min.css';

export default function HContact() {
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
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/service" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link active">Contact</a></li>
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

      <div className="row">
        <div className="col-md-1 bg-white"></div>
        <div className="col-md-5 bg-white py-5 p-5">
          <h4><b>Let's Connect</b></h4>
          <p>I'm warit looking for new opportunities, <br></br>my inbox is always open. Whether you have a question <br></br>or just want to say hi, I'll try my best to get back to you!</p>
          <a href="github.com">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="navbar-nav-svg" viewBox="0 0 512 499.36" role="img"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg>
          </a>
        </div>
        <div className="col-md-6 bg-white p-5">
          <form className="row g-3">
            <div className="col-md-8">
              <label htmlFor="floatingInput" className="form-label"><b>Your email</b></label>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            </div>
            <div className="col-md-8">
              <label htmlFor="inputAddress" className="form-label"><b>Subject</b></label>
              <input type="text" className="form-control" id="inputAddress" placeholder="Just saying hi" />
            </div>
            <div className="col-md-8">
              <label htmlFor="inputCity" className="form-label"><b>Message</b></label>
              <textarea class="form-control" aria-label="With textarea" placeholder="Let's talk about...."></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-info"><b>Sent Message</b></button>
            </div>
          </form>
        </div>
      </div>

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
