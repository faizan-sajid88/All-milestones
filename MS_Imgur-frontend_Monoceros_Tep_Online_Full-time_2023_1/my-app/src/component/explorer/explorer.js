import React from "react";
import FlexContainer from "./flexContainer";

export default function Grid() {
  return (
    <div id="container">
      <FlexContainer
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <h2 id="heading">The memes of tomorrow, today.</h2>
      </FlexContainer>

      <FlexContainer
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <h4 class="tagLines">EXPLORE TAGS</h4>
        <h4 class="tagLines">MORE TAGS+</h4>
      </FlexContainer>

      <FlexContainer
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <div class="box1">
          <div class="miniBox1" id="box-1"></div>
          <div class="miniBox2" id="box-2">
            <span>Books</span>
            <br />
            <span>7769 Featured</span>
          </div>
        </div>
        <div class="box">
          <div id="box-01"></div>
          <div id="box-02">
            <span>Writing</span>
            <br />
            <span>4037 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-03"></div>
          <div id="box-04">
            <span>Funny</span>
            <br />
            <span>4803 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-05"></div>
          <div id="box-06">
            <span>Gaming</span>
            <br />
            <span>9327 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-07"></div>
          <div id="box-08">
            <span>Aww</span>
            <br />
            <span>7349 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-09"></div>
          <div id="box-10">
            <span>July 29th</span>
            <br />
            <span>3847 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-11"></div>
          <div id="box-12">
            <span>Space</span>
            <br />
            <span>7539 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-13"></div>
          <div id="box-14">
            <span>Astronomy</span>
            <br />
            <span>3876 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-15"></div>
          <div id="box-16">
            <span>Unmuted</span>
            <br />
            <span>3653 Posts</span>
          </div>
        </div>
        <div class="box">
          <div id="box-17"></div>
          <div id="box-18">
            <span>Superhero</span>
            <br />
            <span>4037 Posts</span>
          </div>
        </div>
      </FlexContainer>
      {/* <FlexContainer direction="" justifyContent="space-between">
        <div style={{ flex: 1 }}>
          <p class="box">Left Content</p>
        </div>
        <div style={{ flex: 2 }}>
          <p class="box">Left Content</p>
        </div>
        <div style={{ flex: 3 }}>
          <p class="box">Left Content</p>
        </div>
        <div style={{ flex: 4 }}>
          <p class="box">Left Content</p>
        </div>
        <div style={{ flex: 5 }}>
          <p>Right Content</p>
        </div>
      </FlexContainer> */}
    </div>
  );
}