  const AllQuestions = (props) => {
    var questions_list = props.questions_list.map((question) => {
      return(
        <Question question={question} handleDelete={props.handleDelete}
        handleUpdate={props.handleUpdate} />
      )
    })

    return(
      <div>
          <h1 id='title'>Questions Table</h1>
          <table class='table table-striped'>
            <thead>
              <tr>
                <th>Questions</th>
                <th>Question Type</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {questions_list}
            </tbody>
          </table>
          <Pagination handleChangePage={props.handleChangePage} page = {props.page}
          pages = {props.pages} />
       </div>
    )
  }
