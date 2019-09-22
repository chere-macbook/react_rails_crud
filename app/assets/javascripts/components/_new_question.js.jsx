const NewQuestion = (props) => {
  let formFields = {}

  return(
    <div>
      <h3>Create New Question</h3>
      <form  class="form-inline" onSubmit={
        (e) => { props.handleFormSubmit(formFields.question_type.value,
          formFields.question.value, formFields.frequency.value ); e.target.reset(); e.preventDefault();}
        }>
        <div class="form-group">
          <label> &nbsp; </label>
          <input ref={input => formFields.question_type = input} placeholder='Enter the Type'/>
        </div>
        <div class="form-group">
          <label> &nbsp; </label>
          <input ref={input => formFields.question = input} placeholder='Enter a question' />
         </div>
         <div class="form-group">
          <label> &nbsp; </label>
          <input ref={input => formFields.frequency = input} placeholder='Enter a frequency' />
         </div>
       <button>Submit</button>
      </form>
    </div>
  )
}
