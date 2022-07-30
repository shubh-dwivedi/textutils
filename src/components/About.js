import React from 'react'

export default function About(props) {
  return (
    <div className='container my-3' style={{color:(props.mode==="dark")?"white":"black"}}>
      <h1>About TextUtils</h1>
      <p>TextUtils is a fully functional React.js based Web application that provides user with various text utilities. In this app you can maipulate your text in the way you want. This web app is developed using React, Javascript, HTML, CSS(Bootstrap v5.1+). This app mandatorily requires to have javascript enabled in browser to work properly. So, make sure you have javascript enabled in your web browser. If you don't know how to enable JS in web browsers refer to this guide: <a href='https://www.enable-javascript.com/' target={"_blank"} rel="noreferrer">Enable JS in Browser</a>.</p>
      
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne" >
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
                <strong>Analyze and Edit text in style</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
                <strong>Analyze or Edit</strong> the text the way you want. Enter text in text box and you can get word count, characters present in the text and also get average time required to read that text. While editing, you can change every word to Upper case or Lower case. You can also change text to Sentence case where every first Alphabet of first word of every sentence is Capitalized and a space is added before every first word of sentence if its not present. You can also remove Extra Spaces from text, Copy text to Clipboard or Clear the contents of textbox in one click.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
              <strong>Dark Mode</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
                <strong>Dark mode</strong> is provided in this app by default so you can view it appropriately in all lighting conditions, according to your preference. By default, the theme is set to light mode but you can enable the Dark mode by clicking on "Enable Dark mode" toggle button present on top right corner of the screen in desktop browser or by opening the menu on navbar in mobile web browser.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
              <strong>Free Use Policy</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{backgroundColor: (props.mode==="dark")?"#212529":"white",color:(props.mode==="dark")?"white":"black"}}>
              <strong>TextUtils</strong> is completely free to use and intended for personal use only, commercial usage of this app is not allowed. You don't need to login/signup to start using this app, just enter your text in textbox provided and choose the option you want to implement on your text and you can also copy the formatted text in one click by clicking on the copy button.
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}
