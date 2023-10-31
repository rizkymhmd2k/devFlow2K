import { Schema, models, model, Document } from 'mongoose';

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  createdAt: { type: Date, default: Date.now }
})

const Question = models.Question || model('Question', QuestionSchema);

// Sure, imagine you have a toy box, but you're not sure if there's a specific toy you want to play with inside.
// So, you look into the box, and if the toy you're looking for is already there (models.Question), you take it out and play with it.
// But if the toy you want isn't in the box, you create a new one (model('Question', QuestionSchema)) and then start playing with it.
// This line of code helps make sure you always have the right toy to play with, either by finding it in the box or creating a new one when needed.
export default Question;