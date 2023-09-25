"use client";
import { useEffect, useState } from "react";
import { OndemandWebinarCard, UpcomingWebinarCard } from "@/components/Cards";
import { getAllWebinarData } from "@/data/webinarData/webinarListData";
import IsLoading from "@/components/IsLoading";

const Webinars = () => {
  const [webinarData, setWebinarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [webinarSpeakerData, setwebinarSpeakerData] = useState([]);
  // const [limit, setLimit] = useState(3);

  const fetchData = async () => {
    const webinars = await getAllWebinarData();
    // console.log(webinars);
    setWebinarData(webinars);
  };

  useEffect(() => {
    setIsLoading(false);
    fetchData();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-dark">Credulen Webinars</h1>
        <p className="text-dark">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          obcaecati ipsa impedit maxime officia necessitatibus. Corrupti nostrum
          magni soluta accusamus officia ullam voluptas suscipit blanditiis
          animi consequatur in, quisquam quae.
        </p>
      </div>

      {/* upcoming webinars */}
      <div className="mt-5 text-dark">
        <h2>Upcoming Webinars</h2>

        {/* <div className="row g-4">
					<div className="col-md-6 col-sm-12">
						<UpcomingWebinarCard />
					</div>
					<div className="col-md-6 col-sm-12"><UpcomingWebinars /></div>
				</div> */}

        <div className="row g-4">
          {webinarData?.map((webinar) => {
            // let webinarDate = new Date(webinar.attributes.createdAt);
            // console.log(webinarDate);

            // let dateNow = new Date();
            // console.log(dateNow);
            // replace the logic for the date set to be > current date - signifies that the webinar hasn't happened yet.
            //  ({new Date(movie.release_date).getFullYear()})
            // console.log(webinar.attributes.webinar_speakers.data[0]);

            // webinar.attributes.webinar_speakers.data.map((speaker) => {
            if (webinar.attributes.is_upcoming_webinar === true) {
              return (
                <div className="col-md-6 col-sm-12" key={webinar.id}>
                  <UpcomingWebinarCard {...webinar} />
                </div>
              );
            }
            // });
          })}
        </div>
      </div>

      {/* on demand webinars */}
      <div className="mt-5 pt-5">
        <h2 className="text-dark">On Demand Webinars</h2>
        <p className="text-secondary">Our Past Webinars</p>

        <div className="row g-4">
          {webinarData?.map((webinar) => {
            if (webinar.attributes.is_upcoming_webinar === false) {
              return (
                <div className="col-md-6 col-sm-12" key={webinar.id}>
                  <OndemandWebinarCard {...webinar} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Webinars;
