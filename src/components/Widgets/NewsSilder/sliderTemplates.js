import React from 'react';
import { Link } from 'react-router-dom';
import Slick from 'react-slick';
import SliderSettings from './sliderDisplaySettings';
import './slider.css';

const SliderTemplates = (props) => {
    let template = props.data.map((item, idx) => {
        
        return(
            <div key={idx}>
                <div className='slider_item'>
                    <div className='slider_img'
                        style={ {
                                background:`url(../images/${item.image})`
                            }}>
                    </div>
                    <Link to={`/articles/${item.id}`}>
                        <div className='slider_title'>
                            {item.title}
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return(
        <div>
            <Slick {...SliderSettings}>
            {template}
            </Slick>
        </div>
    )
}

export default SliderTemplates;