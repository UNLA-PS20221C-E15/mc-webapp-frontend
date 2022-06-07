import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import OffersPage from '../pages/OfferPage/OffersPage';
import OrdersNavBar from '../pages/OrdersPage/OrdersNavBar';
import './OrdersPageRouter.css'
export default function OrdersPageRouter() {
    const { url } = useRouteMatch();
    console.log(url);
    
    return (
        <div className='root_orders_navbar'>
            
            <OrdersNavBar url={url}/>
            <Switch>
                <Route exact path={`${url}/promociones`} component={OffersPage}/>
                <Route exact path={`${url}/:section`} component={OffersPage}/>
                {/* <Route path='*'>
                    <Redirect to='/404' />
                </Route> */}
            </Switch>
        
        </div>
    )

}
