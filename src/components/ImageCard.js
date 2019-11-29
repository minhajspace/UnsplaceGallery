import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imagesref = React.createRef();
  }
  componentDidMount() {
    this.imagesref.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const Height = this.imagesref.current.clientHeight;
    const spans = Math.ceil(Height / 10);
    this.setState({ span: spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img alt={description} src={urls.regular} ref={this.imagesref} />
      </div>
    );
  }
}
export default ImageCard;
