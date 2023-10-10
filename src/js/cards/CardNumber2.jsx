import React from 'react'
import '../../styles/index.css'


const CardNumber2 = (props) => {
    const styleCard2 = {
        display: props.display,
        justifyContent: props.justifyContent,
        alignItems: props.alignItemst
    }
    return (
        <div className="col">
            <div className="card">
                <img src={props.src} className="card-img-top" width="500" height="325" alt="SpidermanImage" />
                <div className="card-body card-body-custom">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
            <div class="card-footer" style={styleCard2}>
                <button type="button" class="btn btn-primary">Find out More!</button>
            </div>
        </div>
    )
}

export default CardNumber2
