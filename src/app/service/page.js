import 'bootstrap/dist/css/bootstrap.min.css';

export default function Service() {
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
                <li className="nav-item"><a href="/service" className="nav-link active">Service</a></li>
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

      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
          <symbol id="check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </symbol>
          <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
          </symbol>
          <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
          </symbol>
          <symbol id="sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </symbol>
        </svg>
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
          <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (dark)">
            <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#moon-stars-fill" /></svg>
            <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#sun-fill" /></svg>
                Light
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark" aria-pressed="true">
                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#moon-stars-fill" /></svg>
                Dark
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
              </button>
            </li>
            <li>
              <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half" /></svg>
                Auto
                <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
              </button>
            </li>
          </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
          <symbol id="check" viewBox="0 0 16 16">
            <title>Check</title>
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </symbol>
        </svg>
        <div className="container py-3">
          <header>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
              <p className="fs-5 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Dosclub example. It’s built with default Dogclub components and utilities with little customization.</p>
            </div>
          </header>
          <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Free</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">Pro</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                  <div className="card-header py-3 text-bg-primary border-primary">
                    <h4 className="my-0 fw-normal">Enterprise</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$29<small className="text-body-secondary fw-light">/mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="display-6 text-center mb-4">Compare plans</h2>
            <div className="table-responsive">
              <table className="table text-center">
                <thead>
                  <tr>
                    <th style={{ width: '34%' }} />
                    <th style={{ width: '22%' }}>Free</th>
                    <th style={{ width: '22%' }}>Pro</th>
                    <th style={{ width: '22%' }}>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">Public</th>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Private</th>
                    <td />
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row" className="text-start">Permissions</th>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Sharing</th>
                    <td />
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Unlimited members</th>
                    <td />
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-start">Extra security</th>
                    <td />
                    <td />
                    <td><svg className="bi" width={24} height={24}><use xlinkHref="#check" /></svg></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
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
