import Sections from './Sections'
 
function Landing({ searchValue, setHide }){
 
  const handleHideClick = () => {
    setHide((prevState) => {
      prevState == "show" ? prevState = "hide" : prevState = "show";
      return prevState
    });
  };
 
 
  return (
  <div className="MidPage">
      <li><button onClick={handleHideClick} className="hideButton">Hide the navbar</button></li>
      
      <p className="subject">ALL SECTIONS</p>
      <div className='cards'>
        <Sections   searchValue={searchValue}  />     
      </div>
  </div>
  )

}
 
export default Landing