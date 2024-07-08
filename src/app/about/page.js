import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center p-0">
            <header className="d-flex flex-wrap justify-content-center py-2 mb-1 border-bottom">
              <a href="/" className="d-flex align-items-center mb-md- me-md-auto link-body-emphasis text-decoration-none">
                <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" class="rounded me-1 p-1" width={40} height={40} alt="..." />
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
                  <button className="btn btn-outline-success me-2" type="button">Singin</button>
                  <button className="btn btn-outline-success me-2" type="button">Singout</button>
                </form>
              </nav>
            </header>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center p-0">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://www.lifematewellness.com/wp-content/uploads/2021/10/%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B2%E0%B8%93%E0%B9%80%E0%B8%95%E0%B8%B7%E0%B8%AD%E0%B8%99-copy-scaled.jpg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <br></br>

      <div className="row">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <img src="https://www.purina.co.th/sites/default/files/2022-03/1.png" className="card-img-top" alt="..." />
              <h5 className="card-title">Purina Alpo</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <img src="https://pawdy.co.th/wp-content/uploads/2024/02/NEW-Pawdy-Holistic-Canine-%E0%B8%9E%E0%B8%AD%E0%B8%94%E0%B8%B5%E0%B9%89-%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82-%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82%E0%B9%82%E0%B8%95%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1%E0%B8%A7%E0%B8%B1%E0%B8%A2-%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%94%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A5-1024x1024.webp" className="card-img-top" alt="..." />
              <h5 className="card-title">Holistic</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <img src="https://tailybuddy.com/products/500/mini_Indoor_Adult.jpg" className="card-img-top" alt="..." />
              <h5 className="card-title">Royal canin</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <br></br>

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
