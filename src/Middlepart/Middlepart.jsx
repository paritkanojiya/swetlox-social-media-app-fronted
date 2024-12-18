import React, { useEffect, useState } from "react";
import "../css/c.css";
import Postbar from "./Postbar";
import Story from "./Story";
import Post from "./Post";
import { privateApi } from "../utils/api";
import Loadder from "../loadder/Loadder";

function Middlepart() {
  const [hasMore, setMore] = useState(true);
  const [postPage, setPostPage] = useState(0);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(hasMore, " more page have");
    if (hasMore) {
      const loadPost = async () => {
        setLoading(true);
        const { data } = await privateApi.get(`/post/load-posts/${postPage}`);
        console.log(data);
        setLoading(false);
        postPage === 0
          ? setPostList(data.content)
          : setPostList((prev) => [...prev, ...data.content]);

        setMore(!data.last);
      };
      loadPost();
    }
  }, [postPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 10 &&
      hasMore
    ) {
      setPostPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <>
      <div className=" w-[700px]   ml-[405px] mt-24  h-[640px]  fixed rounded-xl">
        <div className="overflow-y-scroll no-scrollbar  h-[640px] rounded-t-xl">
          <Story />
          <Postbar />
          <div className="w-[100%] h-fit flex justify-center items-center flex-col">
            {loading ? (
              <Loadder></Loadder>
            ) : (
              postList.map((post) => <Post key={post.id} post={post} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Middlepart;
