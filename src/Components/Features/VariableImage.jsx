import React from "react";

// Custom Image Component with Fallback Logic
const VariableImage = ({ darkMode, src, alt, style }) => {
  class Image extends React.Component {
    state = {
      noVariant: false,
      hasError: false, // To track if the image has failed to load
      isLoading: true, // To track if the image is loading
    };

    // Error handling method, called when image fails to load
    handleError = () => {
      const { noVariant } = this.state;
      if (!noVariant) {
        this.setState({
          noVariant: true,
        });
        return;
      }
      this.setState({
        hasError: true,
      });
    };

    // Image loaded successfully, stop showing the placeholder
    handleLoad = () => {
      this.setState({ isLoading: false });
    };

    // Logic to get the image path depending on darkMode
    getImagePath = (src) => {
      if (!src) return null;

      const [name, extension] = src.split(/(?=\.[^.]+$)/); // Split before the file extension
      const variantImage = darkMode
        ? `${name}_White${extension}`
        : `${name}_Black${extension}`;
      return variantImage;
    };

    render() {
      const { hasError, noVariant, isLoading } = this.state;
      const { src, alt, style } = this.props;
      // Get the variant image path
      const variantPath = this.getImagePath(src);

      // Placeholder styling (before the image loads)
      const placeholderStyle = {
        width: style.width || "40px", // Default width if not provided
        height: style.height || "40px", // Default height if not provided
        backgroundColor: "#f0f0f0", // Placeholder color
        display: isLoading ? "block" : "none", // Show placeholder while loading
      };

      if (noVariant) {
        return (
          <div>
            {/* Placeholder div */}
            <div style={placeholderStyle}></div>

            {/* Image element */}
            <img
              src={src}
              onError={this.handleError}
              onLoad={this.handleLoad} // Hide placeholder when image is loaded
              alt={alt}
              style={{
                ...style,
                display: isLoading ? "none" : "unset", // Hide the image until it's loaded
                opacity: isLoading ? 0 : 1, // Fade the image in after loading
                transition: "opacity 0.3s ease-in-out", // Smooth fade-in transition
              }}
            />
          </div>
        );
      }
      if (hasError) {
        return (
          <div>
            {/* Placeholder div */}
            <div style={placeholderStyle}></div>

            {/* Image element */}
            <img src="assets/Images/404.png" alt={alt} style={style} />
          </div>
        );
      }

      return (
        <div>
          {/* Placeholder div */}
          <div style={placeholderStyle}></div>

          {/* Image element */}
          <img
            src={variantPath}
            onError={this.handleError}
            onLoad={this.handleLoad} // Hide placeholder when image is loaded
            alt={alt}
            style={{
              ...style,
              width: "40px",
              display: isLoading ? "none" : "unset", // Hide the image until it's loaded
              opacity: isLoading ? 0 : 1, // Fade the image in after loading
              transition: "opacity 0.3s ease-in-out", // Smooth fade-in transition
            }}
          />
        </div>
      );
    }
  }

  return <Image src={src} alt={alt} style={style} />;
};

export default VariableImage;
