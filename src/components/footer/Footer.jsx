import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum and sobar sit ameit frah neifar
            adjfajjislkj! Lorem ipsum and sobar sit ameit frah neifar
            adjfajjislkj! Lorem ipsum and sobar sit ameit fra
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contact</h2>
          <span>Phone: 555 555 5555</span>
          <span>Email: gamedevjared@gmail.com</span>
          <span>Github: JRH89</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: N. America</span>
          <span>Country: U.S.A</span>
          <span>Current Location: Los Angeles</span>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer