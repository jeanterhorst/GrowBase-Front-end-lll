import { combineReducers } from "@reduxjs/toolkit";

import books from "./books/BooksSlice";
import items from "./items/ItemsSlice";
import aluno from "./alunos/AlunoSlice";
import categoria from "./categorias/categoriaSlice";
import alunos from "./alunos/AlunosSlice";
import posts from "./posts/PostsSlice";

export default combineReducers({
  books,
  items,
  aluno,
  alunos,
  categoria,
  posts,
});
