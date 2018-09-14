import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import Axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/loadMoreButton';

class NewsList extends Component {
    state= {
        newsItems:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        this.requestArticles(this.props.start, this.props.start+ this.props.amount);
    }

    requestArticles = (start, end) => {
        Axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            console.log(...response.data)
            this.setState({
                newsItems:[...this.state.newsItems, ...response.data]
            })
        })
    }

    displayNews = () => {
        return this.state.newsItems.map((item, idx) => {
            return(
                <div>
                    <Link to ={`/articles/${item.id}`}><h3>{ item.title}</h3></Link>
                   
                </div>
            )
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.requestArticles(this.state.end, end);
        this.setState({
            end:end
        })
    }


    render(){
        console.log(this.state.end)
        return(
            <div>
                {this.displayNews()}
            <Button 
            type= 'loadMore'
            loadMore = {() => this.loadMore()}
            cta='Load More News'/>
            </div>
        )
    }
}

export default NewsList;