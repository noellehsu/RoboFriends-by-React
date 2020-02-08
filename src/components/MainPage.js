import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './MainPage.css'
import Header from '../components/Header';


class MainPage extends React.Component {
    componentDidMount() {
        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }));
    }

    //原本從onSearchChange(event)改成 onSearchChange = (event) =>，是為了確保裡面的this指向App，不然原本是指向SearchBox的<input>
    //onSearchChange在上面已經被寫成屬性，這邊的函式註解掉
    // onSearchChange = (event) => {
    //     //不要寫成this.state.searchfield，直接用內建方法setState
    //     this.setState({ searchfield: event.target.value });
    // }

    filterRobots = () =>{
       return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const {onSearchChange, isPending} = this.props;
      
        if (isPending) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={this.filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }


    }
}

//connect方法會回傳一個方法
// export default connect(mapStateToProps,mapDispatchToProps)(App);

export default MainPage;
