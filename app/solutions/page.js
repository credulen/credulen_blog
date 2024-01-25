"use client";
import {
  BusinessSolutionsCard,
  IndividualSolutionsCard,
  SolutionsCard,
} from "../../components/Cards";
// import solutionsData from "../../data/solutionpagedata.json";
import Link from "next/link";
import {
  getAllBusinessSolutionData,
  getAllIndividualSolutionData,
} from "../../data/solutionData/solutionListData";
import { useEffect, useState } from "react";
import IsLoading from "../loading";
import { useSolutionData } from "./useSolutionData";

const Solutions = () => {
  const [individualSolutionData, setIndividualSolutionData] = useState([]);
  const [businessSolutionData, setBusinessSolutionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [limit, setLimit] = useState(3);

  // individual solution
  // const fetchIndividualData = async () => {
  //   const solutions = await getAllIndividualSolutionData();
  //   // console.log(solutions);
  //   setIndividualSolutionData(solutions);
  // };
  // useEffect(() => {
  //   setIsLoading(false);
  //   fetchIndividualData();
  // }, []);

  const { getAllIndSolutionData, getAllBusSolutionData } = useSolutionData();

  // business solution
  // const fetchBusinessData = async () => {
  //   const solutions = await getAllBusinessSolutionData();
  //   setBusinessSolutionData(solutions);
  // };

  // useEffect(() => {
  //   fetchBusinessData();
  //   setIsLoading(false);
  // }, []);

  // if (isLoading) {
  //   return <IsLoading />;
  // }

  if (getAllIndSolutionData.isLoading || getAllBusSolutionData.isLoading) {
    return <IsLoading />;
  }

  if (getAllIndSolutionData.isError || getAllBusSolutionData.isError) {
    return <div>{getAllBusSolutionData?.error?.message}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-dark">Solutions</h1>
      <p className="text-dark">
        We position you or your business ahead of the curve in the wake of
        technology disruption
      </p>

      <div className="pt-3">
        <Link href="#indiSolution" className="btn btn-success me-3">
          Individuals
        </Link>

        <Link href="#busSolution" className="btn btn-info">
          Business/Institutions
        </Link>
      </div>

      <div id="indiSolution"></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div className="mt-5">
        <h2 className="mb-4 text-dark">Individual Solution</h2>
        <div className="row gy-4">
          {getAllIndSolutionData?.data?.data?.data?.map((indsolution) => {
            return (
              <div className="col-md-4" key={indsolution.id}>
                <IndividualSolutionsCard {...indsolution} />
              </div>
            );
          })}
        </div>
      </div>

      <div id="busSolution"></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div className="mt-5 pt-5">
        <h2 className="pb-2 text-dark">Business/Institution Solution</h2>

        <div className="row gy-4">
          {getAllBusSolutionData?.data?.data?.data?.map((bussolution) => {
            return (
              <div className="col-md-4" key={bussolution.id}>
                <BusinessSolutionsCard {...bussolution} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
