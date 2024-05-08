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

  return (
    <div
      className={`contentBlock-container contentBlock-level-${depth}`}
    >
      <div className="contentBlock-title-container">
        {props.icon && (
          <img
            src={props.iconUrl}
            alt={`${props.title}-icon`}
          />
        )}
        {props.title && (
          <h2 className="contentBlock-title">
            {props.title}
          </h2>
        )}
        {props.titleIntroText && (
          <span className="contentBlock-title-introText">
            {props.titleIntroText}
          </span>
        )}
      </div>
      {props.subtitle && (
        <span className="contentBlock-subtitle">
          {props.subtitle}
        </span>
      )}
      <div className="contentBlock-content">
        {props.contentImage &&
        props.contentImage.startsWith("<svg") ? (
          <span
            className="contentBlock-svg"
            dangerouslySetInnerHTML={{
              __html: props.contentImage,
            }}
          />
        ) : (
          <img
            className="content-img"
            src={props.contentImage}
            alt="image"
          />
        )}
        {props.contentText && (
          <span className="contentBlock-content">
            {props.contentText}
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
