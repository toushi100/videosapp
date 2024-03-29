import React from 'react';


class SearchBar extends React.Component{
    state={term:''};
    onInputChange = (event) => {
        this.setState({term : event.target.value });
    }
    onFormSubmit= event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    } 
    render(){
        return(<div className="ui segment search-bar"> 
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field" >
                            <label>Video Search</label>
                            <input onChange={this.onInputChange} value={this.state.term} type="text" />
                        </div>
                    </form>
                </div>);
    }
}

export default SearchBar;