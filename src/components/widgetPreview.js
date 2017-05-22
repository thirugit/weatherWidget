import React, { Component, PropTypes } from 'react';
import widgetTemplate from '../constants/widgetTemplate';

export default class widgetPreview extends Component {
  static propTypes = {
    created: PropTypes.bool,
    title: PropTypes.string,
    wind: PropTypes.string,
    unit: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.widgetPreviewScript = this.widgetPreviewScript.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.created !== this.props.created;
  }
  componentDidUpdate() {
    const script = document.createElement('script');
    script.text = this.widgetPreviewScript();
    script.async = true;
    document.body.appendChild(script);
  }
  widgetPreviewScript() {
    return widgetTemplate + 'window.$weather.data={\'title\':"' + this.props.title + '",\'unit\':"' + this.props.unit + '",\'wind\':"' + this.props.wind + '"}; window.$weather.build();';
  }
  render() {
    return (
      <div className="widget">
        <h2>Script:</h2>
        <div id="widgetPreview" >
          {this.widgetPreviewScript()}
        </div>
      </div>
    );
  }
}
