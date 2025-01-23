import React from "react";
import ca from "../pics/c-a.jpg";
import cb from "../pics/c-b.jpg";
import cc from "../pics/c-c.webp";
import cd from "../pics/c-d.jpg";
import ce from "../pics/c-e.webp";
import cf from "../pics/c-f.jpg";
import "../cssComponent/OurCourses.css";
const OurCourses = () => {
  return (
    <>
      <div class="section-course" id="courses">
        <div class="course-box">
          <header className="course-header">
            <h2 className="corsees-heading">
              Our <span>C</span>ourses
            </h2>
            <p>
              -- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              ducimus illum corporis magni voluptas, ex eum dolorum quia
              officia! Deleniti quia ut. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptatum aspernatur non at assumenda minima
              dolor commodi mollitia veniam voluptatem architecto ipsam quo
              asperiores consequatur similique, eos neque blanditiis repellat
              nam!
            </p>
          </header>
          <article className="courses-img-section">
            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Body Building</div>
              <img src={cc} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Cross Fit</div>
              <img src={cb} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Gymnastic</div>
              <img src={ce} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Fitness</div>
              <img src={cf} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">TRX</div>
              <img src={cd} alt="" width="550" height="550" />
            </div>

            <div class="first-course-img">
              <div className="course-text">
                <div class="text">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ratione culpa
                  </p>
                  <a href="">Read More →</a>
                </div>
              </div>
              <div className="course-title1">Boxing</div>
              <img src={ca} alt="" width="550" height="550" />
            </div>
          </article>
        </div>
      </div>
      <div class="oc-hr">
        <hr />
      </div>
    </>
  );
};

export default OurCourses;
