import { Component } from "react";
import Popular from "./Popular";
import Search from "./Search";

class Home extends Component {
  state = { searchTerm: "" };

  handleInput = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  // Do not change the render function
  render() {
    return (
      <div className="relative w-full">
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-lg">
            <form className="mt-5 sm:flex sm:items-center">
              <input
                type="text"
                name="search"
                className="inline w-full rounded-md border border-gray-300 bg-dark py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => this.handleInput(e)}
                placeholder="Search Movies..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>

        {this.state.searchTerm.length == 0 ? (
          <Popular {...this.props} />
        ) : (
          <Search searchTerm={this.state.searchTerm} />
        )}
      </div>
    );
  }
}

export default Home;
