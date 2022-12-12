import { useEffect, useState } from "react";
import Newscard from "./Newscard";
import Searchfunc from "./Searchfunc";
import Skeletons from "./Skeletons";

const Content = (props) => {
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  
  const getData = async () => {
    setLoading(true);
    if (search.length !== 0) {
      var res = await fetch(
        "https://newsapi.org/v2/everything?q=" +
          search +
          "&apiKey=3069e99174f343d793c37b09ac9aab7a",
        { method: "GET" }
      );
      console.log("im in no search")
    }

    if (search.length === 0) {
      res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=3069e99174f343d793c37b09ac9aab7a',
        { method: "GET" }
      );
      console.log("im in search")
    }

    if (props.cat.length !== 0) {
      res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=in&apiKey=3069e99174f343d793c37b09ac9aab7a&category='+props.cat,
        { method: "GET" }
      );
      console.log("im in cat")
    }

    setLoading(false);
    const data = await res.json();
    console.log(data);
    setArticle(data.articles);
  };

  useEffect(() => {
    getData();
  }, [search,props.cat]);

  const dispnews = article.map((item) => {
    return (
      <Newscard
        key={item.url}
        title={item.title}
        desc={item.description}
        image={item.urlToImage}
        url={item.url}
      />
    );
  });

  const takesearch = (data) => {
    setSearch(data);
    console.log(data);
  };

  return (
    <div>
      <div className="flex p-4 justify-between px-12">
        {props.cat.length!==0 ? <p className="text-4xl">{props.cat.charAt(0).toUpperCase() + props.cat.slice(1)} News</p> : <p className="text-4xl">Today's News</p> }
        <Searchfunc takesearch={takesearch}></Searchfunc>
      </div>
      <div className="grid grid-cols-3 grid-flow-row drop-shadow-md mt-6 gap-8">
        {loading
          ? Array.from({ length: 6 }, (e, i) => <Skeletons key={i} />)
          : dispnews}
      </div>
    </div>
  );
};

export default Content;
