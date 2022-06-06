import { Schema, model, models } from 'mongoose'
import shortid from 'shortid'

shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-$'
)
const dbSchema = new Schema(
  {
    id: {
      type: 'string',
      default: shortid.generate(),
      required: true,
      unique: true,
      trim: true,
      maxlength: [30, 'id is too long']
    },
    status: {
      type: 'string',
      enum: ['ready', 'unready'],
      default: 'ready'
    },
    title: {
      type: 'string',
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title is too long']
    },
    description: {
      type: 'string',
      required: [true, 'description is required'],
      trim: true,
      maxlength: [500, 'Title is too long']
    },
    text: {
      type: 'string',
      trim: true
    },
    category: {
      type: 'string',
      required: [true, 'category is required'],
      trim: true,
      maxlength: [50, 'category is too long']
    },
    image: {
      type: 'string',
      default: '/',
      required: true,
      trim: true
    },
    embed: {
      type: 'string',
      trim: true
    },
    keywords: {
      type: Array,
      default: [],
      required: [true, 'keywords is required'],
      trim: true,
      maxlength: [200, 'keywords is too long']
    },
    hashtag: {
      type: Array,
      default: [],
      trim: true,
      maxlength: [200, 'keywords is too long']
    },
    author: {
      type: 'string',
      trim: true,
      required: [true, 'author is required'],
      maxlength: [100, 'author is too long']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
export default models.Newsdb || model('Newsdb', dbSchema)
