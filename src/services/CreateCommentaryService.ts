import { getCustomRepository } from 'typeorm';
import CommentaryRepository from '../repositories/CommentaryRepository';
import Commentary from '../models/Commentary';
import CommentaryDTO from '../dtos/CommentaryDTO';

class CreateCommentaryService {
  public async execute({
    name,
    book_bible,
    chapter,
    verse,
    comment,
  }: CommentaryDTO): Promise<Commentary> {
    const commentaryRepository = getCustomRepository(CommentaryRepository);

    const commentary = commentaryRepository.create({
      name,
      book_bible,
      chapter,
      verse,
      comment,
    });

    await commentaryRepository.save(commentary);

    return commentary;
  }
}

export default CreateCommentaryService;
