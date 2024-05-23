import React, { Component } from "react";
import "./select.css";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      filteredItems: [
        {
          name: "apple",
          category: "fruit",
        },
        {
          name: "Banana",
          category: "fruit",
        },
        {
          name: "orange",
          category: "fruit",
        },
      ],
      selectedItem: "apple",
      items: [
        {
          name: "apple",
          category: "fruit",
        },
        {
          name: "Cucumber",
          category: "vegetable",
        },
        {
          name: "Banana",
          category: "fruit",
        },
        {
          name: "Celery",
          category: "vegetable",
        },
        {
          name: "orange",
          category: "fruit",
        },
        {
          name: "sausage",
          category: "meat",
        },
        {
          name: "bacon",
          category: "meat",
        },
      ],
    };
  }

  handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    const filteredItems = this.state.items.filter(
      (item) => item.category === selectedCategory
    );
    this.setState({ ...this.state, selectedCategory, filteredItems });
  };

  handleNameChange = (event) => {
    const selectedItem = event.target.value;
    this.setState({ ...this.state, selectedItem });
  };

  render() {
    const { selectedCategory, filteredItems, selectedItem } = this.state;

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{selectedItem}</h1>
        <div className="selecters">
        <div className="categoryContainer">
          <span>category</span>
          <select onChange={this.handleCategoryChange}>
            {Array.from(new Set(this.state.items.map((item) => item.category)))
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="itemContainer">
          <span>item</span>
          <select onChange={this.handleNameChange}>
            {filteredItems.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        </div>
      </div>
    );
  }
}
