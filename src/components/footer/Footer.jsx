const MyFooter = function(){
    return(
            <footer className="text-secondary py-3">
      <div className="container w-lg-50 text-center text-lg-start">
        
        <div className="icone mb-4">
          <a href="#" className="text-secondary text-decoration-none">
            <i className="fs-3 px-3 bi bi-facebook"></i>
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            <i className="fs-3 px-3 bi bi-instagram"></i>
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            <i className="fs-3 px-3 bi bi-twitter"></i>
          </a>
          <a href="#" className="text-secondary text-decoration-none">
            <i className="fs-3 px-3 bi bi-youtube"></i>
          </a>
        </div>
        
        <div className="link-footer row row-cols-1 row-cols-md-3 row-cols-lg-4">
          <a className="text-secondary text-decoration-none my-md-2" href="#">Audio and settings</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Audio description</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Help center</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Gift Cards</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Media Center</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Investor relations</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Jobs</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Therms of use</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Privacy</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Legal notices</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Cookie Preferences</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Corporate informaton</a>
          <a className="text-secondary text-decoration-none my-md-2" href="#">Contact us</a>
        </div>

        <div>
          <button type="button" className="btn btn-outline-secondary rounded-0 my-3 my-md-0 my-lg-3">Service Code</button>
        </div>
        <div>
          <blockquote className="mt-md-3 mt-lg-0">1997 - 2019 Netflix , inc (i-nmxsrmvnvm)</blockquote>
        </div>
      </div>
    </footer>
    )
}

export  default MyFooter