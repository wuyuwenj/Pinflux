# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_28_190516) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "name", null: false
    t.string "body", null: false
    t.boolean "private", null: false
    t.bigint "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_boards_on_owner_id"
  end

  create_table "pins", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.string "alt_text"
    t.string "destination_link"
    t.bigint "author_id", null: false
    t.bigint "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_pins_on_author_id"
    t.index ["board_id"], name: "index_pins_on_board_id"
  end

  create_table "saved_pins", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pin_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["pin_id"], name: "index_saved_pins_on_pin_id"
    t.index ["user_id"], name: "index_saved_pins_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "boards", "users", column: "owner_id"
  add_foreign_key "pins", "boards"
  add_foreign_key "pins", "users", column: "author_id"
  add_foreign_key "saved_pins", "pins"
  add_foreign_key "saved_pins", "users"
end
