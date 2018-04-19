import React, { Component } from 'react';
import Note from './components/note'
import NoteForm from './components/note_form'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      notes: [
      { id: 1, noteContent: undefined},
      ],
    }
    this.addNote = this.addNote.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }


  addNote(note){
    const previousNotes = this.state.notes
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note })

    this.setState({
      notes: previousNotes
    })
  }

  removeNote(id) {
  this.setState({
      notes: this.state.notes.filter((note, index) => note.id !== id)
    });
}


    clearAll(){
      this.setState({
        notes: []
      })
    }


  render() {
    return (
      <div className="container">
        <h1>React Note Taking App</h1>
          <div className="row">
            <div className="col-md-6">
              <NoteForm addNote={this.addNote} clearAll={this.clearAll} />
            </div>
              <div className="col-md-6">
                <h1>Notes appear below</h1>
              {
              this.state.notes.map((note) => {
                return (
                  <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote={this.removeNote} />
                )
              })
            }
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
