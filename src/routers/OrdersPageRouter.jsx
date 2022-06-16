import React, {useState} from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import OrdersPage from '../pages/OrdersPage/OrdersPage';
import OrdersNavBar from '../pages/OrdersPage/OrdersNavBar';
import '../pages/OrdersPage/OrdersPage.css'
export default function OrdersPageRouter() {
    const { url } = useRouteMatch();
    const [toggleOrdersNavbar, setToggleOrdersNavBar] = useState();
    const [section, setSection] = useState("all");
    return (
        <div className='root_orders_navbar'>
            
            
            <OrdersNavBar setSection={setSection} toggleOrdersNavbar={toggleOrdersNavbar} setToggleOrdersNavBar={setToggleOrdersNavBar} url={url}/>
            <Switch>
                <Route exact path={`${url}/`} >
                    <OrdersPage section={section} toggleOrdersNavbar={toggleOrdersNavbar} setToggleOrdersNavBar={setToggleOrdersNavBar} />
                </Route>
                <Route exact path={`${url}/:section`} >
                    <OrdersPage toggleOrdersNavbar={toggleOrdersNavbar} setToggleOrdersNavBar={setToggleOrdersNavBar} />
                </Route>
                {/* <Route path='*'>
                    <Redirect to='/404' />
                </Route> */}
            </Switch>
        
        </div>
    )

}
