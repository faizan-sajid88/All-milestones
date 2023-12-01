import React from "react";
import {Divider, Grid, Segment , Embed,Image} from 'semantic-ui-react'


export default function LatestSection(props){
   
    return(
        <>
       
        <Segment>
        <Grid columns={2}>
        <Grid.Column >
        <div className="latest-side-1">
       
        <Embed
    id={props.id}
    placeholder={props.placeholder}
    source={props.source}
  />
        </div>
        </Grid.Column>

        <Grid.Column >
       <Segment inverted>
        <div className="movie-details">
        <Image className="movie-image" src={props.placeholder} />
        <div>
        <h2>{props.title}</h2>
        <p>{props.movieType}</p>
<h3>Icons Only: Shah Rukh Khan on His Legacy, Going Bald & More!</h3>

        </div>

        </div>
        <div className="movie-details">
        <Image className="movie-image" src={props.placeholder} />
        <div>
        <h2>{props.title}</h2>
        <p>{props.movieType}</p>
<h3>Icons Only: Shah Rukh Khan on His Legacy, Going Bald & More!</h3>

        </div>

        </div>

        <Divider inverted />

       </Segment>
        </Grid.Column>
        </Grid>
        <Divider vertical ></Divider>
        
        </Segment>
        </>
    )
}