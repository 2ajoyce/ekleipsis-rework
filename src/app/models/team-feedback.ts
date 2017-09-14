import { UserDetails } from './user-details';
import { FeedbackCategory } from './feedback-category.enum';

export class TeamFeedback {
  category: FeedbackCategory;
  isAnonymous: boolean;
  message: string;
  sender: UserDetails;
}
