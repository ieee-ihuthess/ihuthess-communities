import React from "react";
import "./../style/normalize.css";
import "./../style/skeleton.css";
import "./../style/custom.css";
import { withPrefix } from 'gatsby';

export default function Home() {
  return (
    <div className="container">
      <div className="row">
      <div className="column">
        <h1> IEEE IHUThess communities </h1>
        <p>
          This is a repository with a list of the communities of the IHU we know about. Open a PR to tell us about your community!
        </p>
        <h4> What is this list?</h4>
        <p>
          This is an unofficial list of the student communities we know that are part of the IHU students community. We want to let the world know about our amazing folks!
        </p>
        
        <h4> Use </h4>
        <button className="button-primary"> 
          <a href={withPrefix("/ihu-community-list.json")} target="_blank" rel="noreferrer">Get data as json</a> 
        </button>
        &nbsp;
        <button className="button-primary"> 
          <a href={withPrefix("/ihu-community-list.json")} target="_blank" rel="noreferrer">Get data schema</a> 
        </button>
        
        <h4> Who is in this list </h4>
        <p>
          This list is created to promote the student communities of the IHU campus of Thessaloniki with focus on education and research, but we would be glad to have any student community in our list.
        <br />
          We will try our best to make sure the information validity, but we can not guarantee the accuracy of the information.
        </p>
        <h4> How to get included in the list </h4>
        <p>
          We are grateful that you want to be included in this list!
          The point is to know that the community wants to be included and find it's information. We propose the following actions:

          <ul>
            <li> If you want to include your community, open a PR that includes your communities information </li>
            <li> If you know of a community that should be included, open an issue and ask the inclusion of the community </li>
          </ul>
        </p>

        <h4> How to exclude a community from the list </h4>
        <p>
          If for any reason the community decides that they want to be excluded, please open
          an issue/PR about it and we will try to verify the validity of the request. This will be
          done by using the community main communication channel.
        </p>

        <h4> Rules </h4>
        <ul>
          <li> Exclusive groups (e.g. political groups) will not be listed </li>
          <li> All URLs to external links must be in https </li>
          <li> All static content (such as images) will be hosted in this repository </li>
          <li> Inclusion in the list is not guaranteed </li>
          <li> Have at least one publicly accessible digital channel </li>
        </ul>
      </div>
    </div>
  </div>
  );
}
