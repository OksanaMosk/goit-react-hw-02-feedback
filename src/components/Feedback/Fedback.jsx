import React from "react";
import css from './Feedback.module.css'

class Feedback extends React.Component {
   handleIncrement = {
        value: this.props.state,
    }

    render () {
        return (

        <div className={css.feedbackEl}>
              <h className={css.feedbackTitle}>Please leave feedback</h> 
            <div className={css.feedbackButtons}>
                <button type="button" className={css.button} onClick={this.handleIncrement}>Good</button>
                <button type="button" className={css.button} onClick={this.handleIncrement}>Neutral</button>
                <button type="button" className={css.button} onClick={this.handleIncrement}>Bad</button>     
            </div>
            <div className={css.feedbackResult}>
                    <span>Good:{ }</span>
                    <span>Neutral:{ }</span>
                    <span>Bad:{ }</span>
                    <span>Total:{ }</span>
                    <span>Positive feedback:{ }</span>
            </div>        
        </div>
     
    

    
    )
    }
}

    


export default Feedback;