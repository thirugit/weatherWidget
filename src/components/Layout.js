import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WidgetPreview from './widgetPreview';
import { widgetEditorFieldChange, createNewWidget } from '../actions/userActions';

export class Layout extends Component {
  static propTypes = {
    dispatchFieldChange: PropTypes.func,
    dispatchCreateWidget: PropTypes.func,
    title: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onTxtChange = this.onTxtChange.bind(this);
    this.createWidget = this.createWidget.bind(this);
  }
  onRadioChange(e) {
    this.props.dispatchFieldChange(e.currentTarget.name, e.currentTarget.id);
  }
  onTxtChange(e) {
    this.props.dispatchFieldChange(e.currentTarget.name, e.currentTarget.value);
  }
  createWidget() {
    this.props.dispatchCreateWidget();
  }
  render() {
    return (
      <div className="">
        <div className="half-width">
          <div className="widget">
            <div className="widget-editor-text">Title</div>
            <div>
              <input type="text" className="input-box" name="title" onChange={this.onTxtChange} value={this.props.title} />
            </div>
            <div className="widget-editor-text">Unit</div>
            <div className="radio-btn">
              <input className="inputBox" type="radio" id="metric" name="unit" onChange={this.onRadioChange} defaultChecked />
              <label htmlFor="metric">C°</label>
            </div>
            <div className="radio-btn" >
              <input className="inputBox" type="radio" id="imperial" name="unit" onChange={this.onRadioChange} />
              <label htmlFor="imperial">F°</label>
            </div>
            <div className="widget-editor-text">Wind</div>
            <div className="radio-btn">
              <input className="inputBox" type="radio" value="on" id="on" name="wind" onChange={this.onRadioChange} defaultChecked />
              <label htmlFor="on">On</label>
            </div>
            <div className="radio-btn" >
              <input className="inputBox" type="radio" id="off" value="off" name="wind" onChange={this.onRadioChange} />
              <label htmlFor="off">Off</label>
            </div>
            <button onClick={this.createWidget}>Create widget</button>
          </div>
          <div className="widget"><h2>Usage: </h2> Copy the script, paste it inside a script tag. <br /><br />To load the widget, include a DIV with id &quot;weatherWidgetContainer&quot; in your HTML.
          </div>
          <WidgetPreview {...this.props} />
        </div>
        <div className="half-width" id="weatherWidgetContainer" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  title: state.title,
  unit: state.unit,
  wind: state.wind,
  icon: state.icon,
  temperature: state.temperature,
  windSpeed: state.windSpeed,
  windDirection: state.windDirection,
  created: state.created
});
export default connect(mapStateToProps, { dispatchFieldChange: widgetEditorFieldChange, dispatchCreateWidget: createNewWidget })(Layout);

