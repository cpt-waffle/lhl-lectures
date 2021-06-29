# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_29_141548) do

  create_table "cars", force: :cascade do |t|
    t.integer "make_id", null: false
    t.integer "model_id", null: false
    t.integer "trim_id", null: false
    t.integer "style_id", null: false
    t.integer "year"
    t.string "color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["make_id"], name: "index_cars_on_make_id"
    t.index ["model_id"], name: "index_cars_on_model_id"
    t.index ["style_id"], name: "index_cars_on_style_id"
    t.index ["trim_id"], name: "index_cars_on_trim_id"
  end

  create_table "makes", force: :cascade do |t|
    t.string "make"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "models", force: :cascade do |t|
    t.string "model"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "styles", force: :cascade do |t|
    t.string "body_style"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "trims", force: :cascade do |t|
    t.string "trim_level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cars", "makes"
  add_foreign_key "cars", "models"
  add_foreign_key "cars", "styles"
  add_foreign_key "cars", "trims"
end
