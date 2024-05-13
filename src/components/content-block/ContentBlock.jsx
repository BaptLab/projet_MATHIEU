import React from "react";
import "./contentblock.css"; // Import CSS file

function ContentBlock(props) {
  const { depth = 1 } = props;

  // Function to clone children with a different className and incremented depth
  const cloneChildrenWithClassNameAndDepth = (
    children,
    depth
  ) => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }
      const updatedDepth = depth + 1;
      return React.cloneElement(child, {
        depth: updatedDepth,
      });
    });
  };

  // Check if props.children exists
  const childrenWithClassNameAndDepth =
    props.children &&
    cloneChildrenWithClassNameAndDepth(
      props.children,
      depth
    );

  // Function to render multiple content items when an array is passed
  const renderContentText = () => {
    if (Array.isArray(props.contentText)) {
      return (
        <ul>
          {props.contentText.map((item, index) => (
            <li
              key={index}
              className="contentBlock-content"
            >
              • {item} ;
            </li>
          ))}
        </ul>
      );
    } else if (typeof props.contentText === "object") {
      return Object.entries(props.contentText).map(
        ([subtitle, list], index) => (
          <div key={index}>
            <span className="contentBlock-subtitle">
              {subtitle}
            </span>
            {Array.isArray(list) ? (
              <ul>
                {list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            ) : (
              <span className="contentBlock-content">
                {list}
              </span>
            )}
          </div>
        )
      );
    } else {
      return (
        <span className="contentBlock-content">
          {props.contentText}
        </span>
      );
    }
  };

  return (
    <div
      id={props.id}
      className={`contentBlock-container contentBlock-level-${depth}`}
    >
      <div className="contentBlock-title-container">
        {props.icon && (
          <img
            className="contentBlock-icon"
            src={props.icon}
            alt={`${props.title}-icon`}
          />
        )}
        {props.title && (
          <h2 className="contentBlock-title">
            {props.title}
            {props.infos ? "*" : null}
          </h2>
        )}
        {props.titleIntroText && (
          <span className="contentBlock-title-introText">
            {props.titleIntroText}
          </span>
        )}
      </div>
      <div className="subtitle-container">
        {props.subtitle &&
          Object.entries(props.subtitle).map(
            ([key, value], index) => (
              <span
                key={index}
                className="contentBlock-subtitle"
              >
                {value}
              </span>
            )
          )}
      </div>

      <div className="contentBlock-content">
        {props.contentImage && (
          <img
            className="content-img"
            src={props.contentImage}
            alt="image"
          />
        )}
        {renderContentText()}
        {props.infos && (
          <span className="contentBlock-content-infos">
            * {props.infos}
          </span>
        )}
      </div>
      <div className="contentBlock-children">
        {childrenWithClassNameAndDepth}
      </div>
    </div>
  );
}

export default ContentBlock;
