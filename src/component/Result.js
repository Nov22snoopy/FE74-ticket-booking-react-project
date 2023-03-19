import React, { Component } from "react";
import { connect } from "react-redux";
import {ChairPurchaseAction, DeleteBooking} from "./duck/action"
export class Result extends Component {
  render() {
    const { ChairBookingList } = this.props;
    return (
      <div>
        <h2>Danh sach ghe da chon</h2>
        <div className="mt-3">
          <div className="d-flex">
            <button className="btn btn-secondary chair "></button>
            <p className="ml-1">Ghe con trong</p>
          </div>
          <div className="d-flex">
            <button className="btn btn-secondary chair booking "></button>
            <p className="ml-1">Ghe da chon</p>
          </div>
          <div className="d-flex">
            <button className="btn btn-secondary chair booked "></button>
            <p className="ml-1">Ghe da dat</p>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>So Ghe</th>
              <th>Gia</th>
              <th>Huy</th>
            </tr>
          </thead>
          <tbody>
            {ChairBookingList.map((chair) => {
              return (
                <tr key={chair.soGhe}>
                  <td>{chair.soGhe}</td>
                  <td>{chair.gia}</td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>{this.props.delete(chair.soGhe)}}>Huy</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tong tien</td>
              <td className="">
                {ChairBookingList.reduce((sum, chair) => {
                  return (sum += chair.gia);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
        <div>
          <button className="btn btn-info" onClick={this.props.purchase}>Thanh toan</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ChairBookingList: state.movieBookingReducer.ChairBookingList,
  };
};
const mapDispatchToProps=(dispatch)=>{
  return {
    purchase:()=>{
      dispatch(ChairPurchaseAction());
    },
    delete: (payload)=>{
      dispatch(DeleteBooking(payload))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Result);
