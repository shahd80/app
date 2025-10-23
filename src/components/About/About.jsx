import React from "react";

export default function About() {
  return (
    <>
      <div className="bg d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <div>
            <h2 className="pt-5 text-uppercase text-white mb-4">
              about component
            </h2>
            <div className="d-flex justify-content-center align-items-center line mb-3">
              <div className="line-before"></div>
              <i className="fa-solid fa-star text-white px-2"></i>
              <div className="line-after"></div>
            </div>

            <div className="row justify-content-center">
              <div className="col-10 col-md-6 text-white pt-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download
                  <br />
                  includes the complete source files including HTML, CSS, and
                  JavaScript as <br />
                  well as optional SASS stylesheets for easy customization.
                </p>
              </div>

              <div className="col-10 col-md-6 text-white pt-3">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download <br />
                  includes the complete source files including HTML, CSS, and
                  JavaScript as <br />
                  well as optional SASS stylesheets for easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
