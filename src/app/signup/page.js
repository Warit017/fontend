import 'bootstrap/dist/css/bootstrap.min.css';
export default function Signup() {
    return (
        <>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center p-0">
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
              <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start ">
                  <button className="btn btn-outline-success me-2" type="button" href="/Signup">Sign up</button>
                  <button className="btn btn-outline-success me-2" type="button">Sign in</button>
                </form>
              </nav>
            </header>
          </div>
        </div>
      </div>

        <br></br>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-1'>
                <select className='form-selct9' aria-label='Default select example'>
                  <option selected>คำนำหน้าชื่อ</option>
                  <option value={1}>นาย</option>
                  <option value={2}>นาง</option>
                  <option value={3}>นางสาว</option>
                </select>
                </div>

                <div className='col-md-4'>
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>

                <div className='col-md-5'>
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
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