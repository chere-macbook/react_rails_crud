class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :teaming_stages
      t.integer :appears_day
      t.integer :frequency
      t.string :question_type
      t.boolean :required
      t.string :conditions
      t.integer :role_id
      t.integer :mapping_id
      t.integer :pri
      t.timestamps
    end
  end
end
