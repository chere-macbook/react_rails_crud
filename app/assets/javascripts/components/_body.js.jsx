class Body extends React.Component{

  constructor(props){
    super(props)
    this.state = { questions_list: [], page: null, pages: null }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.initalState = this.initalState.bind(this)
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  componentDidMount(){
    fetch('/api/v1/questions.json')
      .then((response) => {return response.json()})
      .then((data) => {this.initalState(data.data)})
  }

  initalState(data){
    this.setState({
      questions_list: data.questions_list,
      page: data.page,
      pages: data.pages
    })
  }

  handleUpdate(question){
     fetch('/api/v1/questions/' + question.id,
     {
       method: 'PUT',
       body: JSON.stringify({question: question}),
       headers: {
         'Content-Type': 'application/json'
       }
     }).then((response) => {
       let newquestions = this.state.questions_list.filter((f) => f.id !== question.id)
       newquestions.push(question)
       this.setState({
        questions_list: newquestions
       })
     })
  }

  handleDelete(id){
    fetch('/api/v1/questions/' + id ,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        newQuestions = this.state.questions_list.filter((question) => question.id !== id)
        this.setState({
          questions_list: newQuestions
        })
      })
  }

  handleFormSubmit(question_type, question, frequency){
    let body = JSON.stringify({question: {question_type: question_type,
      question:  question,
      frequency: frequency } })
    fetch('http://localhost:3000/api/v1/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()}).then((question)=>{
      this.setState({
        questions_list: this.state.questions_list.concat(question)
      })
    })
  }

  handleChangePage(page) {
    fetch('/api/v1/questions.json?page=' + page)
      .then((response) => {return response.json()})
      .then((data) => {this.initalState(data.data)})
  }

  render() {
    return (
      <div>
        <div class="row">
          <NewQuestion handleFormSubmit={this.handleFormSubmit} />
        </div>
        <div class="row">
          <AllQuestions questions_list={this.state.questions_list}
          handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}
          handleChangePage = {this.handleChangePage} page = {this.state.page} pages = {this.state.pages}
          />
        </div>
      </div>
    );
  }
}
