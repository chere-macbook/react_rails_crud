  class Question extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        editable: false
      }
      this.handleEdit = this.handleEdit.bind(this)
      console.log(this.props)
    }

    handleEdit(){
      if(this.state.editable){
        let question_field = this.question_field.value
        let question_type = this.question_type.value
        let frequency = this.frequency.value
        let id = this.props.question.id
        let question = {id: id,
          question: question_field,
          question_type: question_type,
          frequency: frequency
        }
        this.props.handleUpdate(question)
      }
      this.setState({
        editable: !this.state.editable
      })
    }

    render(){
      let frequency = this.state.editable ? <input type='text' ref={input => this.frequency = input} defaultValue={this.props.question.frequency}/>:<h3>{this.props.question.frequency}</h3>
      let question = this.state.editable ? <input type='text' ref={input => this.question_field = input} defaultValue={this.props.question.question}/>:<p>{this.props.question.question}</p>
      let question_type = this.state.editable ? <input type='text' ref={input => this.question_type = input} defaultValue={this.props.question.question_type}/>:<p>{this.props.question.question_type}</p>
      return(
        <tr key={this.props.question.id}>
           <td>{question}</td>
           <td>{question_type}</td>
           <td>{frequency}</td>
           <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
           <button onClick={() => this.props.handleDelete(this.props.question.id)}>Delete</button>
        </tr>
      )
    }
  }
