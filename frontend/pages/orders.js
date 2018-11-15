import PleaseSignIn from '../components/PleaseSignIn';
import OrderList from '../components/OrderList';

const OrdersPpage = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default OrdersPpage;
