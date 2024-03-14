"use client";
import { useEffect, useRef } from "react";
import { TableauViz } from "@tableau/embedding-api";
import Image from "next/image";

export default function Narrative() {
  // const tableauVizRef = useRef<HTMLDivElement>(null);
  // const tableauVizRef2 = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (!tableauVizRef.current || !tableauVizRef2.current) return;
  //     const viz = new TableauViz();
  //     viz.src =
  //       "https://public.tableau.com/views/lax_pollution/Sheet1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link";
  //     tableauVizRef.current.appendChild(viz);
  //     const viz_2 = new TableauViz();
  //     viz_2.src =
  //       "https://public.tableau.com/views/poverty_intensity/Sheet1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";
  //     tableauVizRef2.current.appendChild(viz_2);
  //     const tableau_ref = tableauVizRef.current;
  //     const tableau_ref2 = tableauVizRef2.current;
  //     return () => {
  //       tableau_ref.innerHTML = "";
  //       tableau_ref2.innerHTML = "";
  //     };
  //   }
  // }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <h1 className="w-full h-48 font-inter text-4xl flex flex-row items-center justify-center text-center bg-sky-500 mt-32">
        Place in Literature
      </h1>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;Upon browsing the scholarly web for any literature on airport
        noise and air pollution, we were met with dismal results. To our
        surprise, there were very few articles published specifically about
        airport air and noise pollution, with many published ones dating back to
        the 1990s, which do not represent the state of aircraft today. It is
        therefore difficult to grasp current scholarly opinions on the topic of
        air and noise pollution. However, scholars generally agree that air
        pollution and noise pollution from airports is an issue to surrounding
        communities especially communities downwind from the airport. However,
        most of the scholarly literature is very scientifically oriented and
        does not discuss the more humanistic aspects of airport pollution. This
        is why our group seeks to contextualize the impact of pollution in a
        humanistic way by asking questions about how the pollution may impact
        the livelihoods of the local communities and how they may not be able to
        escape the pollution themselves, with government regulations being their
        only option. We would like to acknowledge though that airport-specific
        pollution data is very hard to track because airports consequently
        create very busy roads and car traffic which contribute to local
        pollution around the airport. Thus, there remain questions about whether
        airplanes are emitting more pollution than the cars that drive in and
        out of the airport, and whether regulations should be focused on road
        traffic or airplane traffic in regards to reducing air pollution.
        <br /> <br />
        &emsp;For discrimination experiences during air travel, we are also
        surprised to find out there is very limited publicly available data
        directly collecting unfair treatment during air travel experiences and
        passengers’ demographic information, nor scholarly articles that
        directly discuss such a topic. However, we were able to scrape the data
        from the Bureau of Transportation Statistics’s annual air travel
        consumer reports from 2014 to 2018 on discrimination complaints and
        thereby probe into the silenced communities who experience bias and
        prejudices during air travel. Sex minorities, such as transgender and
        LGBT-Q people are very susceptible to additional scrutiny and
        interrogations because Paisley and Mulqueen found in 2011 that any
        mismatch between their gender representation and document ID will be
        viewed as an anomaly, which will trigger an advanced level of
        investigation. In addition, research studies by Gillum (2018) and
        analysis by the Council on American-Islamic Relationships (2022)
        targeting Muslim Americans show that such a group is very much impacted
        in terms of travel options and mobility due to national security acts as
        well as social stigmatization post 9-11 era. Those pieces of literature
        serve as supporting evidence to our arguments regarding reduced mobility
        by flights as well as discrimination during air travel processes.
      </p>
      <h1 className="w-full h-48 font-inter text-4xl flex flex-row items-center justify-center text-center bg-sky-500 mt-32">
        Significance
      </h1>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;&emsp;This project is important since we want to show how air
        traffic reveals the disparities in discrimination within marginalized
        communities while also perpetuating and reinforcing these inequalities.
        The complex interaction between airport operations and community
        well-being is something we want to help others understand as a way to
        address the need for equitable and sustainable policies for airports and
        air travel. Our research questions tackle the gaps in the understanding
        of how airports affect their surroundings and the people who use them,
        and we want our research to contribute to a more comprehensive
        understanding of the environmental and societal challenges that airports
        create by focusing on the humanistic aspects of airport pollution and
        discrimination in air travel.
        <br />
        <br />
        &emsp;In regards to the impact that airports have on their surrounding
        communities, we hope to address the public health concerns and the
        policy and regulation needs for air and noise pollution by looking into
        the documentation of health issues and economic status of communities
        surrounding the Los Angeles International Airport. With its high
        population and rich cultural diversity, LAX provides a unique and
        complex backdrop for our research due to it being a major hub for
        international and domestic flights. As one of the busiest airports
        globally, the sheer volume of air traffic along with the ground
        transportation related to the airport provides a comprehensive view of
        the overall impact that airport operations have on local communities.
        <br />
        <br />
        &emsp;In looking into how social dynamics affect air travel decisions of
        marginalized communities, we want to raise awareness for the minority
        groups facing air travel discrimination, notably during the boarding
        process of a flight. There was very little openly available data
        regarding passenger’s demographics for flights as well as research and
        studies dedicated to this subject matter, which shows that the voices of
        those who face air travel discrimination are silenced. The Government
        Accountability Office emphasizes the need to prevent unlawful profiling
        at the Transportation Security Administration, which is something that
        our research hopes to address by looking into the inherent biases of the
        TSA’s operational procedure.
        <br />
        <br />
        &emsp;Overall, we want to show how the medium of air travel exposes
        different discriminations that are shown in both social dynamics and
        wealth disparities. With each of our research questions, we seek to
        advocate for sustainable policies to mitigate air and noise pollution
        and to amplify the voices of marginalized communities who have faced
        discrimination during the boarding process. Through our investigations
        into the documentation of social dynamics of the surrounding communities
        of LAX and the demographics of passengers facing air travel
        discrimination, we strive to advocate for systemic changes within
        airport operations. Ultimately, our research aims to foster a more
        inclusive air travel environment by underscoring the need to dismantle
        the disparities perpetuated by the airline industry.
      </p>
    </div>
  );
}
