import React, {Fragment} from 'react';

import './faq-page.css';


const FaqPage = () => {

    return (
        <div className="main">
            <Content1/>
            {/*<Content2/>*/}
            <Content3/>
        </div>
    );
};


const Content1 = () => {
    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h4>One column layout</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia cor magni dolores
                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit,
                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi
                            ut aliquid ex ea commodi consequatur?
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

const Content2 = () => {
    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h4>Left column</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia cor magni dolores
                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                            dolor.
                        </p>
                    </div>
                    <div className="col">
                        <h4>Right column</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia cor magni dolores
                            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                            dolor.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

const Content3 = () => {
    return (
        <Fragment>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h4>Left column</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae.
                        </p>
                    </div>
                    <div className="col">
                        <h4>Center column</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae.
                        </p>
                    </div>
                    <div className="col">
                        <h4>Right column</h4>
                        <p>
                            Here is my page content. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                            vitae.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};


export default FaqPage;