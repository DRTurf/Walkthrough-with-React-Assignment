import PropTypes from "prop-types";

function List({items}) {
  return (
    <div>
        <ul>{items.map((ele,index)=>(
            <li key={index}>{ele}</li>
        ))}</ul>
    </div>
  )
}

List.propTypes={
    items: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default List