import React from 'react';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css'
import {setSearchField} from '../action';

//searchField是一個state
const mapStateToProps  = state =>{
    return{
        searchField: state.searchField 
    }
}
//判斷哪個action要被dispatch
//onSearchChange在這邊是一個屬性
const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }   
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        console.log(this.props.store)
        //非同步request
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

    }

    //原本從onSearchChange(event)改成下面這個寫法
    //確保裡面的this指向App，不然原本是指向SearchBox的<input>
    //onSearchChange在上面已經被寫成屬性，這邊的函式註解掉
    // onSearchChange = (event) => {
    //     //不要寫成this.state.searchfield，直接用內建方法setState
    //     this.setState({ searchfield: event.target.value });
    // }

    render() {
        const { robots } = this.state;
        const {searchField,onSearchChange} = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (!robots.length) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={onSearchChange} />
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
