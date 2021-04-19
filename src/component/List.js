import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getQuote } from "../redux/action";
import { useParams } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

export const List = (props) => {
  const { getQuote, quote, loading } = props;
  const [currentAuthor, setCurrentAuthor] = useState("");
  const { author } = useParams();
  console.log(author);

  useEffect(() => {
    async function getQuotes() {
      if (!author) {
        await getQuote();
      } else {
        await getQuote(author);
        setCurrentAuthor(quote[0].quoteAuthor);
      }
    }
    return getQuotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getQuote, author]);

  const mapList = () =>
    quote ? quote.map((quotes) => listMarkUp(quotes)) : [];

  const listMarkUp = (data) => (
    <React.Fragment key={data._id}>
      <div className="border-left raleway-regular text-2xl pl-12 mt-10">
        <h3>“{data.quoteText}”</h3>
      </div>
      {!author ? (
        <Link to={`/quote/${data.quoteAuthor}`}>
          <div className="flex justify-between items-center mt-8 pl-12 p-6 author-container">
            <div>
              <h3 className="raleway-bold author-text">{data.quoteAuthor}</h3>
              <small className="raleway-regular genre-text">
                {data.quoteGenre}
              </small>
            </div>
            <MdArrowForward className="text-2xl text-white" />
          </div>
        </Link>
      ) : (
        ""
      )}
    </React.Fragment>
  );

  const skeletonMarkUp = (
    <React.Fragment>
      <Skeleton height={200} width={600} />
      <Skeleton className="mt-8" height={50} width={600} />
    </React.Fragment>
  );

  return (
    <div className="flex flex-col max-w-2xl">
      {author ? <h3 className="raleway-bold text-2xl text-gray-500">{currentAuthor}</h3> : ""}
      {loading ? skeletonMarkUp : mapList()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  quote: state.quote,
  loading: state.loading,
});

const mapActionToProps = { getQuote };

export default connect(mapStateToProps, mapActionToProps)(List);
