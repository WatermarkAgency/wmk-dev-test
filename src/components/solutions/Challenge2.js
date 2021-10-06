import * as React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import "../Card.css"

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
const Challenge2 = ({ news }) => {
  const cards = news.map((newsItem) => {
    const { headline, imageUrl, date, attachmentUrl, newsId, text, outletName } = newsItem
    const newDate = new Date(date);
    const shortDate = newDate.toLocaleString("default", { month: 'short', day: 'numeric' });
    return(
      <Col key={newsId}>
        <Card className="shadow mb-5 bg-white text-center">
          <Card.Img
            variant="top" src={imageUrl}
            alt="Missing story image"
            onError={(e)=>{e.target.src="https://freerangestock.com/sample/140410/abstract-geometric-background--cold-colors.jpg"}}
          />
          <Card.ImgOverlay>
              <h2>
                <Badge bg="black">{shortDate}</Badge>
              </h2>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Text className="outlet-name">{outletName}</Card.Text>
            <Card.Title><h4>{headline}</h4></Card.Title>
            <Card.Text className="circle">⦵</Card.Text>
            <Card.Text>{text}</Card.Text>
            <a href={attachmentUrl} className="stretched-link" label="link"></a>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return(
    <Row xs={1} sm={1} md={2} lg={3} xl={4}>
      {cards}
    </Row>
  );
};

export default Challenge2;
