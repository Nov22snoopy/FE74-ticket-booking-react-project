import React, { Component } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import "./booking.css";
import { ChairBookingAction } from "./duck/action";

class Chair extends Component {
  render() {
    const { chair, ChairBookingList, bookingChair } = this.props;
    return (
      <div className="">
        <button
          className={clsx("btn btn-secondary chair m-2", {
            booked: chair.daDat, // NaN, null, undefined, 0, '', false, document.all
            //find tra ve chair neu co da dat, ko tim thay thi tra ve undefine
            booking: ChairBookingList.find(
              (item) => item.soGhe === chair.soGhe
            ),
          })}
          disabled={chair.daDat}
          onClick={()=>{bookingChair(chair)}}
        >
          {chair.soGhe}

        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ChairBookingList: state.movieBookingReducer.ChairBookingList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bookingChair: (payload) => {
      dispatch(ChairBookingAction(payload));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chair);
