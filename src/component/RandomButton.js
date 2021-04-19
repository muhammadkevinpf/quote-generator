import React from "react";
import { connect } from "react-redux";
import { getQuote } from "../redux/action";
import { MdAutorenew } from "react-icons/md";
import { useParams, useHistory } from "react-router-dom";

function RandomButton(props) {
  const { getQuote } = props;
  const { author } = useParams();
  const history = useHistory();
  const onClick = () => {
    getQuote(author);
    if (author) {
      history.push("/");
    }
  };

  return (
    <div
      className="flex justify-end items-center raleway-regular"
      onClick={() => onClick()}
    >
      <button type="button" className="focus:outline-none mr-1">
        random
      </button>
      <MdAutorenew />
    </div>
  );
}

const mapStateToProps = (state) => ({
  quote: state.quote,
});

const mapActionToProps = { getQuote };

export default connect(mapStateToProps, mapActionToProps)(RandomButton);
