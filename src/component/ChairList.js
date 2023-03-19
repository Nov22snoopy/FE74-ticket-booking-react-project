import React, { Component } from "react";
import { connect } from "react-redux";
import Chair from "./Chair";
class ChairList extends Component {
  displayChair = () => {
    return this.props.ChairList.map((item) => {
      return (
        <div key={item.hang} className="d-flex algin-items-center ml-5">
          <div className="mr-4">{item.hang}</div>
          {item.danhSachGhe.map((chair) => {
            return <Chair chair={chair} key={chair.soGhe} />;
          })}
        </div>
      );
    });
  };

  render() {

    return <div className="text-center">{this.displayChair()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    ChairList: state.movieBookingReducer.ChairList,
  };
};
export default connect(mapStateToProps, null)(ChairList);
