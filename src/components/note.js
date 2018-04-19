import React, { Component } from 'react'


class Note extends Component {
  constructor(props){
    super(props)

  this.noteContent = props.noteContent

  }


  removeNote(noteId) {
  this.props.removeNote(noteId);
}

  render(props) {
    return(
      <div>
        {this.noteContent &&
          <div className="card">
            <div className="row">
          <div className="col-md-9">
          {this.noteContent}
          </div>
          <div className="col-md-3">
        <button onClick={(e)=> this.removeNote(this.props.noteId)} className="closing">X</button>
        </div>
          </div>
          </div>}
      </div>
    )

  }
}





export default Note
