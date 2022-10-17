import React from "react";

function CategoryBtn({ category, onFilterClick, classNameSetter, className}){
    // const [btnClass, setBtnClass] = useState(false);

    
    
  function handleClick(event){
    // setBtnClass(btnClass => !btnClass)
    
    onFilterClick(category)
    
    classNameSetter(event.target.id)
    // console.log(event.target.id)

  }



  return <button id={category} className={className} onClick={handleClick}>{category}</button>
}

export default CategoryBtn;