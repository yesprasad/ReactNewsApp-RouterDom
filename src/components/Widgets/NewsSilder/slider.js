import React, { Component } from 'react';
import Axios from 'axios';

import SliderTemplates from './sliderTemplates';
import { URL } from '../../../config';

class NewsSlider extends Component {

    state = {
        news:[]
    }

    componentWillMount() {
        Axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.end}`)
        .then(response => {
            this.setState({
                news: response.data
            })
        })
    }

    render() {
        return(
            <SliderTemplates data={this.state.news} settings={this.props.settings}/>
        )
    }
}


export default NewsSlider;