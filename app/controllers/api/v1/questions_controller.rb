class Api::V1::QuestionsController < Api::V1::BaseController
  def index
     @questions = Question.paginate(page: params[:page])
     respond_with data: { questions_list: @questions,
       page: @questions.current_page, pages: @questions.total_pages}
  end

  def create
    respond_with :api, :v1, Question.create(question_params)
  end

  def destroy
    respond_with Question.destroy(params[:id])
  end

  def update
    item = Question.find(params["id"])
    item.update_attributes(question_params)
    respond_with item, json: item
  end

  private

  def question_params
    params.require(:question).permit(:id, :question_type, :frequency, :question)
  end
end
