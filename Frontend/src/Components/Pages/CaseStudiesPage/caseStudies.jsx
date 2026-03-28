import { useState } from "react"; //Lets components remember values
import "./caseStudies.css";  //Applies styling

const articles = [          //Array of data including title, author, and flags (featured and tall)
  {
    id: 1,
    title: "Article Title Here",
    author: "Name Here",
    featured: true,
  },
  {
    id: 2,
    title: "Article Title Here",
    author: "Name Here",
    featured: false,
    tall: true,
  },
  {
    id: 3,
    title: "Article Title Here",
    author: "Name Here",
    featured: false,
  },
  {
    id: 4,
    title: "Article Title Here",
    author: "Name Here",
    featured: false,
  },
  {
    id: 5,
    title: "Article Title Here",
    author: "Name Here",
    featured: false,
  },
];

{/* a placeholder that is pretending to be an image */}
const ImagePlaceholder = ({ className }) => (
  <div className={`img-placeholder ${className || ""}`} />
);

//The Read More Button
const ReadMoreBtn = () => (
  <button className="read-more-btn">Read More &gt;</button>
);

// This is the main componenet as well as hover state it becomes that card's ID
export default function ArticleLayout() {
  const [hovered, setHovered] = useState(null);
  const featured = articles[0];     //First article, the big top one
  const tallCard = articles[1];     // second article, the one on the left
  const sideCards = articles.slice(2);      //the other articles, on the right

  return (
    <div className="layout">
      {/* Featured Article */}
      <article
        className={`featured-article ${hovered === featured.id ? "hovered" : ""}`} //condition when card is being hovered
        onMouseEnter={() => setHovered(featured.id)} //when mouse enters element, sets hovered to card's id
        onMouseLeave={() => setHovered(null)} //when mouse leaves, it resets to null
      >
        <ImagePlaceholder className="featured-img" /> {/* passed to ImagePlaceholder to give top article in css */}
        <div className="featured-meta">     {/* flex row, puts information on  left and button on right */}
          <div className="featured-text">   
            <h1 className="article-title featured-title">
              {featured.title}
            </h1>
            <span className="author-name">{featured.author}</span>
          </div>
          <ReadMoreBtn />
        </div>
      </article>

      {/* grid section, splits into 2 columns */}
      <div className="grid-section"> 
        {/* tall left card */}
        <article
          className={`tall-card ${hovered === tallCard.id ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(tallCard.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <ImagePlaceholder className="tall-img" />
          <div className="card-meta card-meta--below">
          <span className="author-name">{tallCard.author}</span>
            <h2 className="article-title">{tallCard.title}</h2>
            <div className="card-footer">
              <ReadMoreBtn />
            </div>
            
          </div>
        </article>

        {/* Right Side Cards */}
        <div className="side-cards">
          {sideCards.map((article) => ( //loops articles on right
            <article
              key={article.id}
              className={`side-card ${
                hovered === article.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHovered(article.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <ImagePlaceholder className="side-img" />
              <div className="card-meta">
                <span className="author-name">{article.author}</span>
                <h2 className="article-title side-title">
                  {article.title}
                </h2>
                <ReadMoreBtn />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}