"use client";
import "./mycard.css";
// ? types
import { states } from "@/types";
//
import CountUp from "react-countup";

export default function MyCard() {
  const arrOfStates: states[] = [
    { n: 10, label: "companies", txt: "K+" },
    { n: 314, label: "templates", txt: "" },
    { n: 12, label: "queries", txt: "M+" },
  ];
  return (
    <>
      <article id="MyCard">
        <section id="MyCard__s1">
          <h1>
            Get <span className="text-PrimarySoftViolet">insights</span> that
            help your business grow .
          </h1>
          <p className="text-[0.7rem] text-NeutralTransparentWhite60">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <ul role="list">
            {arrOfStates.map((e, i) => {
              return <Counter key={i} n={e.n} txt={e.txt} label={e.label} />;
            })}
          </ul>
        </section>
        <section id="MyCard__s2" className="bg-PrimarySoftViolet">
          <div className=""></div>
        </section>
      </article>
    </>
  );
}

let Counter = ({ n, txt, label }: states) => {
  return (
    <>
      <li role="listitem">
        <div className="flex items-center text-[1.1rem] font-bold max-lg:justify-center">
          <CountUp start={0} duration={4} end={n} className="" />
          <span>{txt}</span>
        </div>
        <span className="text-[0.6rem] uppercase text-NeutralTransparentWhite60 ">
          {label}
        </span>
      </li>
    </>
  );
};
