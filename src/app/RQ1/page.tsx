"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const TableauVizComponentNoSSR = dynamic(() => import("./vis1"), {
  ssr: false,
});
const TableauVizComponentNoSSR2 = dynamic(() => import("./vis2"), {
  ssr: false,
});

export default function RQ1() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <h1 className="w-full h-48 font-inter text-3xl flex flex-row items-center justify-center text-center bg-sky-500 mt-32">
        Research Question 1: How does a large, busy airport impact it&apos;s
        surrounding communities?
      </h1>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;In addition to causing minority groups to be stuck in surrounding
        areas that suffer from noise pollution, airports also create the
        immobility of certain travelers as they go through the standardized
        process prior to enplanement, despite its initial intention of
        facilitating transportation. This is because airports don’t serve solely
        as the medium for transportation and tourism, there are also ideological
        attributes and national security considerations associated with the
        platform.
        <br /> <br />
        &emsp;Simply put, a common process before boarding includes checking in
        at the airline’s counter, going through security checks, and then
        proceeding to the boarding gate. While one may perceive this as a smooth
        flow of a 3-step procedure, the dynamics of interrogation and being
        interrogated create an imbalance of power status that disproportionately
        affects some groups of travelers than others, and the denial to fly and
        documented profiling hampers both their current and future mobility.
        Therefore, while acknowledging the necessity of safety checks to ensure
        broader safety for passengers, it is important to bring awareness to the
        unique struggles some marginalized groups face during their experience
        of air travel.
        <br />
        <br />
        &emsp;Since there is very little openly available data on passengers’
        demographics, possibly due to privacy protection reasons, we supplement
        our data with the annual report from the same agency (Bureau of
        Transportation Statistics) to probe into what groups are potentially
        more susceptible impacted by discrimination. The data was scraped from
        the “Complaints about Discrimination” section in annual air travel
        consumer reports from 2014 to 2018. It is worth noting that the Bureau
        of Transportation Statistics did not report the complaints by type until
        2016. (Interestingly, there is a surge in the total complaints from 2015
        to 2016, which is when categorization starts to take place.)
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;The visualization data was pulled from CalEnviroScreen, a division
        of the California government focused on environmental data and science.
        The visualization was created from CalEnviroScreen’s 2018 census. As you
        can see, the airport’s surrounding communities, by zip code, have
        varying degrees of air pollution scores. The darker-colored communities
        mean that there are more fine air particles in the air, which means that
        the community is at a higher risk of developing respiratory and other
        bodily illnesses from exposure to air pollution. Interestingly, the
        communities directly surrounding the airport have less pollution than
        some of the airports to the east of LAX. However, after investigations,
        the answer became quite clear. The communities east of the airport are
        in the direction of the airport’s downwind, which is the direction the
        wind blows from the airport, carrying any air particles along the way.
        The downwind can carry the airport’s pollutants miles away from the
        airport’s location. This explains why the communities east of the
        airport are receiving such high levels of air pollution. These
        communities are also very dense communities that are simultaneously
        suffering from high air pollution from dense traffic, only aggravated by
        the fact that they are downwind from the airport. We also found that
        these communities are predominantly black and suffer from economic
        disparity. Take a look at the poverty levels of LAX’s surrounding
        communities:
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR2 />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;As can be seen, not only do the communities have a high air
        pollutant score, but they are also communities suffering from poverty.
        All this data reveals that these communities are unable to get out of
        their situation due to their relatively low economic status, which
        forces them to dedicate more time to making a living than to championing
        better living conditions and better air quality. When people are
        struggling to make ends meet, they will become complacent to issues that
        affect them indirectly, even when these issues will only cause even
        worse problems in the future if they continue to ignore them. Airport
        pollution is one of these issues. Communities must not become complacent
        and should advocate to obtain government assistance in things like
        cleaning the air or finding ways to mitigate the travel of air
        pollutants from the airport down to the communities. Aside from air
        pollution, there is also noise pollution from airports to surrounding
        communities, and not so coincidentally, it affects the same communities
        that airport air pollution effects. This is truly not coincidental,
        because airports designate routine routes for planes to stick to and
        these routes overlap certain communities way more than others. For
        example, Monterey Park, a community in east Los Angeles, experiences a
        huge overlap with airplane flight routes, which incidentally means they
        have high noise pollution and measures have been implemented to mitigate
        the impacts of noise from LAX. Take a look at the following contour map
        provided by LAWA (Los Angeles World Airports) summarizing the noise
        contour of the LAX air traffic.
      </p>
      <Image
        src="/noise contour map.png"
        alt="airport contour map lax"
        width={1664}
        height={1090}
        className="w-10/12 h-auto m-auto mt-12"
      />
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;As you can see, the noise contour map affects communities directly
        east of the airport the most. As previously stated, these communities
        already suffer from economic disparity and air pollution, but now we see
        that they also suffer from noise pollution from the airports. Overall,
        they are victims of multiple offenses by the airport, and there has not
        been any news on addressing these issues.
      </p>
    </div>
  );
}
