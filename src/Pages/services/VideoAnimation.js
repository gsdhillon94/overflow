import React, { Component } from "react";
import "./services.css";
import SectionContainer from "../../components/Sections/SectionContainer";
import { videoAnimationData } from "../../data/servicesData/videoAnimationData";

export default class VideoAnimation extends Component {
  constructor() {
    super();
    this.state = {
      data: videoAnimationData,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className=" section video-animation">
        {/* {this.state.data &&
          this.state.data.map((item, index) => {
            return (
              <SectionContainer key={item.id + index} sectionsData={item} />
            );
          })} */}
        <div className="content-left">
          <h2>Video and Animation Services</h2>
          <p>
            Creative video and animation services to help bring your brand to
            life.
          </p>
          <p>
            With the changing landscape in business, we bring our expertise
            information technology.
          </p>
          <button className="btn primary-white">
            <a href="/contact">Get Started</a>
          </button>
        </div>
        <div className="content-right justify-right">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Foverflowdigitalsolutions%2Fvideos%2F940795076310632%2F&show_text=0&width=560"
            width="560"
            height="315"
            // style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    );
  }
}
