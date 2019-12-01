import React from 'react';
import {Switch, Route} from 'react-router';

import Phones from './containers/phones';
import Phone from './containers/phone';
import Basket from './containers/basket';

//Static pages
import FaqPage from './static-pages/faq-page';
import NewsLatterPage from './static-pages/newsletter-page';
import StorePage from './static-pages/store-page';
import AfterOrderPage from './static-pages/afterOdrer-page';

export default (
    <Switch>
        <Route path='/' component={Phones} exact/>
        <Route path='/cart' component={Basket}/>
        <Route path='/categories/:id' component={Phones}/>
        <Route path='/phones/:id' component={Phone}/>
        <Route path='/faq' component={FaqPage}/>
        <Route path='/newsletter' component={NewsLatterPage}/>
        <Route path='/store' component={StorePage}/>
        <Route path='/successful' component={AfterOrderPage}/>
    </Switch>
);