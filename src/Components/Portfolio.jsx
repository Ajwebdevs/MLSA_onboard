/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fountain-pen-1851096_1280.jpg";

const imageAltText = "image of a diary with a fountain pen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */

const projectList = [
  {
    title: "Brest cancer dectection model",
    description:
      "Develop a breast cancer detection model using Logistic Regression and the sklearn dataset.",
    url: "https://github.com/Ajwebdevs/vigilant-happiness/blob/de41e58d396cf83c79efea6c87eee0c2da89f52a/Brest_cancer_dectection_using_Auto_ML.ipynb",
  },
  {
    title: "Period Tracker",
    description:
      "Developed Period Tracker model using HTML, CSS, and JavaScript",
    url: "https://pdaytracker.netlify.app/",
  },
  {
    title: "Personal Portfolio website",
    description:
      "My personal portfolio using built in html css vannila js",
    url: "https://ajweb.netlify.app/",
  },
  {
    title: "Rock or Mine dectection for submarines",
    description:
      "Developed a model for Rock or Mine detection to aid submarines in identifying underwater objects.",
    url: "https://github.com/Ajwebdevs/vigilant-happiness/blob/4b5ec47752022a544fc29050ecf4404a2c4adf16/sumbmarine_sonar_rock_project.ipynb",
  },
];



const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
