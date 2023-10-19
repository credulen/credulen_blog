"use client";
import { useEffect, useState } from "react";
import {
  ComingSoonCard,
  ConferenceCard,
  PastEventsCard,
} from "../../components/Cards";
import React from "react";
import { getAllConferenceData } from "../../data/conferenceData/conferenceListData";
import IsLoading from "../../components/IsLoading";

const Conferences = () => {
  const [conferenceData, setConferenceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState(3);

  const fetchData = async () => {
    const conferences = await getAllConferenceData();
    // console.log(conferences.length);
    setConferenceData(conferences);
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
      <div className="pb-5">
        <h1 className="mb-5 text-dark">Events You will Love</h1>
        {conferenceData.length === 0 ? (
          <ComingSoonCard />
        ) : (
          conferenceData?.map((conference) => {
            //   console.log(conference.attributes.is_upcoming_conference.length);
            // console.log(conference);
            if (conference.attributes.is_upcoming_conference === true) {
              return (
                <div className="mb-5 pb-3" key={conference.id}>
                  <ConferenceCard {...conference} />
                </div>
              );
            }
          })
        )}
      </div>

      {/* past events */}
      <div className="pt-5">
        <h4 className="border-top border-bottom p-3 border-dark-subtle mb-5 text-dark">
          Past Events
        </h4>

        <div className="container">
          <div className="row g-2">
            {conferenceData.length === 0 ? (
              <ComingSoonCard />
            ) : (
              conferenceData?.map((conference) => {
                if (conference.attributes.is_upcoming_conference === false) {
                  return (
                    <div className="col-md-4" key={conference.id}>
                      <PastEventsCard {...conference} />
                    </div>
                  );
                }
              })
            )}
            {/* <div className="col-md-4">
							<PastEventsCard />
						</div>
						<div className="col-md-4">
							<PastEventsCard />
						</div>
						<div className="col-md-4">
							<PastEventsCard />
						</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
