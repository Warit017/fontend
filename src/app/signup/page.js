import 'bootstrap/dist/css/bootstrap.min.css';
export default function Signup() {
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
                <li className="nav-item"><a href="/about" className="nav-link ">About</a></li>
                <li className="nav-item"><a href="/service" className="nav-link">Service</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
              </ul>
              <nav className="navbar">
                <form className="container-fluid justify-content-start ">
                  <li className="nav-item btn btn-outline-success me-2 active" ><a href="/signup" className="nav-link active">Sign up</a></li>
                  <li className="nav-item btn btn-outline-success me-2" ><a href="/signin" className="nav-link active">Sign in</a></li>
                </form>
              </nav>
            </header>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 bg-white p-5">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="floatingInput" className="form-label"><b>Email</b></label>
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label"><b>Password</b></label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label"><b>Address</b></label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label"><b>Address 2</b></label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label"><b>City</b></label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label"><b>State</b></label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>Sing</option>
                <option>Married</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  <b>Check me out</b>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-info"><b>Sign up</b></button>
            </div>
          </form>
        </div>
        <div className="col-md-6 bg-white text-center">
          <br></br>
        <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" me-1 p-1 width={500} height={500} alt="..." />
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
  )
}