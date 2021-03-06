import React, { Component } from 'react';
import { Slider } from '../../components/slider/Slider';
import { InputText } from '../../components/inputtext/InputText';

export class SliderDemo extends Component {

    constructor() {
        super();
        this.state = { val2: 50, rangeValues: [20, 80] };
        this.onChangeSlider1 = this.onChangeSlider1.bind(this);
        this.onChangeSlider2 = this.onChangeSlider2.bind(this);
        this.onChangeSlider3 = this.onChangeSlider3.bind(this);
        this.onChangeSlider4 = this.onChangeSlider4.bind(this);
        this.onChangeRangeSlider = this.onChangeRangeSlider.bind(this);
        this.onChangeSlider5 = this.onChangeSlider5.bind(this);
    }

    onChangeSlider1(e) {
        this.setState({ val1: e.value });
    }

    onChangeSlider2(e) {
        var newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        this.setState({ val2: newValue });
    }

    onChangeSlider3(e) {
        this.setState({ val3: e.value });
    }

    onChangeSlider4(e) {
        this.setState({ val4: e.value });
    }

    onChangeRangeSlider(e) {
        this.setState({ rangeValues: e.value });
    }

    onChangeSlider5(e) {
        this.setState({ val5: e.value });
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Slider</h1>
                        <p>Slider is a component to provide input using dragging of a handle.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic: {this.state.val1}</h3>
                    <Slider style={{ width: '200px' }} onChange={this.onChangeSlider1} />

                    <h3>Input: {this.state.val2}</h3>
                    <InputText value={this.state.val2} style={{ width: '190px' }} type="number" onChange={this.onChangeSlider2} />
                    <Slider style={{ width: '200px' }} value={this.state.val2} onChange={this.onChangeSlider2} />

                    <h3>Animate: {this.state.val3}</h3>
                    <Slider style={{ width: '200px' }} onChange={this.onChangeSlider3} animate={true} />

                    <h3>Step: {this.state.val4}</h3>
                    <Slider style={{ width: '200px' }} onChange={this.onChangeSlider4} step={20} />

                    <h3>Range: {this.state.rangeValues[0]},{this.state.rangeValues[1]}</h3>
                    <Slider style={{ width: '200px' }} value={this.state.rangeValues} onChange={this.onChangeRangeSlider} range={true} />

                    <h3>Vertical: {this.state.val5}</h3>
                    <Slider style={{ height: '200px' }} onChange={this.onChangeSlider5} orientation="vertical" />
                </div>
            </div>
        );
    }
}