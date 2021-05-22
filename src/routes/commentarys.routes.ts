import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateCommentaryService from '../services/CreateCommentaryService';
import CommentaryRepository from '../repositories/CommentaryRepository';

const commentarysRouter = Router();

commentarysRouter.get('/', async (req, res) => {
  const commentaryRepository = getCustomRepository(CommentaryRepository);
  const commentarys = await commentaryRepository.find();

  return res.json(commentarys);
});

commentarysRouter.post('/', async (req, res) => {
  const { name, book_bible, chapter, verse, comment } = req.body;

  const createCommentaryService = new CreateCommentaryService();

  const commentary = await createCommentaryService.execute({
    name,
    book_bible,
    chapter,
    verse,
    comment,
  });

  return res.json(commentary);
});

export default commentarysRouter;
