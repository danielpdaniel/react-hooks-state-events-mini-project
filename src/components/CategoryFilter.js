import React, {useState} from "react";
import CategoryBtn from "./CategoryBtn";



function CategoryFilter({ categories, onBtnClick }) {
  // let clickedCategory = "All";
  // let filteredCategory = null;
 const catArray = categories.map(category=>null)
  const [classNames, setClassNames] = useState(catArray);
  
 


  function onFilterClick(category){
  onBtnClick(category)
  }

  function classNameSetter(eventId){
  // classNames = ["judy", "booty", "moody", "fruity"]
  // const currentCategory = categories.filter(category=> category===id)
  // console.log(currentCategory)
  catArray[categories.indexOf(eventId)] = "selected";
  setClassNames(catArray)
  
  }
 

  // function classNameGrabber(category){
  //   console.log(classNames[categories.indexOf(category)])
  // }
  
  return (
    <div className="categories" onClick={classNameSetter}>
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map(category => <CategoryBtn key={category} category={category} onFilterClick={onFilterClick} classNameSetter={classNameSetter} className={classNames[categories.indexOf(category)]}/>)
    }
    </div>
  );
}

export default CategoryFilter;
