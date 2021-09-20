import * as React from "react";
import { Card, Badge } from "react-bootstrap";

/**
 *
 * @param {array} news - an array of NewsItem instances
 * @returns News article cards. Feature the data shown in the mockup link
 * here: https://www.figma.com/file/8hAFoMRUo9lLmBeDko0UVr/Untitled?node-id=0%3A1
 * Each card should link to the attachmentUrl in a new window.
 * (BONUS 1) - Make the image have a 10% zoom effect and darken the
 * drop shadow when the card is hovered.
 * (BONUS 2) - Also on hover: have the Outlet Name animate out to the left.
 * The Contact Name should slide in from the right in its place.
 * (BONUS 3) - When the cards are on the mobile breakpoint, hide the article
 * text and the graphic element, so that the cards are shorter in height.
 *
 */
 //iterate over news array of NewsItem instances and create cards
 //display all cards
const Challenge2 = ({ news }) => {
  const cards = news.map(newsItem => {
    const { headline, imageUrl, date, attachmentUrl, newsId, text, outletName, contactName } = newsItem
    return (
      <Card key={newsId} style={{ width: '25vw', height: '40vw' }}>
        <Card.Img src={imageUrl} />
        <Card.ImgOverlay>
          <Badge>{date}</Badge>
        </Card.ImgOverlay>
        <Card.Body>
          <Card.Text>{outletName}</Card.Text>
          <Card.Title>{headline}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    )
  })

  return <section>{cards}</section>;
};

export default Challenge2;