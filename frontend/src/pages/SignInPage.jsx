import "@fortawesome/fontawesome-free/css/all.min.css"; // Make sure FontAwesome is imported

const SignInPage = () => {
  return (
    <main>
      <div className="container bg-white text-dark custom-round shadow-lg">
        <div className="row my-4 p-3 h-100 shadow-lg">
          <div className="col-md-6 border text-center d-flex align-items-center justify-content-center bg-primary   custom-round-left">
            <h1 className="text-white font-weight-bold">AcademiX</h1>
          </div>
          <div className="col-md-6 flex-column align-items-center justify-content-center p-3 border custom-round-right   ">
            <form className="text-center p-5">
              <h2 className="font-weight-bold custom-text-color">Sign In</h2>
              <div className="mb-3 my-5 px-5 input-with-icon">
                <i className="fas fa-envelope icon"></i>
                <input
                  placeholder="example@email.com"
                  type="email"
                  className="form-control bg-g"
                />
              </div>
              <div className="mb-3 px-5 input-with-icon">
                <i className="fas fa-lock icon"></i>
                <input
                  placeholder="password"
                  type="password"
                  className="form-control bg-g"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-sm custom-btn px-4 "
              >
                Sign In
              </button>

              <div className="container my-4">
                <div className="row my-3 align-items-center">
                  <div className="col">
                    <hr />
                  </div>
                  <div className="col-auto text-center vertical-line">or</div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <a href="#" className="btn btn-outline-primary mx-2">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary mx-2">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary mx-2">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignInPage;
