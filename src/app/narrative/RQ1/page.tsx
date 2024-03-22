"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const TableauVizComponentNoSSR = dynamic(() => import("./vis1"), {
  ssr: false,
});
const TableauVizComponentNoSSR2 = dynamic(() => import("./vis2"), {
  ssr: false,
});
const TableauVizComponentNoSSR3 = dynamic(() => import("./vis3"), {
  ssr: false,
});

export default function RQ1() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <h1 className="w-full h-48 font-inter text-3xl font-bold flex flex-row items-center justify-center text-center bg-sky-400 mt-32">
        Research Question 1: How does a large, busy airport impact it&apos;s
        surrounding communities?
      </h1>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;The Bureau of Transportation Statistics provides annual datasets
        on U.S. air traffic. One of the data tables they have for the 2018
        dataset lists the busiest airports in the U.S. by enplaned passengers.
        Through looking at the metropolitan areas that had the busiest airports,
        we noticed that these were all areas that had a large population size
        due them being renowned on a global stage as major cultural and economic
        centers, such as New York City and Los Angeles. Because of this
        important detail, we decided to look into if there was any relationship
        between a metropolitan area&#39;s population size and the volume of
        enplanned passengers at that location. Below is a visualization that
        shows this for the top 10 busiest U.S. airports:
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR3 />
      </div>
      <br /> <br />
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;As we can see above, the volume of enplanned passengers at the
        metropolitan areas for the top 10 busiest airports is significantly
        larger than the metropolitan area&#39;s population size. With this trend
        in mind, let us take a look at the Los Angeles International Airport,
        which was the 2nd busiest airport in the U.S. in 2018 by enplaned
        passengers both international and domestic. Los Angeles, California has
        a population of about 3.9 million as of 2018, much higher than the
        number one busiest airport in the U.S., Hartsfield-Jackson Atlanta
        International Airport in Atlanta, Georgia, which only has a population
        of about 498,000 as of 2018 (Census, 2018). Thus we will focus on the
        Los Angeles airport because of its highly populated surrounding city and
        the airport being the second busiest airport in the U.S. Los Angeles is
        also a city of high diversity. In this way, we can aim to focus our
        research and findings on revealing the humanity behind the numbers.
        <br />
        <br />
        &emsp;We would like to first introduce the dangers of air pollution as
        described by a scholarly article, &quot;Health effects of pollution on
        the residential population near a Brazilian airport: A perspective based
        on literature review&quot;. The study explains that fine air particles
        contribute to dangerous effects on people&#39;s health and is one of the
        leading causes of cardiovascular and respiratory illnesses. In fact,
        &quot;Air pollution is widely recognized as a risk factor for
        cardiovascular and respiratory diseases… It was classified as
        carcinogenic to humans (general pollution, particulate matter and
        diesel) by the International Agency for Research on Cancer (IARC), a
        body linked to the World Health Organization (WHO)&quot; (Chiodo et. al,
        2019). The study assembled various other studies on air pollution in
        airports on surrounding air and analyzed their processes to come up with
        a conclusion on the mortality of air particles created by airports. The
        study concluded that “the majority of their conclusions corroborate the
        vast literature that consistently attests exposure to air pollution is
        detrimental to human health” (Chiodo et. al, 2019). As the study
        confirms, exposure to air particles from living near an airport is not
        something to be taken lightly, and the WHO acknowledges that “no amount
        is safe.” This means that exposure to even a tiny amount of fine
        particles can have devastating consequences on your health in the future
        as your body deteriorates from inhaling the fine particles. With this in
        mind, take a look at the following visualization of air pollution scores
        (the higher the worst) for communities around LAX, organized by
        zipcodes:
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;The above visualization data was pulled from CalEnviroScreen, a
        division of the California government focused on environmental data and
        science. The visualization was created from CalEnviroScreen&#39;s 2018
        census, and the air pollution scores for each community are a combined
        calculation of exposure to pollutants and environmental effects. As you
        can see, the airport&#39;s surrounding communities, by zip code, have
        varying degrees of air pollution scores. The darker-colored communities
        mean that there are more fine air particles in the air, which means that
        the community is at a higher risk of developing respiratory and other
        bodily illnesses from exposure to air pollution. Interestingly, the
        communities directly surrounding the airport have less pollution than
        some of the airports to the east of LAX. This is an interesting
        phenomenon, but is easily explainable by the fact that most of the
        airport&#39;s pollution is blown downwind which causes the particles to
        settle downwind from the airport&#39;s location. The airport&#39;s
        downwind happens to be east of the airport, which is supported by the
        fact that communities east of the airport are much darker. A study by
        Neelakshi Hudda et al. measured the spatial pattern of particle number
        (PN) concentrations downwind from the Los Angeles International Airport
        (LAX), and found that there were 4-fold concentrations of pollutant
        particles 10km downwind from the airport (Hudda et. al, 2014). The study
        concluded that, “This large, previously undiscovered spatial extent of
        the air quality impacts downwind of major airports may mean a
        significant fraction of urban dwellers living near airports likely
        receive most of their outdoor PN exposure from airports rather than
        roadway traffic” (Hudda et. al, 2014) . This is significant as it could
        explain why current policies on airport pollution may not account for
        the downwind settling of pollutants.
        <br></br>
        <br />
        &emsp;Interesting, we also found that these affected communities are
        also suffering from economic disparity, and are also predominantly
        black. Take a look at the poverty levels of LAX&#39;s surrounding
        communities (organized by zipcodes, with more darkly colored zipcodes in
        more poverty):
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR2 />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;The same communities that were darkly colored on the previous
        pollution burden map are also more darkly colored on this poverty
        intensity map. The poverty intensity score is derived from measuring the
        percent of the community under the federal poverty level. Not only are
        these areas suffering from economic disparity, but they are also subject
        to high levels of air pollution from the airport. These communities are
        also predominantly black (Census, 2018), which means the air pollution
        from the airport is heavily affecting the specific community, indirectly
        marginalizing them. Although there is no magic solution since airports
        downwind will always carry pollutants somewhere, there should be
        accountability on the airports to reimburse the communities by
        performing cleanups, etcetera.
        <br></br>
        <br />
        &emsp;Aside from air pollution, there is also noise pollution from
        airports to surrounding communities, and not so coincidentally, it
        affects the same communities that airport air pollution affects.
        Monterey Park, a community in east Los Angeles, experiences a huge
        overlap with airplane flight routes, which incidentally means they have
        high noise pollution and measures have been implemented to mitigate the
        impacts of noise from LAX. Take a look at the following contour map
        provided by LAWA (Los Angeles World Airports) summarizing the noise
        contour of the LAX air traffic:
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
        east of the airport the most. If you compare this contour map with the
        previous two maps, you can see that the airport is affecting the same
        group of communities with multiple offenses. As previously stated, these
        communities already suffer from economic disparity and air pollution,
        but now we see that they also suffer from noise pollution from the
        airports. Overall, they are victims of multiple offenses by the airport.
        It shows that the current airport policies regarding these topics are
        insufficient.
      </p>
      <p className="bg-sky-300 p-5 w-9/12 mx-auto mt-10 rounded">
        &emsp;Any of these problems can similarly be extended to any other
        airport in the U.S. and in the world, since airports create pollution
        and these pollutants will be carried by the airport’s downwind,
        resulting in certain communities downwind from the airport to suffer
        from air pollution, and potentially noise pollution as well. There needs
        to be better airport policies in regards to providing support to
        communities affected by these offenses. Scheduled community cleanups
        and/or free air filtration systems are some good suggestions to start
        from.
      </p>
      <Link href="/narrative/RQ2" className="w-fit m-auto mt-10">
        <button className="text-3xl text-sky-500 hover:underline">
          Next Section: In what ways are social dynamics, such as experiences of
          discrimination, affecting air travel decisions of marginalized
          communities (based on race, gender, and/or religious affiliation)?
        </button>
      </Link>
    </div>
  );
}
