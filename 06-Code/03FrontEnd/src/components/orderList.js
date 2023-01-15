import React, { useEffect, useState } from "react";
import { ApiUrl} from "../services/apiServices";
import {Link} from 'react-router-dom'

const OrderList = () => {
  const [order, setClient] = useState();
  const url = ApiUrl + "listOrders";
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setClient(responseJSON);
   
  };
  useEffect(() => {
    fetchApi();
  }, );



  return (
    <div>
      <div class="card-body">
        <br />
        <br />
        <h3 className="text-center">Orders</h3> 

        <div className="col-auto text-center">
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">id_order</th>
            <th scope="col">id_user</th>
            <th scope="col">date</th>      
          </tr>
        </thead>
        <tbody>
          {!order
            ? "Loading"
            : order.map((order, index) => {
                return (
                  <tr className="table-info">
                    <td className="text-center">{order.id_order}</td>
                    <td className="text-center">{order.id_user}</td>
                    <td className="text-center">{order.date}</td>
                    </tr>
                );
              })}
        </tbody>
      </table>
      <br /><br /><br /><br /><br />
      <div id="control">
        
      </div>
    </div>
  );
};

export default OrderList;
