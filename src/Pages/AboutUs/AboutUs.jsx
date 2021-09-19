import React from "react";
import classes from "./AboutUs.module.css";
import Library from "../../Assets/aboutus.jpg";

export default function AboutUs() {
  return (
    <div className={classes.aboutus}>
      <h1>About WaterStones</h1>
      <div className={classes.bodyContainer}>
        <div className={classes.aboutusImage}>
          <img src={Library} alt="Library" />
        </div>
        <div className={classes.aboutusDetail}>
          <h2>About our library</h2>
          <span>
            Barnes & Noble.com leverages the power of the Barnes & Noble brand
            to offer online customers the Web's premier destination for books,
            eBooks, magazines, toys & games, music, DVD and Blu-ray, and related
            products and services.
          </span>
          <h4>The Internet's Largest Bookstore</h4>
          <span>
            Taking advantage of vast warehouses across the United States, we
            stock over 1 million titles for immediate delivery -- that's more
            titles than any other online bookseller. With so many titles, it is
            vital to give customers an easy way to find precisely the books they
            are looking for. Our search engine enables customers to locate books
            by title, author, or keyword in a few seconds at most. Customers
            with a general idea of what they want can use our Browse pages to
            sift through hundreds of categories to find exactly the right book.
            To further assist users, we offer descriptions and reviews, and our
            See Inside program lets customers read excerpts from tens of
            thousands of titles. We also offer editor recommendations and
            customer reviews on hundreds of thousands of titles. In 2009, Barnes
            & Noble.com also became a leader in eBooks, offering over 1 million
            titles in its eBooks store and launching NOOK, the world's most
            advanced eBook reader.
          </span>
          <h4>Waterstones.com Makes Shopping Easy</h4>
          <span>
            Barnes & Noble Members get Unlimited Free Member Express Shipping in
            3 days or less on eligible orders. Non-members can get Free Shipping
            on orders of $35 or more of eligible items.
          </span>
          <h4>Waterstones.com Physical Address</h4>
          <span>33 East 17th Street, New York, NY 10003</span>
        </div>
      </div>
    </div>
  );
}
