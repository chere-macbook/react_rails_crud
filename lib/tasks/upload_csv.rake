namespace :import do
  desc "IMport CSV file "
  task questions: :environment do
    require 'csv'
    data = []
    csv_file = File.join(File.expand_path(Rails.root), "/data/CSV_Data.csv")
    data_hsh = HashWithIndifferentAccess.new
    CSV.foreach(csv_file, headers: true, :header_converters => :symbol) do |row|
      role = Role.find_or_create_by(name: row[:role].downcase)
      mapping = Mapping.find_or_create_by(name: row[:mapping].downcase)
      questions = row.select {|k,v| ![:role, :mapping, :type].include?(k) }.to_h
      questions[:pri] = convert_to_intiger(questions[:pri])
      questions[:appears_day] = convert_to_intiger(questions[:appears_day])
      questions[:frequency] = convert_to_intiger(questions[:frequency])
      questions[:required] = questions[:required] == 'Yes' ? 1 : 0
      questions[:role_id] = role.id
      questions[:mapping_id] = mapping.id
      questions[:question_type] = row[:type]
      data << questions
    end
    Question.create!(data)
  end


  def convert_to_intiger(value)
    value.to_i
  end
end
