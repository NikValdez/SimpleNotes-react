import React, { Component } from 'react'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newContent: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this)
    this.writeNote = this.writeNote.bind(this)


  }

  handleUserInput(e){
    this.setState({
      newContent: e.target.value
    })
  }

  writeNote(){
    this.props.addNote(this.state.newContent)
    this.setState({
      newContent: ''
    })
  }

  render() {
    return (
      <div>
        <input
        placeholder="Add a note"
        value={this.state.newContent}
        onChange={this.handleUserInput}
        className="form-control" />
        <button onClick={this.writeNote} className="btn btn-primary">Add note</button>
        <button onClick={this.props.clearAll} className="btn btn-danger">Clear All</button>

      </div>
    )
  }
}


export default NoteForm
