class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :task

      t.timestamps
    end
  end
end
