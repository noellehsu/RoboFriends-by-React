import React from 'react';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import {setSearchField} from '../action';

//回傳一個物件
const mapStateToProps  = state =>{
    return{
        searchField: state.searchRobots.searchField 
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }   
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        console.log(this.props.store)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }

    //原本從onSearchChange(event)改成下面這個寫法
    //確保裡面的this指向App，不然原本是指向SearchBox的<input>
    onSearchChange = (event) => {
        //不要寫成this.state.searchfield，直接用內建方法setState
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        if (!robots.length) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }


    }
}

//connect方法會回傳一個方法
export default connect(mapStateToProps,mapDispatchToProps)(App);
