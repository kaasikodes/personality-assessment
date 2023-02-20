import React from "react";
import { Button } from "antd";
import { appRoutes } from "data/routes";

const Home = () => {
  return (
    <div className="mt-6 flex flex-col items-stretch gap-4">
      <h4 className="text-2xl text-center ">
        Are you are an introvert or extrovert?
      </h4>
      <img
        src={"assets/personality.jpg"}
        alt={"personality"}
        className="object-contain h-52"
      />
      <p className="text-center text-sky-400">
        Find out what is personality by taking a series of tests that have been
        curated by the best doctors worldwide
      </p>
      <div className="flex justify-center w-full">
        <Button size="large" href={appRoutes.start} type="primary">
          Start Test
        </Button>
      </div>
    </div>
  );
};

export default Home;
