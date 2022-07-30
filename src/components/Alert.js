import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lowerCase=word.toLowerCase();
        return word.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  return (
    <div style={{height: '45px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div> 
  )
}

export default Alert