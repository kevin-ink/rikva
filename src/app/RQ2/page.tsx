"use client";
import { useEffect, useRef } from "react";
import { TableauViz } from "@tableau/embedding-api";
import Image from "next/image";

export default function RQ2() {
  // const tableauVizRef = useRef<HTMLDivElement>(null);
  // const tableauVizRef2 = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   if (!tableauVizRef.current || !tableauVizRef2.current) return;
  //   const viz = new TableauViz();
  //   viz.src =
  //     "https://public.tableau.com/views/lax_pollution/Sheet1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link";
  //   tableauVizRef.current.appendChild(viz);
  //   const viz_2 = new TableauViz();
  //   viz_2.src =
  //     "https://public.tableau.com/views/poverty_intensity/Sheet1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";
  //   tableauVizRef2.current.appendChild(viz_2);
  //   const tableau_ref = tableauVizRef.current;
  //   const tableau_ref2 = tableauVizRef2.current;
  //   return () => {
  //     tableau_ref.innerHTML = "";
  //     tableau_ref2.innerHTML = "";
  //   };
  // }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <h1 className="w-full h-48 font-inter text-3xl flex flex-row items-center justify-center text-center bg-sky-500 mt-32">
        Research Question 2: In what ways are social dynamics, such as
        experiences of discrimination, affecting air travel decisions of
        marginalized communities (based on race, gender, and/or religious
        affiliation)?
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
        &emsp;The Bureau of Transportation Statistics provides annual datasets
        on U.S. air traffic. One of the data tables they have for the 2018
        dataset lists the busiest airports in the U.S. by enplaned passengers.
        The Los Angeles International Airport was the 2nd busiest airport in the
        U.S. in 2018 by enplaned passengers both international and domestic. Los
        Angeles, California has a population of about 3.9 million as of 2018,
        much higher than the number one busiest airport in the U.S.,
        Hartsfield–Jackson Atlanta International Airport in Atlanta, Georgia,
        which only has a population of about 498,000 as of 2018. Thus we will
        focus on the Los Angeles airport because of its highly populated
        surrounding city and the airport being the second busiest airport in the
        U.S. Los Angeles is also a city of high diversity. In this way, we can
        aim to focus our research and findings on revealing the humanity behind
        the numbers.
      </p>
      <Image
        src="/discrim_viz.png"
        alt="visualization of discriminations in air travel"
        width={1664}
        height={1090}
        className="w-10/12 h-auto m-auto mt-12"
      />
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;Based on the graph, race, ethnicity, national origin, and color
        constitute the most frequent complaint types, together accounting for
        more than 70% of the total. While there are arguable distinctions
        between those terms, under the context of air traveling procedures, they
        are commonly characterized by obvious visual appearances, so they are
        viewed as one category in our study. Then sex is the next largest source
        of discrimination, which is more subtle. Sex is oftentimes related to
        biological features but is highly intertwined with societal expectations
        of gender expression. Lastly, religious affiliation is also an important
        factor causing discrimination during air travel. Those findings, albeit
        they cannot fully uncover the entire landscape of air travel
        discrimination, provide directions to further narrow down to specific
        communities that suffer from enplaning experiences.
        <br />
        <br />
        &emsp;The binary categorization system of sex and social expectation of
        gender expressions lead to LGBT-Q travelers being more susceptive to
        additional scrutiny. According to Sanford (2018), advanced imaging
        technologies might lead to a physical pat-down, which might be
        distressing for individuals who are transgender. Even those physical
        examinations will be performed by an officer “of the same gender as you
        present yourself” per TSA guideline, it is difficult for transgender
        people, or sexual minorities in general, to request someone fulfilling
        that criteria, because their gender identity is complex, which might
        mismatch their paperwork that already suggests either M or F in the
        dichotomy. Moreover, transgender communities are more likely to trigger
        pat-downs and stricter verifications in the first place, as “a perceived
        mismatch between the gender marker on their ID and the gender they
        present is flagged as an anomaly… [which] automatically triggers higher
        levels of scrutiny.”(Paisley and Mulqueen, 2011). For some transgender
        people, “the fear of gender-based interrogation is so great that they
        have chosen not to fly.”(Paisley and Mulqueen, 2011). As a result,
        transgender passengers endure the consequences of systemic gender
        categorization confusion and are compelled to adjust their gender
        expressions to align with traditional norms at the airport.
        <br />
        <br />
        &emsp;Another community that experiences discrimination at the airport
        is a group whose race, ethnicity, and religious affiliations interweave
        with their identity – Muslims. As minority populations, Muslim Americans
        are racialized groups whose religious identity and racial identity
        intersect to determine their position on American racial hierarchy, and
        religious signifiers, such as hijab, mark them as the target of
        surveillance. The 9-11 incident led to myriad counterterrorism and
        counter-violent extremism (CVE) strategies and social prejudice against
        such a group. Airport as a medium for national security implementation
        and political rhetoric displays more obvious systemic prejudice, since
        “complaints about being stopped in the airport were perhaps the most
        common reference to government mistreatment.” (Gillum, 2018) Not only
        are Muslim travelers targets of surveillance during security
        checkpoints, but the lingering issue of No-fly lists and Selectee lists
        hampers many innocent people’s ability to travel at all. Council on
        American-Islamic Relationships (2022) indicates that it is often the
        pronunciation and spelling of their names for one to be wrongfully
        placed on the watchlist, but it “could be a nightmare” to get a name
        removed.
        <br />
        <br />
        &emsp;In 2013, TSA launched a study on passengers referred to secondary
        scrutiny, intending to monitor compliance and prevent unlawful
        profiling. Nevertheless, the study was terminated in 2017 and no
        analysis was conducted (Government Accountability Office, 2019). The
        silence of data uncovering the discriminations towards certain
        marginalized groups makes it very difficult to properly protect their
        travel freedom by subjugating those communities to reduced mobility if
        not completely deprived of their air traveling options.
        <br />
        <br />
        &emsp;In 2013, TSA launched a study on passengers referred to secondary
        scrutiny, intending to monitor compliance and prevent unlawful
        profiling. Nevertheless, the study was terminated in 2017 and no
        analysis was conducted (Government Accountability Office, 2019). The
        silence of data uncovering the discriminations towards certain
        marginalized groups makes it very difficult to properly protect their
        travel freedom by subjugating those communities to reduced mobility if
        not completely deprived of their air traveling options.
        <br />
        <br />
        &emsp;In conclusion, while airports are essential for global and
        domestic connectivity, they also present challenges for marginalized
        individuals due to the inherent biases in their operational procedures.
        The lack of comprehensive data and the discontinuation of studies aimed
        at understanding these challenges hinder efforts to create a more
        inclusive and equitable air travel experience. To address these issues
        effectively, there needs to be a concerted effort to collect and analyze
        data on discriminatory practices in airports and to develop strategies
        that reduce bias and ensure fair treatment for all travelers.
      </p>
    </div>
  );
}
