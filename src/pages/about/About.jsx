import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/HOC/Layout";

const About = () => {
  const [data, setData] = useState({});

  const getApi = async () => {
    const data = await axios
      .get("https://gbscoine.com/behyar/api/api/v1/about")
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getApi();
  }, []);
  console.log(data);
  return (
    <div className="mx-auto px-10 my-8 max-w-[1170px] container">
      <div dangerouslySetInnerHTML={{ __html: data.about }} />
    </div>
  );
};

export default Layout(About);
