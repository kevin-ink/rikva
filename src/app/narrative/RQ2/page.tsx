"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const TableauVizComponentNoSSR4 = dynamic(() => import("./vis4"), {
  ssr: false,
});

const TableauVizComponentNoSSR5 = dynamic(() => import("./vis5"), {
  ssr: false,
});

const TableauVizComponentNoSSR6 = dynamic(() => import("./vis6"), {
  ssr: false,
});

export default function RQ2() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <h1 className="w-full h-48 font-inter font-bold text-3xl flex flex-row items-center justify-center text-center bg-sky-500 mt-32">
        Research Question 2: In what ways are social dynamics, such as
        experiences of discrimination, affecting air travel decisions of
        marginalized communities (based on race, gender, and/or religious
        affiliation)?
      </h1>
      <div className="mt-16 w-9/12 m-auto text-lg">
        &emsp;In addition to causing minority groups to be stuck in surrounding
        areas that suffer from noise pollution, airports also create the
        immobility of certain travelers as they go through the standardized
        process prior to enplanement, despite its initial intention of
        facilitating transportation. This is because airports don&#39;t serve
        solely as the medium for transportation and tourism, there are also
        ideological attributes and national security considerations associated
        with the platform.
        <br /> <br />
        <p className="bg-sky-300 p-5 w-9/12 mx-auto mt-10 rounded">
          &emsp;Simply put, a common process before boarding includes checking
          in at the airline&#39;s counter, going through security checks, and
          then proceeding to the boarding gate. While one may perceive this as a
          smooth flow of a 3-step procedure, the dynamics of interrogation and
          being interrogated create an imbalance of power status that
          disproportionately affects some groups of travelers than others, and
          the denial to fly and documented profiling hampers both their current
          and future mobility. Therefore, while acknowledging the necessity of
          safety checks to ensure broader safety for passengers, it is important
          to bring awareness to the unique struggles some marginalized groups
          face during their experience of air travel.
        </p>
        <br />
        <br />
        &emsp;Since there is very little openly available data on
        passengers&#39; demographics, possibly due to privacy protection
        reasons, we supplement our data with the annual report from the same
        agency (Bureau of Transportation Statistics, 2015, 2016, 2017, 2018,
        2019) to probe into what groups are potentially more susceptible
        impacted by discrimination. The data was scraped from the “Complaints
        about Discrimination” section in annual air travel consumer reports from
        2014 to 2018. It is worth noting that the Bureau of Transportation
        Statistics did not report the complaints by type until 2016.
        Interestingly, there was a surge in total complaints from 2015 to 2016,
        which is when categorization started to take place.
      </div>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR4 />
      </div>
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
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR5 />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;Diving deeper into the topic, the bar graph above shows the number
        of racism-based complaints filed against four extremely popular US
        airlines. The data indicates racial minorities are most likely to face
        discrimination at American Airlines with 29 formal complaints filed over
        the short time period of 2016 - 2017. Delta and Southwest are relatively
        safer with only 9 formal complaints filed over the time period. This
        data helps us understand how racial minorities can &#39;self select&#39;
        and choose to fly with &#39;safer&#39; and more tolerant airlines if the
        data is made more public and easily accessible. It also leads to the
        question as to why certain airlines are statistically less likely to
        receive racism-based complaints - it could be due to their stricter
        tolerance policy enforcement or culture among others. All in all,
        minorities&#39; air travel patterns can be greatly impacted by this
        data, which was obtained from the US Department of Transportation (US
        Department of Transportation, 2017).
        <br />
        <br />
        &emsp;The findings are corroborated by the NAACP which had previously
        issued a travel advisory warning African Americans to steer clear of
        American Airlines due to the high chances of being subject to racial
        discrimination (Domonoske, 2017).
      </p>
      <div className="w-10/12 h-auto m-auto mt-12">
        <TableauVizComponentNoSSR6 />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;The multi-line graph above shows the number of passengers
        scheduled for both domestic and international flights across the United
        States. Obtained directly from our dataset, it indicates an increase in
        scheduled enplanements annually from 2016 to 2018, with the number of
        airline passengers increasing by approximately 4.8% from 2017 to 2018.
        However, flight patterns during any single year do not show significant
        variation, with the greatest number of passengers flying around July and
        August. While the total complaints about all forms of air travel
        discrimination have remained roughly constant from 2016 -2018, the
        number of flyers has steadily increased. In addition to growing at a
        constant rate annually, monthly flight patterns and trends remain
        similar as visualized in the line chart above. We believe this shows
        while discrimination is a major issue facing passengers, it is not
        enough to deter the very large American population from continuing to
        fly. One major factor is that approximately 29% of American travelers
        use air transportation for business purposes, while a significant
        portion also fly to visit family/close friends. The data underscores the
        essential nature of air travel for many individuals, leading to
        instances where passengers endure discrimination, as business and
        personal connections hold considerable importance (Statista, 2023).
        Therefore, the discriminative experiences of minority groups have been
        muted.
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
        levels of scrutiny.”(Currah and Mulqueen, 2011). For some transgender
        people, “the fear of gender-based interrogation is so great that they
        have chosen not to fly” (Currah and Mulqueen, 2011). As a result,
        transgender passengers endure the consequences of systemic gender
        categorization confusion and are compelled to adjust their gender
        expressions to align with traditional norms at the airport.
      </p>
      <div className="w-auto border-2 border-sky-200 rounded h-auto m-auto mt-12">
        <Image alt="image of airport" src="/tsa.jpg" width={830} height={553} />
      </div>
      <p className="mt-16 w-9/12 m-auto text-lg">
        &emsp;Another community that experiences discrimination at the airport
        is a group whose race, ethnicity, and religious affiliations interweave
        with their identity - Muslims. As minority populations, Muslim Americans
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
        hampers many innocent people&#39;s ability to travel at all. Council on
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
      </p>
      <p className="bg-sky-300 p-5 w-9/12 mx-auto mt-10 rounded">
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
