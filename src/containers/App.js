import React from 'react';
import { connect } from 'react-redux';
import './App.css'
import { setSearchField, requestRobots } from '../action';
import MainPage from '../components/MainPage';


//searchField是searchRobots裡的一個state
//state在這邊被轉換成屬性
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//判斷哪個action要被dispatch
//dispatch在這邊被轉換成屬性
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {

    //原本從onSearchChange(event)改成 onSearchChange = (event) =>，是為了確保裡面的this指向App，不然原本是指向SearchBox的<input>
    //onSearchChange在上面已經被寫成屬性，這邊的函式註解掉
    // onSearchChange = (event) => {
    //     //不要寫成this.state.searchfield，直接用內建方法setState
    //     this.setState({ searchfield: event.target.value });
    // }

    render() {
        return <MainPage {...this.props} />
    }
}

//connect方法會回傳一個方法
export default connect(mapStateToProps, mapDispatchToProps)(App);
