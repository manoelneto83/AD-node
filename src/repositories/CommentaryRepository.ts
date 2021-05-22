import { EntityRepository, Repository } from 'typeorm';
import Commentary from '../models/Commentary';

@EntityRepository(Commentary)
class CommentaryRepository extends Repository<Commentary> {}

export default CommentaryRepository;
