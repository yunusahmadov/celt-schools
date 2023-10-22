import React from 'react'

function ErrorContent() {
  return (
    <div className="error-page-area sec-spacer">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 error-page-message">
                <div className="error-page">
                    <h1>404</h1>
                    <p>Page was not Found</p>
                    <div className="/">
                        <a href="/">Go to Home Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ErrorContent